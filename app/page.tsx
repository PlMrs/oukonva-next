import barque from "@/public/images/barque.jpg"
import vaguesBeiges from "@/public/images/forme-bl.png"
import avion from "@/public/images/avion.png"
import traceAvion from "@/public/images/trace-avion.png"
import bateau from "@/public/images/bateau.png"
import Link from "next/link"
import { NewsLetter } from "@/components/newsletter"


export default function Home() {
  return (
    <main className="">
        <div className="relative w-full h-screen flex justify-end overflow-hidden">
            <img src={barque.src} className="absolute left-[-26%] w-full h-full object-contain hidden lg:block" />
            <div className="relative lg:w-3/5 w-full flex justify-end">
                <img src={vaguesBeiges.src} className="absolute top-0 left-[-30%] h-[166vh] hidden lg:block" style={{transform: "rotate(6deg)"}} />
                <img src={avion.src} className="absolute z-[2] left-0 bottom-[18%] hidden lg:block" style={{transform : "rotate(80deg)"}} />
                <img src={traceAvion.src} className="absolute z-[2] bottom-[-4%] left-[-10%] hidden lg:block" style={{transform : "rotate(236deg)"}}  />
                <img src={bateau.src} className="absolute z-[2] bottom-0 right-[15%]" />
                <div className="bg-oukonva-beige w-full lg:w-[74%] uppercase flex flex-col lg:justify-center z-[1] pt-20 lg:pt-0">
                    <div className="font-semibold text-2xl lg:text-6xl md:text-5xl sm:text-2xl">
                        <p className="lg:text-left text-center">ta personnalité</p>
                        <p className="text-oukonva-orange my-4 lg:text-left text-center">ta destination</p>
                        <p className="lg:text-left text-center">ton voyage</p>
                    </div>
                    <div className="font-semibold w-3/4 mt-11 text-[11px] mx-auto lg:mx-0">
                        <p>Tu ne sais pas où partir ?</p>
                        <p className=" my-3">Oukonva, c'est quelques questions, une destination et des activités personnalisées et qui te correspondent.</p>
                        <p>En quelques clics, découvre ta prochaine destination de vacances.</p>
                        <div className="mt-9">
                            <Link href="/test" className="uppercase text-white bg-oukonva-marine py-3 px-7 text-sm">Lancer le test</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NewsLetter />
    </main>
  )
}
