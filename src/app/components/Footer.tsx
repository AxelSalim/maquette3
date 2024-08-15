import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaFacebookF, FaHeart, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"


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
    
    const footerNavigation = [
        {
            label: "Compagnie",
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
            label: "Support",
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
            label: "Contact",
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
    ]

    return (
        <>
        <footer className="">
            <section className=" md:py-10 items-center justify-between bg-[#68d585] sm:flex">
                <section className="md:flex md:flex-wrap text-center py-3 md:py-0 justify-center mx-auto items-center gap-5 text-[#161c2d] sm:mt-0 ">
                    <h2 className="text-2xl font-semibold text-white py-3 md:py-0">Ready to get started?</h2>
                    <button className="border hover:scale-105 transition-all bg-white font-semibold rounded-md text-md px-6 py-2 my-1 md:my-0">Get A Free Quote</button>
                </section>
            </section>

            <section className="bg-[#161c2d]">
                <section className="max-w-4xl mx-auto justify-between md:flex pt-12 px-6 md:px-2">
                    <div className="flex-1">
                        <section>
                            <h1 className="text-white text-xl font-bold mb-2 md:mb-6">BrainWave.io</h1>
                            <p className="font-normal w-2/3 text-sm text-gray-500">With lot of unique blocks, you can easily build a page without coding. <br/> Build your next landing page</p>
                        </section>
                        <section className="flex items-center gap-x-6 text-white pt-4">
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

                    <div className="flex-1 gap-12 justify-between md:flex pt-4 md:pt-0">
                        {footerNavs.map((item, idx) => (
                            <ul className="mb-8" key={idx}>
                                <h1 className="text-gray-500 text-sm font-normal mb-2 md:mb-6">{ item.label }</h1>
                
                                {item.items.map(((el, idx) => (
                                    <li key={idx} className="mb-2">
                                        <a href={el.href} className="transition-all text-gray-300 text-[0.9rem] hover:text-[#68d585]">
                                            { el.name }
                                        </a>
                                    </li>
                                )))}
                            </ul>
                        ))}
                    </div>
                </section>

                <section className="max-w-4xl mx-auto border-t border-gray-300">
                    <div className="md:flex md:flex-wrap text-center gap-2 justify-between items-center py-4 px-6 md:px-2">
                        <p className="text-gray-300 text-sm text-center">© 2024 Gunivers. Tous droits réservés.</p>
                        <p className="text-gray-300 text-sm text-center">Design by Axel ADJAKIDJE</p>
                    </div>
                </section>
            </section>
        </footer>

        {/* <div className="my-6 bg-white"></div>
        
        <footer className="bg-[#0A2F5B] px-4">
            <section className="max-w-6xl mx-auto justify-between md:flex py-4 md:px-0">
                <div className="mb-2 sm:w-2/6">
                    <section className="mt-4">
                        <h1 className="text-white text-xl font-bold mb-2 md:mb-6">BrainWave.io</h1>
                        <p className="font-light w-2/3 text-justify text-sm text-white">Notre mission est de rendre les soins de santé plus accessibles, pratiques et rapides pour tous.</p>
                    </section>
                    <section className="flex flex-wrap items-center gap-x-4 text-white mt-2 sm:mt-8">
                        <p className="font-light text-sm">Suivez-nous :</p>

                        <div className="flex flex-wrap gap-2">
                            <div className="flex items-center justify-center gap-2 border-[#08BBD5] border rounded-full p-1">
                                <FaLinkedinIn className="w-4 h-4  hover:scale-110 text-[#08BBD5] transition-all " />
                            </div>
                            <div className="flex items-center justify-center gap-2 border-[#08BBD5] border rounded-full p-1">
                                <FaInstagram className="w-4 h-4  hover:scale-110 text-[#08BBD5] transition-all " />
                            </div>
                            <div className="flex items-center justify-center gap-2 border-[#08BBD5] border rounded-full p-1">
                                <FaXTwitter  className="w-4 h-4  hover:scale-110 text-[#08BBD5] transition-all " />
                            </div>
                            <div className="flex items-center justify-center gap-2 border-[#08BBD5] border rounded-full p-1">
                                <FaFacebookF className="w-4 h-4  hover:scale-110 text-[#08BBD5] transition-all " />
                            </div>
                        </div>

                    </section>
                </div>

                <div className=" sm:w-4/6 gap-6 justify-between md:flex ">
                    <ul className="mb-6">
                        <h1 className="text-white text-sm font-bold mb-3">Compagnie</h1>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">Acceuil</Link>
                        </li>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">A Propos de nous</Link>
                        </li>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">Nos agents</Link>
                        </li>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">Politiques de confidentialité</Link>
                        </li>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">Conditions d’utilisation</Link>
                        </li>
                    </ul>
                    
                    <ul className="mb-6">
                        <h1 className="text-white text-sm font-bold mb-3">Compagnie</h1>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">Support</Link>
                        </li>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">Centre de support</Link>
                        </li>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">24x7 Service</Link>
                        </li>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">Discussion rapide</Link>
                        </li>
                        <li className="">
                            <Link href="" className="transition-all text-gray-300 text-xs font-light">FAQs</Link>
                        </li>
                    </ul>

                    <ul className="mb-6">
                        <h1 className="text-white text-sm font-bold mb-3">Contact</h1>
                        <li className="mb-2">
                            <p className="transition-all text-gray-300 text-xs font-light">(00229) 234567890</p>
                        </li>
                        <li className="mb-2">
                            <p className="transition-all text-gray-300 text-xs font-light">(00229) 234567890</p>
                        </li>
                        <li className="mb-2">
                            <p className="transition-all text-gray-300 text-xs font-light">contact@walab.bj</p>
                        </li>
                        <li className="mb-2 w-2/3">
                            <p className="transition-all text-gray-300 text-xs font-light">123 Rue de la Santé, 75000 Cotonou, Bénin</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="max-w-6xl mx-auto border-t border-[#08BBD5] py-6">
                <div className="sm:flex flex-wrap gap-2  justify-between items-center">
                    <p className="text-white text-sm text-center">© 2024 Walab. Tous droits réservés.</p>
                    <p className="text-[#08BBD5] font-semibold text-sm text-center">Design by Gerard Hounnou</p>
                </div>
            </section>
        </footer> */}

        </>
    )
}