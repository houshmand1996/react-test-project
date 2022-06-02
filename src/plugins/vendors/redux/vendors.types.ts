import { ResponseElement } from 'core';
import { AnyAction } from 'redux';

interface TotalAction<T, P>  extends AnyAction {
  type: T;
  payload: P;
}

export type GetVendors = TotalAction<'GET_VENDORS',number>;
export type SetVendors = TotalAction<'SET_VENDORS',ResponseElement<'TEXT' | 'VENDOR'>[]>;
export type SetVendorCount = TotalAction<'SET_VENDORS_COUNT',number>;
export type SetLoader = TotalAction<'SET_LOADER',boolean>;




export type VendorsActions =  GetVendors | SetLoader | SetVendorCount | SetVendors;