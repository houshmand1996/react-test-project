import to from 'await-to-js';
import { AxiosResponse, Canceler } from 'axios';
import { get, IResult } from 'core';

export class VendorsService {
    async getVendors(pageNumber: number) {
        let canceler:Canceler | undefined;
        const [, response] = await to<AxiosResponse<IResult<'TEXT' | 'VENDOR'>>>(get('/restaurant/vendors-list', {
            page: pageNumber,
            page_size: 10,
            lat: 31.905,
            long: 54.322,
        },canceler));
        if(canceler)canceler();
        return response?.data;
    }
}  