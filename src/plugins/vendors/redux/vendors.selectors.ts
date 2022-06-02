import { RootState } from 'core';
import { createSelector } from 'reselect';


const selectVendorsState = (state: RootState) => state.vendorsState;

export const selectVendors = createSelector(
  [selectVendorsState],
  vendorsState => vendorsState.vendors,
);

export const selectVendorsCount = createSelector(
  [selectVendorsState],
  vendorsState => vendorsState.vendorsCount,
);

export const selectVendorsLoader = createSelector(
  [selectVendorsState],
  vendorsState => vendorsState.loader,
);

export const selectHasMore = createSelector(
  [selectVendorsCount, selectVendors],
  (vendorsCount, vendors) => vendors ? vendorsCount > vendors.length : false,);
















