"use client";

import Head from "next/head";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeModeScript } from "flowbite-react";
import { Navbar } from "./components/Navbar";
import Image from "next/image";
import { FaArrowRight, FaCheck } from "react-icons/fa";


export default function Page() {
  return (
    <>
      <main>
        <article className="relative bg-white">

          <section className="flex flex-col items-center relative text-center border-0 bg-[#f4f7fa] py-6 md:py-28">

              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-4">
                <div className="block rounded-lg text-left p-4">
                  <h1 className="text-black font-bold text-2xl mt-10">Reasons you should choose us to grow today.</h1>
                  <p className="font-light text-gray-600 mt-5 leading-loose">We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>
                </div>
                
                <div className="block rounded-lg p-4">
                    <p className="font-bold text-md text-left text-black">Curtis Rhodes</p>
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 15.png" width={300} height={300} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-sm leading-loose text-gray-600 font-light">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                    <div className="flex items-center hover:ml-2 transition-all pt-2">
                      <p className="text-[#473bf0] font-semibold text-sm">Learn more </p>
                      <FaArrowRight className="text-[#473bf0] ml-3" />
                    </div>
                </div>
                
                <div className="block rounded-lg p-4">
                    <p className="font-bold text-md text-left text-black">Isabella Chavez</p>
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 14.png" width={300} height={300} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-sm leading-loose text-gray-600 font-light">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                    <div className="flex items-center hover:ml-2 transition-all pt-2">
                      <p className="text-[#473bf0] font-semibold text-sm">Learn more </p>
                      <FaArrowRight className="text-[#473bf0] ml-3" />
                    </div>
                </div>
                

              </div>
          </section>

          <section className="flex flex-col items-center relative text-center border-0 bg-[#f4f7fa] py-6 md:py-24">
              <h2  className="box-border mt-12 font-bold text-2xl text-black md:text-4xl">Services we offer for you</h2>
              <p className="text-gray-700 w-1/2 mt-4">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>

              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-4">
                  
                <div className="block rounded-lg p-4">
                    <p className="font-bold text-md text-left text-black">Isabella Chavez</p>
                    <span className="rounded-md p-1">
                        <Image src="/1x/''Fichier 14.png" width={300} height={300} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-sm leading-loose text-gray-600 font-light">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <div className="flex items-center hover:ml-2 transition-all pt-2">
                      <p className="text-[#473bf0] font-semibold text-sm">Learn more </p>
                      <FaArrowRight className="text-[#473bf0] ml-3" />
                    </div>
                </div>
                
                <div className="block rounded-lg p-4">
                    <p className="font-bold text-md text-left text-black">Curtis Rhodes</p>
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 15.png" width={300} height={300} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-sm leading-loose text-gray-600 font-light">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <div className="flex items-center hover:ml-2 transition-all pt-2">
                      <p className="text-[#473bf0] font-semibold text-sm">Learn more </p>
                      <FaArrowRight className="text-[#473bf0] ml-3" />
                    </div>
                </div>
                
                <div className="block rounded-lg p-4">
                    <p className="font-bold text-md text-left text-black">Isabella Chavez</p>
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 14.png" width={300} height={300} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-sm leading-loose text-gray-600 font-light">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <div className="flex items-center hover:ml-2 transition-all pt-2">
                      <p className="text-[#473bf0] font-semibold text-sm">Learn more </p>
                      <FaArrowRight className="text-[#473bf0] ml-3" />
                    </div>
                </div>
                

              </div>
          </section>

          {/* section */}
          <section className="flex flex-wrap gap-10 bg-white max-w-3xl mx-auto pt-14 py-4 h-[28rem]">
            <section className="relative flex-1 hidden md:block">
              <Image src="/1x/''Fichier 18.png" width={300} height={100} alt="" className="absolute z-30"/>
              <Image src="/1x/''Fichier 17.png" width={260} height={100} alt="" className="absolute -translate-x-10 translate-y-20  z-20"/>
            </section>

            <section className="flex-1 px-4">
              <h1 className="text-black font-bold text-2xl mt-10">Reasons you should choose us to grow today.</h1>
              <p className="font-light text-gray-600 mt-5 leading-loose">We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>
              
              <div className="grid grid-cogrid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="flex items-center gap-3">
                  <FaCheck className="text-[#473bf0]"/>
                  <h2 className="text-black font-bold text-sm">Fully Responsive</h2>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-[#473bf0]"/>
                  <h2 className="text-black font-bold text-sm">Beautiful Layouts</h2>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-[#473bf0]"/>
                  <h2 className="text-black font-bold text-sm">Easy to Edit</h2>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck className="text-[#473bf0]"/>
                  <h2 className="text-black font-bold text-sm">Google Font Included</h2>
                </div>
              </div>
            </section>
          </section>

          <section className="relative z-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="flex justify-center">
                <Image src="/1x/''Fichier 23.png" width={80} height={80} alt="Image background" className="bg-cover" />
              </div>
                <div className="flex justify-center">
                  <div className="text-center">
                    <h2 className="text-white text-2xl font-medium mt-4">How do we help you to grow?</h2>
                    <p className=" text-gray-400 mt-4">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                  </div>
                </div>
            </div>
            <Image src="/1x/''Fichier 38.png" width={1000} height={1000} alt="Banner Image" className="w-full z-20 h-96 object-cover"/>
            <div className='bg-[#161c2d] absolute left-0 right-0 top-0 bottom-0 opacity-55 z-0'></div>
          </section>
          
          <section className="flex flex-col items-center relative text-center border-0 border-gray-200 py-6 md:py-28">
              <h2  className="box-border mt-12 font-bold text-2xl text-black md:text-4xl">What people say about us</h2>
              <p className="text-gray-700 w-1/2 mt-4">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>

              <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-4">
                  
                <div className="block rounded-lg border relative border-gray-200 p-4">
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 30.png" width={50} height={50} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-base text-black">“You made it so simple. My new site is so much faster and easier to work with than my old site.”</p>
                    <div className="flex flex-wrap justify-between mt-4">
                      <p className="font-bold text-xs text-black">Isabella Chavez</p>
                      <p className="font-light text-xs text-gray-600">Grahic Designer</p>
                    </div>
                </div>
                
                <div className="block rounded-lg border relative border-gray-200 p-4">
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 27.png" width={50} height={50} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-base text-black">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                    <div className="flex flex-wrap justify-between mt-4">
                      <p className="font-bold text-xs text-black">Curtis Rhodes</p>
                      <p className="font-light text-xs text-gray-600">Digital Marketer</p>
                    </div>
                </div>
                
                <div className="block rounded-lg border relative border-gray-200 p-4">
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 25.png" width={50} height={50} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-base text-black">“Must have book for all, who want to be Product Designer or Interaction Designer.”</p>
                    <div className="flex flex-wrap justify-between mt-4">
                      <p className="font-bold text-xs text-black">Lucas Mann</p>
                      <p className="font-light text-xs text-gray-600">Co Founder</p>
                    </div>
                </div>
                

              </div>
          </section>
        </article>
      </main>
    </>
  );
}

