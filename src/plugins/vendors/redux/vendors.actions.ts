import { ResponseElement } from 'core';
import { GetVendors , SetLoader , SetVendors ,SetVendorCount } from './vendors.types';


export const getVendors = (pageNumber:number): GetVendors => ({
    type: 'GET_VENDORS',
    payload: pageNumber,
});

export const setLoader = (isLoading:boolean): SetLoader => ({
    type: 'SET_LOADER',
    payload: isLoading,
});

export const setVendorsCount = (count:number): SetVendorCount => ({
    type: 'SET_VENDORS_COUNT',
    payload: count,
});

export const setVendors = (vendors:ResponseElement<'TEXT' | 'VENDOR'>[]): SetVendors => ({
    type: 'SET_VENDORS',
    payload: vendors,
});




