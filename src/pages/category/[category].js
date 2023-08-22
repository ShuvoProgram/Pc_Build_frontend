import ProductCard from '@/components/ProductCard';
import ProductLayout from '@/layout/ProductLayout';
import { Empty } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

const CategoryName = ({ products }) => {
    const router = useRouter();
    const { category } = router.query;
    return (
        <ProductLayout>
            <h1 className="text-5xl font-bold text-center my-10">
                {category} Category
            </h1>
            <div className="container px-10 py-7 mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8">
                    {products?.data?.length ? products.data.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    )) : (
                        <Empty />
                    )}
                </div>
            </div>
        </ProductLayout>
    );
};

export default CategoryName;

CategoryName.getLayout = function getLayout(page) {
    return (
        <ProductLayout>
            {page}
        </ProductLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.BASE_URL}/products`);
    const products = await res.json();
    const paths = products?.data?.map((product) => ({
        params: { category: product?.category.toString() }
    }));
    return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
    const categories = params.category;
    const res = await fetch(`${process.env.BASE_URL}/products/cat?category=${categories}`);
    const data = await res.json();
    return {
        props: {
            products: data
        }
    }
}