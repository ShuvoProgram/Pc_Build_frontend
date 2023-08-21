import React from 'react';

const ProductDescription = ({ product }) => {

    const keyValuePairs = Object.entries(product?.data?.keyFeatures).map(([key, value]) => {
        return { key, value };
    })

    return (
        <div className='lg:p-4'>
            <p>{product?.data?.description}</p>
            <h1 className='text-xl font-bold text-gray-900 py-2'>Key Features</h1>
            <ul>
                {
                    keyValuePairs.map((keyFeature, index) => (
                        <li key={index} className='flex'>
                            <span className='mr-2'>{keyFeature.value?.key} : </span>
                            <span>{keyFeature.value?.value}</span>
                        </li>
                    ))

                }
            </ul>
        </div>
    );
};

export default ProductDescription;