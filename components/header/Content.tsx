'use client'

import { FC } from "react";
import logo from '@/public/images/logo.png'
import { Socials } from "@/components/Socials"
import { Links } from "@/components/header/Links"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderContent : FC = () => {

    const pathName = usePathname();

    return(
        <div className={pathName === "/" ? "bg-oukonva-beige" : "bg-oukonva-saumon" + " fixed w-full z-10 transition-all duration-300"}>
            <div className="w-full flex justify-end">
                <div className="lg:w-2/4 w-1/3 items-center">
                    <Link href="/">
                        <img src={logo.src} className=" w-[252px]" />
                    </Link>
                </div>
                <div className="lg:w-2/4 w-2/3 flex justify-center md:justify-between items-center">
                    <Links />
                    <Socials className="hidden md:flex" />
                </div>
            </div>
        </div >
    )
}