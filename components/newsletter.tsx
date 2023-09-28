import { FC } from "react";
import avion from "@/public/images/avion.png"
import traceAvion from "@/public/images/trace-avion.png"
import point from "@/public/images/point.png"
import bateau from "@/public/images/bateau.png"

export const NewsLetter: FC = () => {

    return (
        <div className="bg-oukonva-marine lg:h-screen lg:pt-28 pt-10 pb-8 relative" id="newsletter">
            <div className="hidden lg:block absolute right-[10%] w-[200px] top-[40%] lg:top-0 lg:scale-100 scale-50">
                <img src={avion.src} className="absolute" />
                <img src={traceAvion.src} className="absolute top-[115px] left-[79px]" />
            </div>
            <div className="hidden lg:block absolute w-[200px] lg:bottom-[48%] lg:left-[5%] bottom-24 left-0 lg:scale-100 scale-50">
                <img src={point.src} className="absolute" />
                <img src={traceAvion.src} className="absolute top-[-116px]" style={{transform: "rotate(-122deg)"}} />
            </div>
            <img src={bateau.src} className="absolute bottom-[2%] right-[22%] hidden lg:block" />
            <p className="text-center text-white lg:text-6xl text-2xl font-semibold lg:leading-[70px] mt-10">HÂTE DE DÉCOUVRIR<br/>TA PROCHAINE DESTINATION ?</p>
            <div>
                <form className="flex flex-row justify-center lg:h-[89px] h-8 mt-[8%]" id="newsletter-form" method="POST" action="https://7975d9cf.sibforms.com/serve/MUIEAKk24KQmNAdu7N02SWTginbOpkCQoZbRzed0ylbdZ9pkZZ65Cah6oqpY-Gkf23JN1z7xq2D6Ika0X-NAyYfftcFtkDmyZ970V7DhsiQIyVip8BMt1WCMa0V9ON3AU3O_kOK_l7-YfMQhEobKicg5oLM9SLDzH250xcqHDUi3-Bf-Pq43aA3p7eTNEovjaLML7IiqAJhEYgwa" data-type="subscription">
                    <input type="email" id="EMAIL" name="EMAIL" placeholder="adresse mail" className="lg:w-[600px] w-2/6 pl-9" />
                    <button className="bg-oukonva-bleu-clair px-3 lg:p-8 text-xs sm:text-base font-semibold">ME TENIR AU COURANT</button>
                </form>
            </div>
            <div className="lg:hidden margin-auto relative rotate-[140deg] w-36 mt-[160px] mr-1/2 ml-[58%] m-[220px 50% 0px 58%]">
                <img src={avion.src} className="absolute" />
                <img src={traceAvion.src} className="absolute top-[115px] left-[79px]" />
            </div>
</div>
    )
}