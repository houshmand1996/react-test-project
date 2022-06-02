/* eslint-disable react/display-name */
import { forwardRef, Ref } from 'react';
import {addCommas,turnToPersianDigits} from 'core';
import { ReactComponent as Star } from 'core/assets/star.svg';
import './vendor-cart.styles.scss';


export interface VendorCartData {
    id: number;
    vendorCode: string;
    title: string;
    description: string;
    rate: number;
    rating: number;
    logo: string;
    defLogo: string;
    isOpen: boolean;
    maxDeliveryFee: number;
    commentCount: number;
    isZFExpress: boolean;
    deliveryFee: number;
    backgroundImage: string;
    backgroundImageCustom: string;
    deliver: boolean;
}


export const VendorCart = forwardRef(({ vendor }: { vendor: VendorCartData }, ref: Ref<HTMLDivElement>) => (
    <div className='VendorCart' ref={ref} id={vendor.id + ''}>
        <div className='VendorCart__holder'>
            <header className='VendorCart__header' >
                <div className='VendorCart__image-box'>
                    <img src={vendor?.backgroundImage || vendor?.backgroundImageCustom} className='VendorCart__image' />
                </div>
                <div className='VendorCart__logo-box'>
                    <img className='VendorCart__logo' src={vendor.defLogo} alt={vendor.title} />
                </div>
            </header >
            <div className='VendorCart__info' >
                <div className='VendorCart__details'>
                    <div className='VendorCart__title'>{vendor.title}</div>
                    <div className='VendorCart__stats-box'>
                        {
                            vendor.commentCount > 10 ? (<div className='VendorCart__stats'>
                                <div className='VendorCart__stats-comment-count'>
                                    <span>(</span>
                                    {turnToPersianDigits(vendor.commentCount)}
                                    <span>)</span>
                                </div>
                                &nbsp;
                                <div className='VendorCart__stats-rating-value'>
                                    <span>{turnToPersianDigits(vendor.rate)}</span>
                                    &nbsp;
                                    <Star />
                                </div>
                            </div>) :
                                (<div className='VendorCart__new'>
                                    <span>جدید</span>
                                </div>)
                        }
                    </div>
                </div>
                <div className='VendorCart__description'>
                    {vendor.description.replace(/,/g, ' , ')}
                </div>
                <div className="VendorCart__status">
                    {
                        vendor.isOpen ? (
                            <div className='VendorCart__status-open'>
                                <span className='VendorCart__delivery-type'>{vendor.isZFExpress ? 'ارسال اکسپرس' : 'پیک فروشنده '}</span>
                                <span>
                                    {vendor.deliveryFee > 0 ? `${turnToPersianDigits(addCommas(vendor.deliveryFee))} تومان` : 'رایگان'}
                                </span>
                            </div>) :
                            (<div className='VendorCart__status-close'>
                                پیش سفارش
                            </div>)
                    }
                </div>
            </div>
        </div>

    </div >));
