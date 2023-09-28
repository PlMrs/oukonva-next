import { Socials } from "@/components/Socials";
import { FC } from "react";

export const Footer: FC = () => {

    return (
        <footer className="py-7 bg-oukonva-beige">
            <div className="w-full flex lg:justify-end justify-center">
                <div className="lg:w-2/4 lg:items-start items-center w-full flex flex-col sm:flex-row justify-between">
                    <ul className="flex mr-5ext-base text-xs justify-evenly w-full mb-5 md:mb-0">
                        <li className="lg:mx-8 lg:text-base font-bold"><a href="">LE CONCEPT</a></li>
                        <li className="lg:mx-8 lg:text-base font-bold"><a href="">VOTRE VOYAGE</a></li>
                        <li className="lg:mx-8 lg:text-base font-bold"><a href="">NOUS CONTACTER</a></li>
                    </ul>
                    <Socials />
                </div>
            </div>
        </footer>
    )
}