'use client'

import { FC } from "react";

export const Links: FC = () => {

    const handleClick = () => {
        const element = document.getElementById('newsletter')
        element?.scrollIntoView({ behavior: "smooth" })
    }


    return (
        <ul className="flex mr-5 lg:text-sm text-[10px]">
            <li className="lg:mx-8 mx-2 font-bold"><a href="">LE CONCEPT</a></li>
            <li className="lg:mx-8 mx-2 font-bold"><a href="">VOTRE VOYAGE</a></li>
            <li className="lg:mx-8 mx-2 font-bold"><p onClick={handleClick} className="text-oukonva-orange cursor-pointer">RESTER INFORMÉ</p></li>
        </ul>
    )
}