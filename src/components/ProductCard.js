import React from 'react'
import { AiOutlineEye, AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";

export default function ProductCard({ product }) {
  console.log(product)
  const { _id, title, category, price, image, status } = product || {};
  return (
    <>
      <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
          <Image src={image} alt={title} className="w-full h-32 object-cover" width={100} height={100} />
          <h2 className="text-lg font-semibold mt-2">{`${title.slice(0, 40)}...`}</h2>
          <p className="text-gray-600">{category}</p>
          {/* <p className="text-sm mt-2">{description}</p> */}
          <p className="text-green-600 font-semibold mt-2">${price}</p>
          <p className="text-gray-500">{status}</p>
        </div>
        <div className="p-2">
          <div className="flex flex-col top-4 right-4 space-y-2 absolute opacity-0 group-hover:opacity-100 transition duration-500">
            <Link href={`/product/${_id}`} className=' bg-white border-2 border-gray-200'>
              <AiOutlineEye className='text-xl text-blue-600 m-2' />
            </Link>
            <button className=' bg-white border-2 border-gray-200'>
              <AiOutlinePlusCircle className='text-xl text-blue-600 m-2' />
            </button>
            <button className='bg-white border-2 border-gray-200'>
              <FiHeart className='text-xl text-blue-600 m-2'></FiHeart>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
