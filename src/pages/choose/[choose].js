import ChooseProduct from '@/components/ChooseProduct';
import HomePageLayout from '@/layout/HomePageLayout';
import { Empty } from 'antd';

import React from 'react';


const Choose = ({ products }) => {

    return (
        <HomePageLayout>
            <section className="text-gray-700 body-font">
                <div className="container px-10 py-7 mx-auto">
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8">
                        {
                            products?.data?.length ? products?.data?.map((product) => (
                                <ChooseProduct
                                    key={product._id}
                                    product={product}
                                />
                            )) : (
                                <Empty />
                            )
                        }
                    </div>
                </div>
            </section>
        </HomePageLayout>
    );
};

export default Choose;

Choose.getLayout = function getLayout(page) {
    return page;
}

export const getServerSideProps = async ({ params }) => {
    const category = params.choose;
    const res = await fetch(`${process.env.BASE_URL}/products/cat?category=${category}`);
    const products = await res.json();
    return {
        props: {
            products
        }
    }
}