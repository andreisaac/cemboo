"use client"
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import {useState} from "react";
import {motion} from "framer-motion";

import logo from "@images/logo.svg"
import userCircle from "@images/userCircle.svg"
import search from "@images/search.svg"
import home from "@images/home.svg"
import tv from "@images/tv.svg"
import layout from "@images/layout.svg"

const linkR = (label:string, link:string, image:ImageProps) => {

};
 
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

    return (
      <>
        <motion.nav className="max-lg:hidden flex flex-col h-full min-h-full w-24 bg-n900  hover:border-r hover:border-n500"
      whileHover={{
        width: 300
      }}>
            
        <Link href="/" className="px-3">
          <Image src={logo} width={70} height={70} loading="lazy" alt="arrow right" className="my-5"></Image>
        </Link>
        
        <div className="px-8 flex-1 flex flex-col gap-10 place-content-center">
          <Link href="/" className="active:scale-100 hover:scale-105 hover:text-green500 transition ease-in-out text-nowrap overflow-x-hidden">
            <Image src={userCircle} width={30} height={30} loading="lazy" alt="user" className="inline"></Image>
            <span className="ml-8">Profile</span>
          </Link>
          <Link href="/" className="active:scale-100 hover:scale-105 hover:text-green500 transition ease-in-out text-nowrap overflow-x-hidden">
            <Image src={search} width={30} height={30} loading="lazy" alt="search" className="inline"></Image>
            <span className="ml-8">Search</span>
          </Link>
          <Link href="/" className="active:scale-100 hover:scale-105 hover:text-green500 transition ease-in-out text-nowrap overflow-x-hidden">
            <Image src={home} width={30} height={30} loading="lazy" alt="home" className="inline"></Image>
            <span className="ml-8">Home</span>
          </Link>
          <Link href="/" className="active:scale-100 hover:scale-105 hover:text-green500 transition ease-in-out text-nowrap overflow-x-hidden">
            <Image src={tv} width={30} height={30} loading="lazy" alt="tv" className="inline"></Image>
            <span className="ml-8">TV</span>
          </Link>
          <Link href="/" className="active:scale-100 hover:scale-105 hover:text-green500 transition ease-in-out text-nowrap overflow-x-hidden">
            <Image src={layout} width={30} height={30} loading="lazy" alt="layout" className="inline"></Image>
            <span className="ml-8">Categories</span>
          </Link>
        </div>
            
        </motion.nav>

        <nav className="lg:hidden flex flex-row w-full min-w-full h-16 bg-n900  hover:border-r hover:border-n500">

        <div className="mx-auto px-8 flex flex-row gap-10 place-content-center">
          <Link href="/" className="place-self-center active:scale-100 hover:scale-110 transition ease-in-out">
            <Image src={userCircle} width={30} height={30} loading="lazy" alt="user"></Image>
          </Link>
          <Link href="/" className="place-self-center active:scale-100 hover:scale-110 transition ease-in-out">
            <Image src={search} width={30} height={30} loading="lazy" alt="search"></Image>
          </Link>
          <Link href="/" className="place-self-center active:scale-100 hover:scale-110 transition ease-in-out">
            <Image src={home} width={30} height={30} loading="lazy" alt="home"></Image>
          </Link>
          <Link href="/" className="place-self-center active:scale-100 hover:scale-110 transition ease-in-out">
            <Image src={tv} width={30} height={30} loading="lazy" alt="tv"></Image>
          </Link>
          <Link href="/" className="place-self-center active:scale-100 hover:scale-110 transition ease-in-out">
            <Image src={layout} width={30} height={30} loading="lazy" alt="layout"></Image>
          </Link>
        </div>
            
        </nav>
      </>
    
    )
}

export default Navbar;