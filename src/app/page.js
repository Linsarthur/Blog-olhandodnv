"use client";

import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import Header from "@/components/Header";
import Carousel from "@/components/carousel";

// import Carousel from "@/components/carousel";


export default function Home() {
  return (
    <>
      <Header />
      <Carousel/>
    </>
  );
}
