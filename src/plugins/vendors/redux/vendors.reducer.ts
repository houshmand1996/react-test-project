import { ResponseElement } from 'core';
import { VendorsActions } from './vendors.types';

interface VendorsState {
    loader: boolean;
    vendors: ResponseElement<'TEXT' | 'VENDOR'>[] | null;
    vendorsCount: number;
}

const INITIAL_STATE: VendorsState = {
    loader: true,
    vendorsCount: 0,
    vendors: [],
};

export const vendorsReducer = (state = INITIAL_STATE, action: VendorsActions): VendorsState => {
    switch (action.type) {
        case 'SET_LOADER':
            return { ...state, loader: action.payload };
        case 'SET_VENDORS_COUNT':
            return { ...state, vendorsCount: action.payload };
        case 'SET_VENDORS':
            return { ...state, vendors: [...state.vendors as ResponseElement<'TEXT' | 'VENDOR'>[] , ...action.payload] };
        default:
            return state;
    }
};

