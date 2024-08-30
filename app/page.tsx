'use client'

import { ReactLenis } from 'lenis/react';
import Zoom from "@/components/Zoom";
import ParallaxBg from "@/components/ParallaxBg";
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {
  return ( <ReactLenis root>
    <main className="">
      <NavBar/>
      <Hero/>
      {/* <ParallaxBg/> */}
      <Footer/>
    </main>
    </ReactLenis>
  );
}
