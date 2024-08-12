"use client";

import Head from "next/head";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "next/image";
import { ThemeModeScript } from "flowbite-react";


const Home: React.FC<{ childrens: React.ReactNode }> = ({ childrens }) => {
  return (
    <>
      <Head>
        <title>Acceuil - BrainWave</title>
        <meta name="description" content="BrainWave" />
        <ThemeModeScript />
      </Head>


      <section className="relative">
        <Header></Header>
      </section>

      <section className="">
        {childrens}
      </section>

      <section className="bg-[#fdfcff] pt-20">
        <Footer></Footer>
      </section>
      
    </>
  );
}

export default Home;
