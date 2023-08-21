import Link from 'next/link';
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BsCpuFill, BsFillMotherboardFill } from "react-icons/bs";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import React from 'react';
import { message } from "antd";
import { useSelector } from 'react-redux';
import HomePageLayout from '@/layout/HomePageLayout';

const PCBuilder = () => {
    const {
        processor,
        motherboard,
        ram,
        psu,
        storage,
        monitor, } = useSelector((state) => state.pcBuild);

    const isDisabled = () => {
        return monitor.title && storage.title && ram.title && processor.title && psu.title && motherboard.title
    }
    const productPrice = [
        parseFloat(storage.price),
        parseFloat(processor.price),
        parseFloat(monitor.price),
        parseFloat(motherboard.price),
        parseFloat(ram.price),
        parseFloat(psu.price)
    ];

    const totalProductPrice = productPrice.reduce((total, price) => {
        if (typeof price === 'number' && !isNaN(price)) {
            return total + price;
        } else {
            return total;
        }
    }, 0);

    console.log(totalProductPrice); // This should log the total product price as a float number

    return (
        <HomePageLayout>
            <div className="flex justify-center mx-auto w-full max-w-3xl bg-white border-gray-100 mt-5 border p-2 shadow-sm rounded my-8">
                <div className="w-full">
                    <div>
                        <h1 className="font-semibold text-lg text-center my-4 border-b-2 border-primary pb-3">
                            PC Builder - Build Your Own Computer
                        </h1>
                    </div>
                    <div className="grid lg:grid-cols-6 items-center gap-5 px-8 border-b lg:py-0 py-4 border-gray-300 mb-4">
                        <div className="col-span-1 text-green-600 shadow-gray-400 text-center mx-auto mb-3 p-4 rounded-md bg-green-100">
                            <BsCpuFill size={45} />
                        </div>
                        <div className="w-full col-span-4">
                            <p className="mb-1 text-sm text-black">Processor</p>
                            {processor && processor.title ? (
                                <div className="flex justify-between items-center gap-2 p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                                            <Image src={processor.image} height={100} width={100} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-2">
                                            <div>
                                                <p className="font-medium">{processor.title}</p>
                                                <ReactStars
                                                    count={5}
                                                    size={20}
                                                    value={processor.rating}
                                                    edit={false}
                                                    activeColor="#e6bd00"
                                                />
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                ${processor.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (<div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>)}
                        </div>
                        <Link href="/choose/processor"
                            className="bg-green-600 font-medium text-xs text-white text-center py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-6 items-center lg:py-0 py-4 gap-5 px-8 border-b  border-gray-300 mb-4">
                        <div className="col-span-1 text-green-600 shadow-gray-400 text-center mx-auto mb-3 p-4 rounded-md bg-green-100">
                            <BsFillMotherboardFill size={45} />
                        </div>
                        <div className="w-full col-span-4">
                            <p className="mb-1 text-sm text-black">Motherboard</p>
                            {motherboard && motherboard.title ? (
                                <div className="flex justify-between items-center gap-2 p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200 lg:pr-3">
                                            <Image src={motherboard?.image} height={100} width={100} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">{motherboard.title}</p>
                                                <ReactStars
                                                    count={5}
                                                    size={20}
                                                    value={motherboard.rating}
                                                    edit={false}
                                                    activeColor="#e6bd00"
                                                />
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                $ {motherboard.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (<div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>)}
                        </div>
                        <Link href="/choose/motherboard"
                            className="bg-green-600 font-medium text-xs text-white text-center py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-6 items-center lg:py-0 py-4 gap-5 px-8 border-b  border-gray-300 mb-4">
                        <div className="col-span-1 text-green-600 shadow-gray-400 text-center mx-auto mb-3 p-4 rounded-md bg-green-100">
                            <CgSmartphoneRam size={45} />
                        </div>
                        <div className="w-full col-span-4">
                            <p className="mb-1 text-sm text-black">RAM</p>
                            {ram && ram.title ? (
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] lg:pr-3 items-center rounded-md transition-all duration-200">
                                            <Image src={ram.image} height={100} width={100} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">{ram.title}</p>
                                                <ReactStars
                                                    count={5}
                                                    size={20}
                                                    value={ram.rating}
                                                    edit={false}
                                                    activeColor="#e6bd00"
                                                />
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                ${ram.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (<div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>)}
                        </div>
                        <Link href="/choose/ram"
                            className="bg-green-600 font-medium text-xs text-white text-center py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-6 items-center lg:py-0 py-4 gap-5 px-8 border-b  border-gray-300 mb-4">
                        <div className="col-span-1 text-green-600 shadow-gray-400 text-center mx-auto mb-3 p-4 rounded-md bg-green-100">
                            <ImPowerCord size={45} />
                        </div>
                        <div className="w-full col-span-4">
                            <p className="mb-1 text-sm text-black">Power Suply Unit</p>
                            {psu && psu.title ? (
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] lg:pr-3 items-center rounded-md transition-all duration-200">
                                            <Image src={psu.image} height={100} width={100} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">{psu.title}</p>
                                                <ReactStars
                                                    count={5}
                                                    size={20}
                                                    value={psu.rating}
                                                    edit={false}
                                                    activeColor="#e6bd00"
                                                />
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                ${psu.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (<div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>)}
                        </div>
                        <Link href="/choose/psu"
                            className="bg-green-600 font-medium text-xs text-white text-center py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-6 items-center lg:py-0 py-4 gap-5 px-8 border-b  border-gray-300 mb-4">
                        <div className="col-span-1 text-green-600 shadow-gray-400 text-center mx-auto mb-3 p-4 rounded-md bg-green-100">
                            <MdStorage size={45} />
                        </div>
                        <div className="w-full col-span-4">
                            <p className="mb-1 text-sm text-black">Storage Device</p>
                            {storage && storage.title ? (
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] lg:pr-3 items-center rounded-md transition-all duration-200">
                                            <Image src={storage.image} height={100} width={100} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">{storage.title}</p>
                                                <ReactStars
                                                    count={5}
                                                    size={20}
                                                    value={storage.rating}
                                                    edit={false}
                                                    activeColor="#e6bd00"
                                                />
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                ${storage.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (<div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>)}
                        </div>
                        <Link href="/choose/storage"
                            className="bg-green-600 font-medium text-xs text-white text-center py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-6 items-center gap-5 px-8 border-b  border-gray-300 mb-4 lg:py-0 py-4">
                        <div className="col-span-1 text-green-600 shadow-gray-400 text-center mx-auto mb-3 p-4 rounded-md bg-green-100">
                            <FiMonitor size={45} />
                        </div>
                        <div className="w-full col-span-4">
                            <p className="mb-1 text-sm text-black">Monitor</p>
                            {monitor && monitor.title ? (
                                <div className="flex justify-between items-center gap-2  p-2">
                                    <div className="flex items-center w-full">
                                        <div className="flex flex-col w-full max-w-[90px] lg:pr-3 items-center rounded-md transition-all duration-200">
                                            <Image src={monitor.image} height={100} width={100} alt="" />
                                        </div>
                                        <div className="flex justify-between w-full gap-3">
                                            <div>
                                                <p className="font-medium">{monitor.title}</p>

                                                <ReactStars
                                                    count={5}
                                                    size={20}
                                                    value={monitor.rating}
                                                    edit={false}
                                                    activeColor="#e6bd00"
                                                />
                                            </div>
                                            <p className="text-red-500 font-medium whitespace-nowrap">
                                                ${monitor.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (<div className="h-6 bg-gray-200 rounded-md dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>)}
                        </div>
                        <Link href="/choose/monitor"
                            className="bg-green-600 font-medium text-xs text-white text-center py-2 cursor-pointer px-3 rounded"
                        >
                            Choose
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-3 items-center gap-5 px-8 border-b  border-gray-300 mb-4 lg:py-0 py-4">
                        <div className="col-span-1 shadow-gray-400 text-center mx-auto mb-3 p-4 rounded-md">

                        </div>
                        <div className="col-span-1 shadow-gray-400 text-center mx-auto mb-3 p-4 rounded-md">
                            <h1 className='text-xl text-gray-900 font-bold'>Total</h1>
                        </div>
                        <div className="col-span-1 shadow-gray-400 text-center mx-auto mb-3 p-4 rounded-md">
                            <h1 className='text-xl text-gray-900'>${totalProductPrice}</h1>
                        </div>
                    </div>
                    <div className="text-right mx-8">
                        <button
                            disabled={!isDisabled()}
                            onClick={() => message.success("Build completed successfully")}
                            className={`${isDisabled() ? "bg-green-600" : "bg-gray-900"} text-white px-4 py-1.5 my-5 font-medium rounded-sm`}
                        >
                            Complete Build
                        </button>
                    </div>
                </div>
            </div>
        </HomePageLayout>
    );
};

export default PCBuilder;