import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"


export default function Footer() {

    
    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: '/',
                    name: 'About us'
                },
                {
                    href: '/',
                    name: 'Contact us'
                },
                {
                    href: '/',
                    name: 'Careers'
                },
                {
                    href: '/',
                    name: 'Press'
                },
            ],
        },
        {
            label: "Product",
            items: [
                {
                    href: '/',
                    name: 'Features'
                },
                {
                    href: '/',
                    name: 'Pricing'
                },
                {
                    href: '/',
                    name: 'News'
                },
                {
                    href: '/',
                    name: 'Help desk'
                },
                {
                    href: '/',
                    name: 'Support'
                },
            ],
        },
        {
            label: "Services",
            items: [
                {
                    href: '/',
                    name: 'Digital Marketing'
                },
                {
                    href: '/',
                    name: 'Content Writing'
                },
                {
                    href: '/',
                    name: 'SEO for Business'
                },
                {
                    href: '/',
                    name: 'UI Design'
                },
            ],
        },
        {
            label: "Legal",
            items: [
                {
                    href: '/',
                    name: 'Privacy Policy'
                },
                {
                    href: '/',
                    name: 'Terms & Conditions'
                },
                {
                    href: '/',
                    name: 'Return Policy'
                },
            ]
        }
    ]

    return (
        <>
         <footer className="">
            <section className="mt-8 py-2 md:py-8 items-center justify-between bg-[#68d585] sm:flex">
                <section className="flex flex-wrap justify-center mx-auto items-center gap-5 text-[#161c2d] sm:mt-0 ">
                    <h2 className="text-2xl font-semibold text-white">Ready to get started?</h2>
                    <button className="border hover:scale-105 transition-all bg-white font-semibold rounded-md text-md px-6 py-2">Get A Free Quote</button>
                </section>
            </section>

            <section className="bg-[#161c2d]">
                <section className="max-w-4xl mx-auto justify-between md:flex py-12 px-4 md:px-0">
                    <div className="flex-1">
                        <section>
                            <h1 className="text-white text-xl font-bold mb-2 md:mb-6">BrainWave.io</h1>
                            <p className="font-normal w-1/2 text-sm text-gray-500">With lot of unique blocks, you can easily build a page without coding. <br/> Build your next landing page</p>
                        </section>
                        <section className="flex items-center gap-x-6 text-white mt-2 sm:mt-8">
                            <Link href="https://www.tiktok.com/@gunivers1" target="_blank">
                                <div className="flex items-center hover:text-[#68d585] cursor-pointer transition-all hover:scale-110">
                                    <FaTwitter className="w-5 h-5"/>
                                </div>
                            </Link>
                            <Link href="https://web.facebook.com/GGUNIVERS" target="_blank">
                                <div className="flex items-center hover:text-[#68d585] cursor-pointer transition-all hover:scale-110">
                                    <FaFacebook className="w-5 h-5"/>
                                </div>
                            </Link>
                            <Link href="https://www.instagram.com/g_gunivers" target="_blank">
                                <div className="flex items-center hover:text-[#68d585] cursor-pointer transition-all hover:scale-110">
                                    <FaInstagram className="w-5 h-5"/>
                                </div>
                            </Link>
                            <Link href="https://www.linkedin.com/company/gunivers" target="_blank">
                                <div className="flex items-center hover:text-[#68d585] cursor-pointer transition-all hover:scale-110">
                                    <FaLinkedin className="w-5 h-5"/>
                                </div>
                            </Link>
                        </section>
                    </div>

                    <div className="flex-1 gap-12 justify-between md:flex ">
                        {footerNavs.map((item, idx) => (
                            <ul className="mb-8" key={idx}>
                                <h1 className="text-gray-500 text-sm font-normal mb-2 md:mb-6">{ item.label }</h1>
                
                                {item.items.map(((el, idx) => (
                                    <li key={idx} className="mb-4">
                                        <a href={el.href} className="transition-all text-gray-300 text-[0.9rem] hover:text-[#68d585]">
                                            { el.name }
                                        </a>
                                    </li>
                                )))}
                            </ul>
                        ))}
                    </div>
                </section>
            </section>

        </footer>
        </>
    )
}