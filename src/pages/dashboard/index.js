import Link from 'next/link';
import React from 'react';

const DashBoard = () => {
    return (
        <div>
            <h1 className='text-3xl text-gray-700'>Dashboard</h1>
            <Link href={`/dashboard/createProduct`}>Create Product</Link>
        </div>
    );
};

export default DashBoard;