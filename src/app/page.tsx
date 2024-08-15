"use client";

import Image from "next/image";
import { FaArrowRight, FaCheck, FaPlay } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Page() {

  useEffect(() => {
    AOS.init({
      once: false, // Animations can be repeated
      offset: 100, // Start animations 100px from the top
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <main>
        <article className="relative bg-white">
          {/* Make your business powerful with Shade */}
          <section className="h-[95%] mb-28">
            <Image src="/1x/''Fichier 2.png" width={500} height={1000} alt="" className="absolute object-cover w-full z-30"/>

            <section className="relative pt-[5rem] z-40">
              <section className="md:flex md:flex-wrap md:gap-10 max-w-5xl mx-auto py-6 h-[28rem]  z-50">
                <section className="flex-1 px-4">
                  <h1 className="text-black font-bold text-2xl md:text-4xl text-center md:text-left mt-5 md:mt-10">Make your business powerful with Shade.</h1>
                  <p className="font-light text-gray-600 text-md text-center md:text-left w-full md:w-4/5 mt-5 leading-loose">With lost of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                  <div className="text-center md:text-left">
                    <button className="px-6 py-4 bg-[#473bf0] text-white text-sm font-semibold rounded-md mt-6 transition-all hover:scale-105">Get A Free Quote</button>
                  </div>
                  <p className="uppercase text-black font-bold text-xs my-6 text-center md:text-left md:pl-6">Watch how we can help</p>
                </section>

                <section className="relative md:flex-1 text-center">
                  <div className="flex justify-center">
                    <Image src="/1x/''Fichier 1.png" width={320} height={320} alt="" className="absolute z-30 md:block hidden" priority/>
                    <Image src="/1x/''Fichier 3.png" width={80} height={80} alt="" className="absolute translate-x-24 translate-y-10 z-20 md:block hidden"/>
                    <Image src="/1x/''Fichier 4.png" width={150} height={150} alt="" className="absolute -translate-x-20 translate-y-36 z-20 md:block hidden"/>
                    <Image src="/1x/''Fichier 5.png" width={120} height={120} alt="" className="absolute translate-x-28 translate-y-80 z-30 md:block hidden"/>
                  </div>
                </section>
              </section>
            </section>
            
            <div className="bg-[#161c2d] py-8 md:absolute md:z-50 w-full">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <FaPlay className="w-5 h-5 border rounded-full hover:scale-110 text-white transition-all p-1" />
                <p className="font-light text-xs text-center md:text-left text-gray-300">Interested how our software works for you? <span className="underline">Watch our 1 minute video</span></p>
              </div>
            </div>
          </section>

          {/* Experienced experts are giving advices. */}
          <section className="flex flex-col items-center relative text-center border-0 py-4 md:py-14">
              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:mt-10 px-4">
                <div className="block rounded-lg text-left p-4" data-aos="fade-up" data-aos-duration="500">
                  <h1 className="text-black font-bold text-2xl text-center md:text-left md:mt-10">Experienced experts are giving advices.</h1>
                  <p className="font-light text-gray-600 text-center md:text-left mt-5 leading-loose">We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>
                  <div className="text-center md:text-left">
                    <button className="px-6 py-2 bg-[#473bf0] text-white rounded-md mt-6 ">Learn how we work</button>
                  </div>
                </div>
                
                <div className="flex justify-center rounded-lg p-4" data-aos="fade-up" data-aos-duration="1000">
                  <Image src="/1x/''Fichier 11.png" width={600} height={300} alt="Image People" className="w-64 text-center" />
                </div>
                
                <div className="block rounded-lg p-4" data-aos="fade-up" data-aos-duration="1500">
                    <p className="font-bold text-3xl text-center md:text-left text-black">1M+</p>
                    <p className="sm:mt-2 block text-sm text-center md:text-left sm:text-sm leading-loose pt-2 text-gray-600 font-light">Customers visit Albino every month to get their service done.</p>
                    <p className="font-bold text-3xl text-center md:text-left mt-8 text-black">92%</p>
                    <p className="sm:mt-1 block text-sm text-center md:text-left sm:text-sm leading-loose pt-2 text-gray-600 font-light">Satisfaction rate comes from our awesome customers.</p>
                    <p className="font-bold text-3xl text-center md:text-left mt-8 text-black">4.9/5.0</p>
                    <p className="sm:mt-1 block text-sm text-center md:text-left sm:text-sm leading-loose pt-2 text-gray-600 font-light">Average customer ratings we have got all over internet.</p>
                </div>
                

              </div>
          </section>

          {/* Services we offer for you */}
          <section className="flex flex-col items-center relative text-center border-0 bg-[#f4f7fa] py-6 md:py-14">
              <div className="" data-aos="fade-up" data-aos-duration="100">
                <h2  className="box-border mt-12 font-bold text-2xl text-black md:text-4xl">Services we offer for you</h2>
                <p className="font-light text-gray-600 mt-4 leading-loose">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              </div>

              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-4">
                <div className="block rounded-lg p-4" data-aos="fade-up" data-aos-duration="500">
                    <p className="font-bold text-md text-left text-black">Isabella Chavez</p>
                    <span className="rounded-md p-1">
                        <Image src="/1x/''Fichier 14.png" width={300} height={300} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-sm leading-loose text-gray-600 font-light">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <div className="flex items-center pt-4">
                      <p className="text-[#473bf0] font-semibold text-sm">Learn more </p>
                      <FaArrowRight className="text-[#473bf0] hover:ml-3 transition-all ml-2" />
                    </div>
                </div>
                
                <div className="block rounded-lg p-4" data-aos="fade-up" data-aos-duration="1000">
                    <p className="font-bold text-md text-left text-black">Curtis Rhodes</p>
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 15.png" width={300} height={300} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-sm leading-loose text-gray-600 font-light">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <div className="flex items-center pt-4">
                      <p className="text-[#473bf0] font-semibold text-sm">Learn more </p>
                      <FaArrowRight className="text-[#473bf0] hover:ml-3 transition-all ml-2" />
                    </div>
                </div>
                
                <div className="block rounded-lg p-4" data-aos="fade-up" data-aos-duration="1500">
                    <p className="font-bold text-md text-left text-black">Isabella Chavez</p>
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 14.png" width={300} height={300} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-sm leading-loose text-gray-600 font-light">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <div className="flex items-center pt-4">
                      <p className="text-[#473bf0] font-semibold text-sm">Learn more </p>
                      <FaArrowRight className="text-[#473bf0] hover:ml-3 transition-all ml-2" />
                    </div>
                </div>
                

              </div>
          </section>

          {/* Reasons you should choose us to grow today. */}
          <section className="flex flex-wrap gap-10 bg-white max-w-3xl mx-auto pt-14 py-4 h-[28rem]">
            <section className="relative flex-1 hidden md:block">
              <Image src="/1x/''Fichier 18.png" width={300} height={100} alt="" className="absolute z-30"/>
              <Image src="/1x/''Fichier 17.png" width={260} height={100} alt="" className="absolute -translate-x-10 translate-y-20  z-20"/>
            </section>

            <section className="flex-1 px-4">
              <div className="" data-aos="fade-up" data-aos-duration="500">
                <h1 className="text-black font-bold text-2xl mt-10">Reasons you should choose us to grow today.</h1>
                <p className="font-light text-gray-600 mt-5 leading-loose">We share common trends and strategies for improving your rental income and making sure you stay in high demand.</p>
              </div>
              
              <div className="grid grid-cogrid grid-cols-1 sm:grid-cols-2 gap-4 my-4" data-aos="fade-up" data-aos-duration="700">
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

          {/* How do we help you to grow? */}
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
          
          {/* What people say about us */}
          <section className="flex flex-col items-center relative text-center border-0 border-gray-200 py-6 md:py-14">
              <div className="" data-aos="fade-up" data-aos-duration="500">
                <h2  className="box-border mt-12 font-bold text-2xl text-black md:text-4xl">What people say about us</h2>
                <p className="font-light text-gray-600 mt-4 leading-loose">With lost of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              </div>

              <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-4">
                  
                <div className="block rounded-lg border relative border-gray-200 p-4" data-aos="fade-up" data-aos-duration="500">
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 30.png" width={50} height={50} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-base text-black">“You made it so simple. My new site is so much faster and easier to work with than my old site.”</p>
                    <div className="flex flex-wrap justify-between mt-4">
                      <p className="font-bold text-xs text-black">Isabella Chavez</p>
                      <p className="font-light text-xs text-gray-600">Grahic Designer</p>
                    </div>
                </div>
                
                <div className="block rounded-lg border relative border-gray-200 p-4" data-aos="fade-up" data-aos-duration="1000">
                    <span className="rounded-lg p-1">
                        <Image src="/1x/''Fichier 27.png" width={50} height={50} alt="Image People" />
                    </span>

                    <p className="sm:mt-1 block text-sm text-left sm:text-base text-black">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                    <div className="flex flex-wrap justify-between mt-4">
                      <p className="font-bold text-xs text-black">Curtis Rhodes</p>
                      <p className="font-light text-xs text-gray-600">Digital Marketer</p>
                    </div>
                </div>
                
                <div className="block rounded-lg border relative border-gray-200 p-4" data-aos="fade-up" data-aos-duration="1500">
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

