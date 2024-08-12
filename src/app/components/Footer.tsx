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
         <footer className="px-4 py-5 max-w-6xl mx-auto md:px-8">
            <div className="md:gap-48 justify-between md:flex">
                <div className="flex-1 gap-10 justify-between md:flex ">
                    {footerNavs.map((item, idx) => (
                        <ul className="mb-8" key={idx}>
                            <h1 className="text-gray-500 text-sm font-normal mb-2 md:mb-6">{ item.label }</h1>
                                
                            {item.items.map(((el, idx) => (
                                <li key={idx} className="mb-4">
                                    <a href={el.href} className="transition-all text-[#161c2d] hover:text-[#f74d4d]">
                                        { el.name }
                                    </a>
                                </li>
                            )))}
                        </ul>
                    ))}
                </div>

                <div className="flex-1">
                    <div className="max-w-xs">
                        <p className="text-gray-500 text-sm font-normal mb-6">Download Our App</p>
                    </div>
                    <Image src="/1x/''Fichier 4.png" width={180} height={180} alt="Image background"  className="mb-2 cursor-pointer transition-all hover:scale-105" />
                    <Image src="/1x/''Fichier 5.png" width={180} height={180} alt="Image background"  className="cursor-pointer transition-all hover:scale-105" />
                </div>
            </div>
            <section className="mt-8 py-2 md:py-8 border-t items-center justify-between sm:flex">
                <section className="mt-4 flex flex-wrap justify-center gap-2 text-[#161c2d] font-light text-sm sm:mt-0">
                    <div>&copy; 2024 Copyright, All Right Reserved, Made by Seju_ui_ux with</div>
                    <div>
                        <div className="flex items-center text-[#f74d4d]">
                            <FaHeart className="w-4 h-4"/>
                        </div>
                    </div>
                </section>

                <section className="items-center justify-between sm:flex">
                    <section className="flex items-center justify-center gap-x-6 text-[#161c2d] mt-4 sm:mt-0">
                        <Link href="https://www.tiktok.com/@gunivers1" target="_blank">
                            <div className="flex items-center hover:text-[#f74d4d] cursor-pointer transition-all hover:scale-110">
                                <FaTwitter className="w-5 h-5"/>
                            </div>
                        </Link>
                        <Link href="https://web.facebook.com/GGUNIVERS" target="_blank">
                            <div className="flex items-center hover:text-[#f74d4d] cursor-pointer transition-all hover:scale-110">
                                <FaFacebook className="w-5 h-5"/>
                            </div>
                        </Link>
                        <Link href="https://www.instagram.com/g_gunivers" target="_blank">
                            <div className="flex items-center hover:text-[#f74d4d] cursor-pointer transition-all hover:scale-110">
                                <FaInstagram className="w-5 h-5"/>
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/company/gunivers" target="_blank">
                            <div className="flex items-center hover:text-[#f74d4d] cursor-pointer transition-all hover:scale-110">
                                <FaLinkedin className="w-5 h-5"/>
                            </div>
                        </Link>
                    </section>
                </section>
                
            </section>
        </footer>
        </>
    )
}