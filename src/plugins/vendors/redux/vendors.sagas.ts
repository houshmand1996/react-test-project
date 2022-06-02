import { VendorsService } from './vendors.service';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  setLoader,
  getVendors,
  setVendorsCount,
  setVendors,
} from 'plugins';
import { IResult } from 'core';

const vendorService = new VendorsService();

console.log({vendorService});

export function* fireGetVendors({ payload: pageNumber }: ReturnType<typeof getVendors>) {
  if(pageNumber === undefined) return;
  const data:IResult<'TEXT' | 'VENDOR'> = yield vendorService.getVendors(pageNumber);
  console.log('-------------------',{data});
  const { finalResult, count } = data;
  console.log('-------------------',{finalResult, count});
  yield put(setLoader(false));
  yield put(setVendorsCount(count));
  yield put(setVendors(finalResult));
}

export function* onGetVendors() {
  yield takeLatest('GET_VENDORS', fireGetVendors);
}


export default function* vendorsSagas() {
  yield all([
    call(onGetVendors),
  ]);
}
