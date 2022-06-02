import { Canceler } from './../../../node_modules/axios/index.d';
// import { VendorCartData } from 'plugins';
import { get, IResult, ResponseElement } from 'core';
import { useEffect, useState } from 'react';

export const useVendors = (lat: number, long: number, pageNumber: number) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [vendors, vendorsSet] = useState<ResponseElement<'TEXT' | 'VENDOR'>[]>([]);
    const [vendorsCount, vendorsCountSet] = useState<number>(0);
    const [hasMore,hasMoreSet] = useState(false);
    
    useEffect(() => {
        setLoading(false);
        setError(false);
        vendorsSet([]);
        vendorsCountSet(0);
        hasMoreSet(false);
    },[lat, long,]);
    
    useEffect(() => {
        let canceler:Canceler | undefined;
        getVendorsData(lat, long, pageNumber,canceler);
        return () => {
            if (canceler)  canceler();
        };
    }, [ lat, long,pageNumber]);

    const getVendorsData = async (lat: number, long: number, pageNumber: number,canceler:Canceler | undefined) => {
        try {
            const { data } = await get<IResult<'TEXT' | 'VENDOR'>>('/restaurant/vendors-list', {
                page: pageNumber,
                page_size: 10,
                lat,
                long,
            },canceler);
            const { finalResult, count } = data;
            vendorsCountSet(count);
            vendorsSet(prevVendor => [...new Set([...prevVendor,...finalResult])]);
            hasMoreSet(count > pageNumber * 10);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
        
    };

    return {vendors, vendorsCount, loading, error , hasMore};
};  