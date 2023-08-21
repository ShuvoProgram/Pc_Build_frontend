/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <section>
            <div class="text-white py-10">
                <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8 max-w-7xl">
                        <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">PC Builder</h1>
                        <h2 class="block font-extrabold text-4xl w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">We complete build your dream
                        </h2>
                        <a href="#"
                            class="bg-transparent hover:bg-blue-300 text-blue-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-blue-300 hover:border-transparent my-4">
                            Explore Now</a>
                    </div>
                    <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                        <div class="h-48 flex flex-wrap content-center justify-center">

                            <div>
                                <Image alt='pc-hero' class="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://i.ibb.co/3spWD3S/c07064738.png" width={500} height={500} /></div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;