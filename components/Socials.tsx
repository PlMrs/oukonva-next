import { FC } from "react"

import insta from '@/public/icons/instagram.png'
import twitter from '@/public/icons/twitter.png'
import facebook from '@/public/icons/facebook.png'


type Tprops = {
    className?: string
}

export const Socials: FC<Tprops> = ({ className }) => {

    return (
        <ul className={className + " flex mr-5 lg:mr-20"}>
            <li className=" mr-3"><a href=""><img className=" w-6" src={insta.src} alt="" /></a></li>
            <li className="mr-3 ml-3"><a href=""><img className=" w-6" src={twitter.src} alt="" /></a></li>
            <li className="ml-3"><a href=""><img className=" w-6" src={facebook.src} alt="" /></a></li>
        </ul>
    )
}