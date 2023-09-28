'use client';

import { useEffect, useState } from "react";
import 'animate.css';
import bientot from "@/public/images/bientot.png"
import { NewsLetter } from "@/components/newsletter";
import { TQuestionnaireData } from "@/types/test.types";
import { dataMock } from "@/mocks/test.mock";
import { Loader } from "@/components/loader";
import { ProgressBar } from "@/components/progressBar";

export default function Test() {

    const [questions] = useState<TQuestionnaireData[]>(dataMock)

    const [responses, setResponses] = useState<{question: number, answer: number}[]>([])

    const [index, setIndex] = useState<number>(0)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleResponse = (question: any, answer: any) => {
        setResponses((prevState) => {
            const futurResponses = [...prevState, {question : question.id, answer : answer.id}]
            if(futurResponses.length === questions.length)
                setIsLoading(true);
            return futurResponses
        })
        setIndex(index + 1) 
    }

    const handlePrevButtonClick = () => {
        setResponses(prevState => prevState.filter(response => response.question !== prevState[prevState.length - 1].question))
        setIndex(index - 1)
    }

    useEffect(() => {
        if(isLoading){
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }
    }, [isLoading])

    return (
        <>
            <main className="pt-[82px] h-screen bg-oukonva-beige font-semibold">
            {responses.length === questions.length && isLoading && (
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <h1 className="text-2xl md:text-6xl mb-5">Chargement des résultats</h1>
                    <Loader />
                </div>
            )}
            { 
                questions[index] && (
                    <div className=" m-auto max-w-screen-lg w-full h-full flex flex-col justify-around">
                        <div className="flex justify-center">
                            <div className="relative">
                                <h1 className="text-center lg:text-6xl text-xl uppercase mt-3 animate__animated animate__fadeInDown">{questions[index].question.content}</h1>
                                {index > 0 && (
                                    <button onClick={handlePrevButtonClick} className="absolute left-[-27%] top-[-8px] lg:left-[-15%] lg:top-[11px] text-[60px] leading-[60px]">{"<"}</button>
                                )}
                            </div>
                        </div>
                        <div className="w-full flex justify-evenly items-center">
                            <div onClick={() => handleResponse(questions[index].question, questions[index].answer.oneHand)} style={{animationDelay: "250ms"}}  className="group hover:bg-oukonva-orange duration-150 bg-oukonva-bleu-clair flex flex-col items-center w-1/3 rounded-3xl py-11  cursor-pointer animate__animated animate__fadeIn">
                                <p className="group-hover:text-white duration-150 text-center uppercase">{questions[index].answer.oneHand.content}</p>
                                <div className="group-hover:bg-white duration-150 w-16 h-16 mt-5 bg-[#023047]" style={{maskImage: `url(${questions[index].answer.oneHand.image})`, WebkitMaskImage: `url(${questions[index].answer.oneHand.image})`, WebkitMaskPosition: 'center', maskPosition: 'center', WebkitMaskSize: 'contain', maskSize: 'contain'}} />
                            </div>
                            <p style={{animationDelay: "500ms"}}  className="uppercase font-semibold text-5xl  animate__animated animate__fadeIn">ou</p>
                            <div onClick={() => handleResponse(questions[index].question, questions[index].answer.otherHand)} style={{animationDelay: "750ms"}} className="group hover:bg-oukonva-bleu-clair duration-150 bg-oukonva-orange flex flex-col items-center w-1/3 rounded-3xl py-11 cursor-pointer animate__animated animate__fadeIn">
                                <p className=" group-hover:text-black duration-150 text-white text-center uppercase">{questions[index].answer.otherHand.content}</p>
                                <div className="group-hover:bg-[#023047] duration-150 w-16 h-16 mt-5 bg-white" style={{maskImage: `url(${questions[index].answer.otherHand.image})`, WebkitMaskImage: `url(${questions[index].answer.otherHand.image})`, WebkitMaskPosition: 'center', maskPosition: 'center', WebkitMaskSize: 'contain', maskSize: 'contain'}} />
                            </div>
                        </div>
                        <ProgressBar length={questions.length} current={index + 1} />
                    </div>
                ) 
            }
            { 
                responses.length === questions.length && !isLoading && (
                    <div className="flex flex-col items-center justify-center">
                        <img src={bientot.src} alt="" className=" max-w-xs md:max-w-md" />
                        <div className="font-bold text-center text-lg md:text-2xl">
                            <h1>Hâte de découvrir ta prochaine destination ?</h1>
                            <p>Abonne-toi à notre newsletter pour ne pas rater le décollage</p>
                        </div>
                        <div>
                        <form className="flex flex-row justify-center mt-[5%]" id="newsletter-form" method="POST" action="https://7975d9cf.sibforms.com/serve/MUIEAKk24KQmNAdu7N02SWTginbOpkCQoZbRzed0ylbdZ9pkZZ65Cah6oqpY-Gkf23JN1z7xq2D6Ika0X-NAyYfftcFtkDmyZ970V7DhsiQIyVip8BMt1WCMa0V9ON3AU3O_kOK_l7-YfMQhEobKicg5oLM9SLDzH250xcqHDUi3-Bf-Pq43aA3p7eTNEovjaLML7IiqAJhEYgwa" data-type="subscription">
                            <input type="email" id="EMAIL" name="EMAIL" placeholder="adresse mail" className="lg:w-[600px] w-2/6 pl-1" />
                            <button className="bg-oukonva-bleu-clair px-3 lg:p-6 text-xs sm:text-base font-semibold">ME TENIR AU COURANT</button>
                        </form>
                        </div>
                    </div>
                ) 
            }
        </main>
        {
            questions[index] &&  <NewsLetter /> 
        }
        </>
    )
}