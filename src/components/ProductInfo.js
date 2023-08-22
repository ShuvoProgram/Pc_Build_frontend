import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { GrDeliver } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';
import { MdAddShoppingCart, MdCompareArrows } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import { BiGitCompare } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBrightnessHigh } from 'react-icons/bs';
import Facebook from '@/assets/icons/facebook.svg';
import Twitter from '@/assets/icons/twitter.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import Github from '@/assets/icons/github.svg';
import Paypal from '@/assets/icons/paypal.svg';
import Stripe from '@/assets/icons/stripe.svg';

const ProductInfo = ({ product }) => {
    const { title, category, price, status, reviews } = product?.data;
    //Calculate average rating
    const totalReviews = reviews?.length;
    const averageRating = totalReviews ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews : 0;
    return (
        <div className="lg:w-2/3 w-full lg:p-8 p-2 flex justify-start items-start flex-col">
            <div className='lg:flex items-center'>
                <div className='lg:w-1/2 w-full'>
                    <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-green-600 underline mb-2">{category}</p>
                    <h2 className=" lg:text-2xl text-xl text-gray-800 font-semibold">{title}</h2>
                    <div className="flex justify-start items-center gap-4">
                        <ReactStars
                            count={5}
                            size={22}
                            value={averageRating}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                        <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">{reviews?.length} Reviews</p>
                    </div>
                    <p className="font-bold text-2xl leading-6 text-primary mr-4 my-4">${price}<span className=" font-semibold text-sm leading-3 hover:text-gray-700 duration-100  text-green-600 ml-2"> ({status})</span></p>

                    <div className="flex space-x-2 mt-7">
                        <button className='flex items-center bg-green-600 text-white text-sm font-bold border-2 border-primary shadow-sm rounded bottom-4 px-6 py-2'>
                            Add To Cart <MdAddShoppingCart className='text-xl ml-2'></MdAddShoppingCart>
                        </button>
                        <button className='bg-white border border-primary rounded shadow-sm '>
                            <FiHeart className='text-4xl text-primary px-2' />
                        </button>
                        <button className='bg-white border border-primary rounded shadow-sm '>
                            <BiGitCompare className='text-4xl text-primary px-2' />
                        </button>
                    </div>
                    <div className="flex justify-start space-x-2 mt-5">
                        <Link href="https://www.facebook.com/arfat.akter.98/">
                            <Image width={20} height={20} src={Facebook} alt="" className='w-6 h-6' />
                        </Link>
                        <Link href="https://www.linkedin.com/in/arfat-begum-0b22221b2/">
                            <Image width={20} height={20} src={Linkedin} alt="" className='w-7 h-7' />
                        </Link>
                        <Link href="https://twitter.com/arfatbegum">
                            <Image width={20} height={20} src={Twitter} alt="" className='w-6 h-6' />
                        </Link>
                        <Link href="https://instagram.com/arfat_akter_25">
                            <Image width={20} height={20} src={Instagram} alt="" className='w-7 h-7' />
                        </Link>
                        <Link href="https://github.com/arfatbegum" >
                            <Image width={20} height={20} src={Github} alt="" className='w-7 h-7' />
                        </Link>
                    </div>
                    <div className='flex justify-start items-center space-x-2'>
                        <span className="">
                            <Image src={Paypal} alt="" className='w-16 h-16' />
                        </span>
                        <span>
                            <Image src={Stripe} alt="" className='w-10 h-10' />
                        </span>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full bg-blue-100  bg-opacity-50 rounded-lg border-opacity-50 p-6 border-2 border-primary'>
                    <div className="list-none">
                        <li className='flex items-center justify-start mb-4'>
                            <GrDeliver className='text-4xl mr-4' />
                            Free shipping apply to all orders over SAR 400
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <AiOutlineHome className='text-2xl mr-4' />
                            Home Delivery within 4 Days
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <GrDeliver className='text-xl mr-4' />
                            Cash on Delivery Available
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <MdCompareArrows className='text-2xl mr-4' />
                            2 Days returns money back guarantee
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <BsBrightnessHigh className='text-2xl mr-4' />
                            2 years Warranty
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;