/* eslint-disable camelcase */
import { Loader, ResponseElement } from 'core';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVendors, selectHasMore, selectVendors, selectVendorsLoader } from '../redux';
// import { useVendors } from '../useVendors';
import { VendorCart } from './vendor-cart.component';
import './Vendors.styles.scss';

export const VendorTitle = ({ title }: { title: string }) => (<h2 className='Vendors__title' >
  <span>{title}</span>
</h2>);

export const Vendors = () => {
  const [pageNumber, pageNumberSet] = useState(0);
  // const { vendors, loading, hasMore, } = useVendors(31.905, 54.322, pageNumber);
  // useEffect(() => {
  //   pageNumberSet(0);
  // }, [location]);
  const dispatch = useDispatch();
  const loading = useSelector(selectVendorsLoader);
  const vendors = useSelector(selectVendors);
  // const vendorsCount  = useSelector(selectVendorsLoader);
  const hasMore = useSelector(selectHasMore);


  useEffect(()=>{
    dispatch(getVendors(pageNumber));
  },[pageNumber]);


  const observable = useRef<any>(null);

  const lastVendorElementRef = useCallback((node: any) => {
    if (loading) return;
    observable.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        pageNumberSet(pageNumber => pageNumber + 1);
      }
    });

    if (node) {
      observable.current?.observe(node);
    }
  }, [loading, hasMore]);
  return (
    <Loader loading={loading}>
      <div className='Vendors'>
        {
          vendors?.map((vendor: ResponseElement<'TEXT' | 'VENDOR'>, index) => {
            const { type, data } = vendor;
            if (type === 'TEXT' as string) {
              return <VendorTitle title={data as unknown as string} />;
            }
            else {
              if (vendors.length === index + 1) {
                return (<VendorCart vendor={data} ref={lastVendorElementRef} key={data.id} />);
              }
              return (<VendorCart vendor={data} key={data.id} />);
            }
          })
        }

      </div>
    </Loader>
  );
};

export default Vendors;