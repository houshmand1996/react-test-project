import { AxiosResponse, Canceler } from './../../../node_modules/axios/index.d';
import axios, { Method } from 'axios';
import { VendorCartData } from 'plugins';



export interface ResponseElement <T extends 'TEXT' | 'VENDOR'> {
  type: T extends 'Text' ? 'TEXT' : 'VENDOR';
  data:  T extends 'Text' ? string : VendorCartData;
};

const BASE_URL = 'https://snappfood.ir/mobile/v3';


export interface IResult<T extends 'TEXT' | 'VENDOR'> {
  count: number;
  // eslint-disable-next-line camelcase
  open_count: number;
  finalResult: ResponseElement<T>[];
}

interface IVendorResponse<T extends 'TEXT' | 'VENDOR'> {
  status: boolean;
  data: IResult<T>;
};

// Add a response interceptor
axios.interceptors.response.use((response: AxiosResponse<IVendorResponse<'TEXT' | 'VENDOR'>>) => {
  const { data } = response;
  if (!data.status) return new Error('Something went wrong');
  return response?.data;
},
  (err) => {
    if(axios.isCancel(err)) return;
    alert('something wrong happen');
    return Promise.reject(err);
  });

const request  = <T>(endPoint: string, method: Method, data: any, params: any,cancelHandler:Canceler | undefined=undefined) => {
  const url = BASE_URL + endPoint;
  return axios.request<T>({
    method, url, params, data,cancelToken: new axios.CancelToken(function executor(c) {
      // An executor function receives a cancel function as a parameter
      cancelHandler = c;
    })
  });
};

const get = <T>(endPoint: string, params: any = null,cancelHandler:Canceler | undefined) => request<T>(endPoint, 'GET', null, params,cancelHandler);

const post = (endPoint: string, data: any) => request(endPoint, 'POST', data, null);

const put = (endPoint: string, data: any) => request(endPoint, 'PUT', data, null);

const patch = (endPoint: string, data: any) => request(endPoint, 'PATCH', data, null);

const remove = (endPoint: string) => request(endPoint, 'DELETE', null, null);


export {
  get, put, post, remove, patch,
};
