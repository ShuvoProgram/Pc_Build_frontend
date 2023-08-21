import AddProduct from '@/components/AddProduct';
import HomePageLayout from '@/layout/HomePageLayout';
import React from 'react';

const createProduct = () => {
    return (
        <HomePageLayout>
            <AddProduct />
        </HomePageLayout>
    );
};

export default createProduct;

createProduct.getLayout = function getLayout(page) {
    return page;
};