import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";


export default function main() {

    return (
        <>

        {/* section */}
        <article className="relative bg-white pb-40">
            <section className="flex flex-col items-center relative  text-center border-0 border-gray-200 my-40">
                <h2  className="box-border m-0 font-extrabold text-2xl md:text-4xl">How does it work ?</h2>
                <p className="text-black">With lost of unique blocks, you can easily build a page easily without any coding.</p>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="max-w-4xl mx-auto text-center absolute z-10 w-full hidden md:block">
                        <div className="border-4 w-full border-gray-300 border-dashed top-1/2 left-1/2"></div>
                    </div>
                    
                    <div className="flex flex-col items-center z-20">
                        <div className="bg-red-500 text-white rounded-full w-16 h-16 text-2xl font-bold flex items-center justify-center mb-2">1</div>
                        <h3 className="font-semibold">Install App</h3>
                        <p className="text-muted-foreground">With lots of unique blocks, you can easily build a page easily without any coding.</p>
                    </div>

                    <div className="flex flex-col items-center z-20">
                        <div className="bg-green-500 text-white rounded-full w-16 h-16 text-2xl font-bold flex items-center justify-center mb-2">2</div>
                        <h3 className="font-semibold">Add Team Members</h3>
                        <p className="text-muted-foreground">With lots of unique blocks, you can easily build a page easily without any coding.</p>
                    </div>

                    <div className="flex flex-col items-center z-20">
                        <div className="bg-blue-500 text-white rounded-full w-16 h-16 text-2xl font-bold flex items-center justify-center mb-2">3</div>
                        <h3 className="font-semibold">Start Rolling!</h3>
                        <p className="text-muted-foreground">With lots of unique blocks, you can easily build a page easily without any coding.</p>
                    </div>
                </div>
            </section>
        </article>

        {/* section */}
        <article className="relative bg-red-700">
            <Image src="/1x/''Fichier 37.png" width={2000} height={2000} alt="Image background" className=" w-full object-cover z-10" />
           
            <section className="relative mx-auto px-4 md:px-8 text-center flex justify-center -translate-y-1/2">
                <div className="z-40">
                    <Image src="/1x/''Fichier 33.png" width={80} height={80} alt="Image background" className="bg-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="z-30">
                    <Image src="/1x/Fichier 81.png" width={900} height={50} alt="Image background" className="bg-cover rounded-3xl" />
                </div>
                <div className="z-20">
                    <Image src="/1x/''Fichier 59.png" width={120} height={120} alt="Image background" className="bg-cover absolute translate-x-48 translate-y-7 bottom-0 left-0" />
                </div>
            </section>
            
            <section className="flex flex-col items-center  text-center border-0 mb-4 border-gray-200">
                <h2  className="w-1/2 font-semibold text-xl md:text-4xl text-white">We made this app to solve your problems.</h2>
            </section>

            <section className="mx-auto max-w-4xl w-fit px-4 md:px-8 text-[#161c2d] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-16 mb-5">
                <div className="md:flex max-w-lg">
                    <div className="w-20 h-20 mx-auto mt-1">
                        <Image src="/1x/''Fichier 38.png" width={70} height={80} alt="Image background" className=" object-cover z-10" />
                    </div>
                        
                    <div className="flex-grow text-center md:text-left ml-3">
                        <p className="font-bold text-white">Unlimited Projects</p>
                        <p className="mt-2 mb-3 text-white text-sm font-extralight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>

                <div className="md:flex max-w-lg">
                    <div className="w-20 h-20 mx-auto mt-1">
                        <Image src="/1x/''Fichier 39.png" width={80} height={80} alt="Image background" className=" object-cover z-10" />
                    </div>
                        
                    <div className="flex-grow text-center md:text-left ml-3">
                        <p className="font-bold text-white">Team Management</p>
                        <p className="mt-2 mb-3 text-white text-sm font-extralight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>

                <div className="md:flex max-w-lg">
                    <div className="w-20 h-20 mx-auto mt-1">
                        <Image src="/1x/''Fichier 40.png" width={80} height={80} alt="Image background" className=" object-cover z-10" />
                    </div>
                        
                    <div className="flex-grow text-center md:text-left ml-3">
                        <p className="font-bold text-white">File Sharing</p>
                        <p className="mt-2 mb-3 text-white text-sm font-extralight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>

                <div className="md:flex max-w-lg">
                    <div className="w-20 h-20 mx-auto mt-1">
                        <Image src="/1x/''Fichier 41.png" width={80} height={80} alt="Image background" className=" object-cover z-10" />
                    </div>
                        
                    <div className="flex-grow text-center md:text-left ml-3">
                        <p className="font-bold text-white">Video Meetings</p>
                        <p className="mt-2 mb-3 text-white text-sm font-extralight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>

                <div className="md:flex max-w-lg">
                    <div className="w-20 h-20 mx-auto mt-1">
                        <Image src="/1x/''Fichier 42.png" width={80} height={80} alt="Image background" className=" object-cover z-10" />
                    </div>
                        
                    <div className="flex-grow text-center md:text-left ml-3">
                        <p className="font-bold text-white">Time Tracking</p>
                        <p className="mt-2 mb-3 text-white text-sm font-extralight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>

                <div className="md:flex max-w-lg">
                    <div className="w-20 h-20 mx-auto mt-1">
                        <Image src="/1x/''Fichier 44.png" width={80} height={80} alt="Image background" className=" object-cover z-10" />
                    </div>
                        
                    <div className="flex-grow text-center md:text-left ml-3">
                        <p className="font-bold text-white">Payment System</p>
                        <p className="mt-2 mb-3 text-white text-sm font-extralight">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-md mx-auto text-center w-full relative flex justify-center my-28">
                <div className="">
                    <Image src="/1x/''Fichier 73.png" width={200} height={100} alt="Image background" className="w-2/3" />
                </div>
            </section>
            
            <section className="max-w-xl mx-auto text-[#161c2d]">
                <section className="max-w-md mx-auto text-center w-full relative flex justify-center my-10">
                    <p className="font-bold text-white text-xl">1,749 remote teams have shared their experience with our app!</p>
                    <div className="absolute inset-6 -space-y-10">
                        <Image src="/1x/''Fichier 46.png" width={100} height={100} alt="Image background" className="ml-2 w-2/4" />
                    </div>
                </section>


                {/* Card 1 */}
                <section className="flex flex-col p-5 space-y-6 my-4 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-inner lg:h-20 lg:w-20">
                        <Image src="/1x/''Fichier 54.png" width={100} height={100} alt="Image background" className=" object-cover z-10" />
                    </div>
                    
                    <div className="flex-1">
                        <p className="mb-6 text-base">“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”</p>
                        <p className="mt-2 font-light text-[#161c2d]">Isacc Olson</p>
                    </div>
                </section>
                
                {/* Card 2 */}
                <section className="flex flex-col p-5 space-y-6 my-4 opacity-50 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-inner lg:h-20 lg:w-20">
                        <Image src="/1x/''Fichier 55.png" width={100} height={100} alt="Image background" className=" object-cover z-10" />
                    </div>
                    
                    <div className="flex-1">
                        <h5 className="mb-6 text-base">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users who want success.”</h5>
                        <p className="mt-2 font-light text-[#161c2d]">Barry Young</p>
                    </div>
                </section>
                
                {/* Card 3 */}
                <section className="flex flex-col p-5 space-y-6 my-4 opacity-30 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-inner lg:h-20 lg:w-20">
                        <Image src="/1x/''Fichier 56.png" width={100} height={100} alt="Image background" className=" object-cover z-10" />
                    </div>
                    
                    <div className="flex-1">
                        <h5 className="mb-6 text-base">“Must have book for all, who want to be Product Designer or Interaction Designer.”</h5>
                        <p className="mt-2 font-light text-[#161c2d]">Esther Allison</p>
                    </div>
                </section>

                <section className="flex justify-center items-center gap-2 text-center py-10  ">
                    <p className="text-[#68d585] text-semibold">Read more reviews</p>
                    <div className="flex items-center text-[#68d585] cursor-pointer hover:scale-110 transition-all">
                        <FaArrowRight className="w-3 h-3"/>
                    </div>
                </section>
            </section>

            {/* <Image src="/1x/''Fichier 36.png" width={800} height={1200} alt="Image background" className="w-full -z-10" /> */}
        </article>

        {/* section */}
         <article className="bg-[#f4f7fa]">
            <section className="py-6 leading-7 text-[#161c2d] sm:py-12 md:py-16">
                <div className="box-border px-4 mx-auto sm:px-6 md:px-6 lg:px-0 max-w-7xl">
                    <div className="flex flex-col items-center leading-7 text-center border-0 border-gray-200 pt-5">
                        <h2 className="box-border m-0 font-extrabold text-2xl md:text-4xl">Pricing made easy</h2>
                        <p className="mt-5 w-1/3 text-md font-light ">With lots of unique blocks, you can easily build a page easily without any coding.</p>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 gap-4 mt-8 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 lg:grid-cols-2">
                    
                    {/* Price 1  */}
                    <div className="w-3/4 flex flex-col items-center max-w-md p-4 mx-auto my-0 border rounded-lg">
                        <h3 className="text-[#f74d4d] font-bold uppercase sm:text-sm md:text-sm">starter</h3>
                        <div className="flex items-center mt-8 mb-2 border-gray-200">
                            <p className="">
                                <span className="text-2xl font-bold">$</span>
                                <span className="text-6xl font-bold">19</span> 
                                <span className="">/ mo</span>
                            </p>
                        </div>
                        
                        <ul className="w-full mt-4 border-gray-200">
                            <li className="border-t py-4 text-center font-light">Upto 100 Team Members</li>
                            <li className="border-t block py-4 text-center font-light">100 GB Cloud Storage</li>
                            <li className="border-t block py-4 text-center font-light">Unlimited Meetings</li>
                            <li className="border-t block py-4 text-center font-light">Premium Support</li>
                        </ul>
                        
                        <a href="#" className="inline-flex justify-center w-full px-4 py-3 mt-2 font-sans text-sm text-center text-white bg-[#161c2d] rounded-md cursor-pointer hover:bg-[#f74d4d] font-semibold transition-all sm:text-base md:text-lg">
                            Get Started Now
                        </a>
                    </div>

                    {/* Price 2  */}
                    <div className="w-3/4 flex flex-col bg-white items-center max-w-md p-4 mx-auto my-0 border rounded-lg">
                        <h3 className="text-[#f74d4d] font-bold uppercase sm:text-sm md:text-sm">unlimited</h3>
                        <div className="flex items-center mt-8 mb-2 border-gray-200">
                            <p className="">
                                <span className="text-2xl font-bold">$</span>
                                <span className="text-6xl font-bold">99</span> 
                                <span className="">/ mo</span>
                            </p>
                        </div>
                        
                        <ul className="w-full mt-4 border-gray-200">
                            <li className="border-t py-4 text-center font-light">Upto 100 Team Members</li>
                            <li className="border-t block py-4 text-center font-light">100 GB Cloud Storage</li>
                            <li className="border-t block py-4 text-center font-light">Unlimited Meetings</li>
                            <li className="border-t block py-4 text-center font-light">Premium Support</li>
                        </ul>
                        
                        <a href="#" className="inline-flex justify-center w-full px-4 py-3 mt-2 font-sans text-sm text-center text-white bg-[#161c2d] rounded-md cursor-pointer hover:bg-[#f74d4d] font-semibold transition-all sm:text-base md:text-lg">
                            Get Started Now
                        </a>
                    </div>
                </div>
            </section>
            
            <Image src="/1x/''Fichier 63.png" width={2000} height={2000} alt="Image background" className=" w-full object-cover mt-10 z-10" />
         </article>
        </>
    )
}