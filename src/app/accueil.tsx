'use client';

import "./globals.css";
import { poppins } from "./page/fonts";
import  { useEffect, useState } from "react";
import { ThemeModeScript } from "flowbite-react";
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";


const Accueil: React.FC<{ childrens: React.ReactNode }> = ({ childrens }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOutLoading, setFadeOutLoading] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsNavSticky(scrollTop > 0); // Met à jour l'état en fonction du défilement
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      setFadeOutLoading(true);
      setTimeout(() => setLoading(false), 500);
    };

    fetchData();
  }, []);


  if(loading) {
    return (
      <html>
        <head>
          <title>BrainWave</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
          <ThemeModeScript />
        </head>

        <body className={`${poppins.className}`}>
          <div className={`loading-screen ${fadeOutLoading ? 'fade-out' : ''}`}>
          <div className="cube-loader absolute bottom-0 left-0">
            <div className="cube cube1"></div>
            <div className="cube cube2"></div>
            <div className="cube cube3"></div>
            <div className="cube cube4"></div>
          </div>

          </div>
        </body>
      </html>
    );
  }

  return (
    <html>
      <head>
        <title>BrainWave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
        <ThemeModeScript />
      </head>

      <body className={`content ${poppins.className}`}>
        <header className="absolute z-50 w-full">
            <Navbar></Navbar>
        </header>

        <main className="">
            { childrens }
        </main>

        <footer className="">
            <Footer />
        </footer>
        <ScrollToTopButton/>
      </body>

    </html>
  );
};

export default Accueil;

