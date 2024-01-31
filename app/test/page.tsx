'use client';

import { useEffect, useState } from "react";
import 'animate.css';
import { NewsLetter } from "@/components/newsletter";
import { TQuestionnaireData } from "@/types/test.types";
import { dataMock } from "@/mocks/test.mock";
import { Loader } from "@/components/loader";
import { ProgressBar } from "@/components/progressBar";
import { ApiChatgptTestResult } from "./test.types";

export default function Test() {

    const [questions] = useState<TQuestionnaireData[]>(dataMock)

    const [responses, setResponses] = useState<string[]>([])

    const [index, setIndex] = useState<number>(0)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [chatApiResponse, setChatApiResponse] = useState<ApiChatgptTestResult[] | null>(null)

    const handleResponse = (userRep: string) => {
        setResponses((prevState) => [...prevState, userRep])
        setIndex(index + 1) 
    }

    useEffect(() => {
        if(responses.length === questions.length){
            setIsLoading(true);
            const testResultCall = async () =>{
                const payload = { responses }
                const res = await fetch('/api/testMock', {
                    method: 'POST',
                    body: JSON.stringify(payload)
                }) 
                setChatApiResponse(await res.json())
            }
            testResultCall()
        }
    }, [responses])

    useEffect(() => {
        setIsLoading(false)
        console.log({
            chatApiResponse
        })
    }, [chatApiResponse])

    const handlePrevButtonClick = () => {
        setResponses(prevState => prevState.filter(responses => responses !== prevState[prevState.length - 1]))
        setIndex(index - 1)
    }

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
                            <div onClick={() => handleResponse(questions[index].answer.oneHand.content)} style={{animationDelay: "250ms"}}  className="group hover:bg-oukonva-orange duration-150 bg-oukonva-bleu-clair flex flex-col items-center w-1/3 rounded-3xl py-11  cursor-pointer animate__animated animate__fadeIn">
                                <p className="group-hover:text-white duration-150 text-center uppercase">{questions[index].answer.oneHand.content}</p>
                                <div className="group-hover:bg-white duration-150 w-16 h-16 mt-5 bg-[#023047]" style={{maskImage: `url(${questions[index].answer.oneHand.image})`, WebkitMaskImage: `url(${questions[index].answer.oneHand.image})`, WebkitMaskPosition: 'center', maskPosition: 'center', WebkitMaskSize: 'contain', maskSize: 'contain'}} />
                            </div>
                            <p style={{animationDelay: "500ms"}}  className="uppercase font-semibold text-5xl  animate__animated animate__fadeIn">ou</p>
                            <div onClick={() => handleResponse(questions[index].answer.otherHand.content)} style={{animationDelay: "750ms"}} className="group hover:bg-oukonva-bleu-clair duration-150 bg-oukonva-orange flex flex-col items-center w-1/3 rounded-3xl py-11 cursor-pointer animate__animated animate__fadeIn">
                                <p className=" group-hover:text-black duration-150 text-white text-center uppercase">{questions[index].answer.otherHand.content}</p>
                                <div className="group-hover:bg-[#023047] duration-150 w-16 h-16 mt-5 bg-white" style={{maskImage: `url(${questions[index].answer.otherHand.image})`, WebkitMaskImage: `url(${questions[index].answer.otherHand.image})`, WebkitMaskPosition: 'center', maskPosition: 'center', WebkitMaskSize: 'contain', maskSize: 'contain'}} />
                            </div>
                        </div>
                        <ProgressBar length={questions.length} current={index + 1} />
                    </div>
                ) 
            }
            { 
                !isLoading && chatApiResponse && (
                    <div className="flex flex-col items-center justify-center">
                        <ul>
                        {chatApiResponse.map((destination, index) => {
                            return (
                                <li key={`${destination}${index}`}>
                                    <p>Pays: {destination.country}</p>
                                    <p>Descriptions: {destination.description}</p>
                                    <p>Points d'intérets</p>
                                    <ul>
                                    {destination.points_of_interest.map(POI => {
                                        return (
                                            <li key={POI.name}>
                                                <p>Nom: {POI.name}</p>
                                                <p>Ville: {POI.city}</p>
                                                <p>Description: {POI.description}</p>
                                            </li>
                                        )
                                    })}
                                    </ul>
                                </li>
                            )
                        })}
                        </ul>
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