/* eslint-disable react-hooks/rules-of-hooks */
import ProductDescription from '@/components/ProductDescription';
import ProductInfo from '@/components/ProductInfo';
import ProductReview from '@/components/ProductReview';
import ReviewForm from '@/components/ReviewForm';
import HomePageLayout from '@/layout/HomePageLayout';
import Image from 'next/image';
import React, { useState } from 'react';

const ProductDetails = ({ product }) => {

    // React state to manage component visibility
    const [component, setComponent] = useState(<ProductDescription product={product} />);
    // console.log(product)
    const getComponent = (value) => {
        setComponent(value);
    };


    return (
        <HomePageLayout>
            <div>
                <div className='px-10'>
                    <div className="lg:flex justify-start w-full bg-white lg:p-8 md:p-4 p-2">
                        <Image width={500} height={500} className="w-[600px] object-cover object-center" src={product?.data?.image} alt="img" />
                        <ProductInfo product={product} />
                    </div>
                    <div className="text-gray-700 body-font">
                        <div className="container py-7 mx-auto">
                            <div className='flex font-bold border-b-2 border-primary'>
                                <button onClick={() => getComponent(<ProductDescription product={product} />)} className='bg-green-600 text-white font-bold px-4 py-2 border-r border-gray-200'>Description</button>
                                <button onClick={() => getComponent(<ProductReview product={product} />)} className='bg-green-600 text-white font-bold px-4 py-2 border-r border-gray-200'>Reviews</button>
                                <button onClick={() => getComponent(<ReviewForm productId={product} />)} className='bg-green-600 text-white font-bold px-4 py-2'>Write Review</button>
                            </div>
                            <div className="p-4 bg-white">
                                {component}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomePageLayout>
    );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
    return page;
};

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.BASE_URL}/products`);
    const products = await res.json();

    const paths = products?.data?.map((product) => ({
        params: { productId: product._id }
    }));
    return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {

    const res = await fetch(`${process.env.BASE_URL}/products/${params.productId}`, { revalidate: 0, cache: 'force-cache' });
    const product = await res.json();

    return {
        props: {
            product
        }
    }
}