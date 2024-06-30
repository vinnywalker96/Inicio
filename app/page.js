"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Hero from "../public/hero.png"
import TopBar from "./components/TopBar"
import HomeSearch from "./components/HomeSearch"
import ExploreProducts from "./components/ExploreProducts"
import DiscountSection from "./components/DiscountSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <main className="border-box">
      <TopBar />
      <section className="w-full h-full">
        <Image 
          src={Hero}
          className="object-cover w-full"
          quality={100}
          alt="Hero Background"
          priority={true}
        />
      </section>
      <HomeSearch />
      <ExploreProducts />
      <DiscountSection />
      <ContactSection />
    </main>
  );
}
