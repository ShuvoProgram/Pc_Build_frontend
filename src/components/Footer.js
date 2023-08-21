import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Logo from '../assets/pcBuildLogo.jpg';
import { BiPhoneCall, BiSolidLocationPlus } from 'react-icons/bi';
import { MdOutlineMailOutline } from 'react-icons/md';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link
                        href="/"
                        className='font-bold text-2xl text-blue-500'
                    >
                        <Image src={Logo} width={150} height={150} alt='PC Builder' />
                    </Link>
                    <p className="mt-2 text-sm text-white">PC Builder is an intuitive and user-friendly web application that empowers users to create their dream custom PCs with ease. </p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/categories/processor" >
                                    -  CPU / Processor
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories/motherboard" >
                                    - Motherboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories/ram" >
                                    - RAM
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories/monitor" >
                                    - Monitor
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">POLICY</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/" >
                                    - Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" >
                                    - Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" >
                                    - Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" >
                                    - Terms & Conditions
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">ABOUT US</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/" >
                                    -  About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/" >
                                    - Online Delivery
                                </Link>
                            </li>
                            <li>
                                <Link href="/" >
                                    - Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/" >
                                    - EMITerms
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">CONTACT US</h2>
                        <nav className="list-none mb-10">
                            <li className='flex mb-2'>
                                <BiPhoneCall className='text-blue-500 text-xl mr-1' /> +880162206572
                            </li>
                            <li className='flex mb-2'>
                                <MdOutlineMailOutline className='text-blue-500 text-xl mr-1' /> khan.shuvo.2017@gmail.com
                            </li>
                            <li className='flex'>
                                <BiSolidLocationPlus className='text-blue-500 text-xl mr-1' /> Dhaka, Bangladesh
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900  border-t border-t-gray-500">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2023 PC Builder | All rights reserved</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-blue-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-blue-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-blue-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-blue-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer >
    )
}
