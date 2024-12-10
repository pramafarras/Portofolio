'use client'

import Image from "next/image"
import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Loader, Loader2, X } from 'lucide-react';



const alato = [
    "/Alato/Home_page.png",
    "/Alato/Login_page.png",
    "/Alato/Equipments_page.png",
    "/Alato/Bodyparts_page.png",
    "/Alato/Workouts_page.png",
    "/Alato/Workoutdetail_page.png",
    "/Alato/Ratedlist_page.png",
    "/Alato/Playlist_page.png",
]

const alatotech = [
    "Laravel",
    "PHP",
    "HTML",
    "CSS",
    "Bootstrap",
    "MySQL",
    "Python",
]

const portofolio = [
    "/Portofolio/lightmode.png",
    "/Portofolio/darkmode.png",
]

const portofoliotech = [
    "HTML",
    "CSS",
    "Javascript",
    "Tailwind CSS",
    "NextJS",
    "Framer Motion",
    "Typescript",
]


const Cards = () => {
    const [curr, setCurr] = useState(0)
    const [curr2, setCurr2] = useState(0)
    const [modal, setModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
  
  
    
    const alatoprev = () => {
        return (
            setCurr (curr => curr === 0 ? alato.length - 1 : curr - 1)
        )
    }

    const alatonext = () => {
        return (
            setCurr (curr === alato.length - 1 ? 0 : curr + 1)
        )
    }

    const portofolioprev = () => {
        return (
            setCurr2 (curr2 => curr2 === 0 ? portofolio.length - 1 : curr2 - 1)
        )
    }

    const portofolionext = () => {
        return (
            setCurr2 (curr2 === portofolio.length - 1 ? 0 : curr2 + 1)
        )
    }

    useEffect(() => {
        setIsLoading(true)
    }, [curr, curr2])

    const getObjectFitStyle = useMemo(() => {
        return (index: number) => {
          if ([0, 2, 3, 4, 6, 7].includes(index)) return 'object-cover object-top'
          if ([1, 5].includes(index)) return 'object-cover object-left-bottom xl:object-fill'
          return 'object-contain'
        }
      }, []);

    return (
        <>
            <div className="w-screen sm:w-full h-full my-6 ">
                <div onClick={() => setModal(true)} className="overflow-hidden relative border-t-2 border-b-2 lg:border-4 sm:border-2 border-secondary dark:border-gray-300 aspect-square sm:aspect-video w-screen sm:w-full max-w-[1280px] sm:h-auto h-full mx-auto sm:rounded-lg cursor-pointer group ">
                    <div className={'flex transition-transform ease-in-out duration-500 sm:h-full h-4/5'} style={{ transform: `translateX(-${curr*100}%)` }}>
                    
                        {alato.map((j, i) => (
                            <div key={i} className="min-w-full h-full aspect-video relative"
                            >
                            <Image src={j} alt="alatoimages" priority  fill className={getObjectFitStyle(i)}
                            
                            />
                            
                            </div>
                        ))}
                        
                    </div>
                    <div className="absolute inset-1 lg:inset-3 flex items-center justify-between">
                        <button onClick={(e) => {e.stopPropagation(); alatoprev();}}
                        className="rounded-full bg-slate-200/80 hover:bg-slate-300/70 z-10 size-[24px] lg:size-[40px]">
                            <ChevronLeft className="size-[24px] lg:size-[40px] text-black"></ChevronLeft>
                        </button>
                        <button onClick={(e) => {e.stopPropagation(); alatonext();}} className="rounded-full bg-slate-200/80 hover:bg-slate-300/70 z-10 size-[24px] lg:size-[40px]">
                            <ChevronRight className="size-[24px] lg:size-[40px] text-black"></ChevronRight>
                        </button>
                    </div>
                    <div className="absolute top-0 lg:top-1 xl:top-2 inset-x-0">
                        <div className="flex items-center justify-center gap-2 ">
                            {alato.map((item, i) => (
                                <div key={i} className={`transition-all  w-1 h-1 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-white rounded-full ${curr === i ? "p-1 sm:p-1.5 md:p-2" : "bg-opacity-50"}`}>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sm:absolute sm:bottom-0 sm:inset-x-0 bg-primary lg:group-hover:bg-primary sm:h-fit h-1/5 py-0 sm:py-2 transform lg:translate-y-full  lg:group-hover:translate-y-0 lg:transition-all lg:ease-in-out lg:duration-300 lg:p-4 lg:border-t-4 border-t-2 border-secondary dark:border-gray-300 flex flex-col content-center items-center justify-center " onClick={(e) => e.stopPropagation()}>
                            <div className="text-center flex flex-wrap flex-col w-full sm:max-w-[90%] max-h-full lg:max-w-[75%] transform lg:translate-y-full 
                            lg:group-hover:translate-y-0 
                            lg:transition-all lg:ease-in-out lg:duration-300 
                            lg:opacity-0
                            lg:group-hover:opacity-100
                            overflow-hidden h-full">
                            <div className="flex flex-row content-center items-center justify-center gap-1 lg:gap-2 ">
                                <h1 className="font-bold  lg:text-2xl xl:text-4xl text-[14px] sm:text-[18px] md:text-[24px] text-black">Alato</h1>
                                <Link href="https://github.com/pramafarras/Alato.git"
                                aria-label="alatolink"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className=" text-black hover:text-white hover:scale-125 hover:shadow-lg transition-all ease-in-out duration-200 h-full flex justify-center items-center">
                                    <ExternalLink className="size-[14px] sm:text-[18px] md:text-[24px] lg:size-[20px] "></ExternalLink>
                                </Link>
                            </div>
                            <p className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-md lg:mt-2 mt-0  text-black">Thesis project (Website) that are built to improve physical fitness with filtering features and recommendation system using user-based collaborative filtering</p>
                            <div className="flex flex-wrap lg:gap-2 gap-0.5 mt-0.5 sm:mt-1 lg:mt-2 justify-center items-center content-start w-full">
                                {alatotech.map((value, index) => (
                                    <div key={index} className="rounded-full bg-slate-300 size-fit px-2 py-0.5 mt-1 lg:px-3 lg:py-1 self-center text-center text-[6px] sm:text-[10px] md:text-[14px] lg:text-sm hover:bg-slate-100 text-black">
                                    {value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            

            {modal && (
                

                
                
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setModal(false)}>
                    {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center rounded-md">
                                    <Loader2 className="animate-spin text-white" size={32} />
                                </div>
                            )}
                    <div className="relative max-w-[90vw]">
                    {!isLoading && (
                        <button onClick={() => setModal(false)} className="absolute -top-10 right-0 lg:top-0 lg:-right-10 text-white hover:text-gray-300 border border-white rounded-md">
                            <X size={32} 
                                 />
                                 
                        </button>
                        )}
                        <div className="relative">
                            <Image 
                                src={alato[curr]} 
                                alt={`Original ${curr}`} 
                                width={1920} 
                                height={1080} 
                                priority 
                                className={`object-contain max-h-[60vh] sm:max-h-[75vh] lg:max-h-[90vh] w-auto rounded-md ${!isLoading ? 'border' : ''}` }
                                onClick={(e) => e.stopPropagation()}
                                onLoadingComplete={() => setIsLoading(false)}
                                onLoad={() => setIsLoading(false)}
                            />
                            
                        </div>
                    </div>
                </div>
                
            )}

            <div className="w-screen sm:w-full h-full my-6 ">
                <div onClick={() => setModal(true)} className="overflow-hidden relative border-t-2 border-b-2 lg:border-4 sm:border-2 border-secondary dark:border-gray-300 aspect-square sm:aspect-video w-screen sm:w-full max-w-[1280px] sm:h-auto h-full mx-auto sm:rounded-lg cursor-pointer group ">
                    <div className={'flex transition-transform ease-in-out duration-500 sm:h-full h-4/5'} style={{ transform: `translateX(-${curr2*100}%)` }}>
                    
                        {portofolio.map((j, i) => (
                            <div key={i} className="min-w-full h-full aspect-video relative"
                            >
                            <Image src={j} alt="portofolioimages" priority  fill className='object-cover object-top'
                            
                            />
                            
                            </div>
                        ))}
                        
                    </div>
                    <div className="absolute inset-1 lg:inset-3 flex items-center justify-between">
                        <button onClick={(e) => {e.stopPropagation(); portofolioprev();}}
                        className="rounded-full bg-slate-200/80 hover:bg-slate-300/70 z-10 size-[24px] lg:size-[40px]">
                            <ChevronLeft className="size-[24px] lg:size-[40px] text-black"></ChevronLeft>
                        </button>
                        <button onClick={(e) => {e.stopPropagation(); portofolionext();}} className="rounded-full bg-slate-200/80 hover:bg-slate-300/70 z-10 size-[24px] lg:size-[40px]">
                            <ChevronRight className="size-[24px] lg:size-[40px] text-black"></ChevronRight>
                        </button>
                    </div>
                    <div className="absolute top-0 lg:top-1 xl:top-2 inset-x-0">
                        <div className="flex items-center justify-center gap-2 ">
                            {portofolio.map((item, i) => (
                                <div key={i} className={`transition-all  w-1 h-1 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-white rounded-full ${curr2 === i ? "p-1 sm:p-1.5 md:p-2" : "bg-opacity-50"}`}>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sm:absolute sm:bottom-0 sm:inset-x-0 bg-primary lg:group-hover:bg-primary sm:h-fit h-1/5 py-0 sm:py-2 transform lg:translate-y-full  lg:group-hover:translate-y-0 lg:transition-all lg:ease-in-out lg:duration-300 lg:p-4 lg:border-t-4 border-t-2 border-secondary dark:border-gray-300 flex flex-col content-center items-center justify-center " onClick={(e) => e.stopPropagation()}>
                            <div className="text-center flex flex-wrap flex-col w-full sm:max-w-[90%] max-h-full lg:max-w-[75%] transform lg:translate-y-full 
                            lg:group-hover:translate-y-0 
                            lg:transition-all lg:ease-in-out lg:duration-300 
                            lg:opacity-0
                            lg:group-hover:opacity-100
                            overflow-hidden h-full">
                            <div className="flex flex-row content-center items-center justify-center gap-1 lg:gap-2 ">
                                <h1 className="font-bold  lg:text-2xl xl:text-4xl text-[14px] sm:text-[18px] md:text-[24px] text-black">Portofolio</h1>
                                <Link href="https://github.com/pramafarras/Portofolio.git"
                                aria-label="portofoliolink"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className=" text-black hover:text-white hover:scale-125 hover:shadow-lg transition-all ease-in-out duration-200 h-full flex justify-center items-center">
                                    <ExternalLink className="size-[14px] sm:text-[18px] md:text-[24px] lg:size-[20px] "></ExternalLink>
                                </Link>
                            </div>
                            <p className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-md lg:mt-2 mt-0  text-black">Website project that contains information about me, including my skills, experiences, education, and projects</p>
                            <div className="flex flex-wrap lg:gap-2 gap-0.5 mt-0.5 sm:mt-1 lg:mt-2 justify-center items-center content-start w-full">
                                {portofoliotech.map((value, index) => (
                                    <div key={index} className="rounded-full bg-slate-300 size-fit px-2 py-0.5 mt-1 lg:px-3 lg:py-1 self-center text-center text-[6px] sm:text-[10px] md:text-[14px] lg:text-sm hover:bg-slate-100 text-black">
                                    {value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            

            {modal && (
                

                
                
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setModal(false)}>
                    {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center rounded-md">
                                    <Loader2 className="animate-spin text-white" size={32} />
                                </div>
                            )}
                    <div className="relative max-w-[90vw]">
                    {!isLoading && (
                        <button onClick={() => setModal(false)} className="absolute -top-10 right-0 lg:top-0 lg:-right-10 text-white hover:text-gray-300 border border-white rounded-md">
                            <X size={32} 
                                 />
                                 
                        </button>
                        )}
                        <div className="relative">
                            <Image 
                                src={portofolio[curr2]} 
                                alt={`Original ${curr2}`} 
                                width={1920} 
                                height={1080} 
                                priority 
                                className={`object-contain max-h-[60vh] sm:max-h-[75vh] lg:max-h-[90vh] w-auto rounded-md ${!isLoading ? 'border' : ''}` }
                                onClick={(e) => e.stopPropagation()}
                                onLoadingComplete={() => setIsLoading(false)}
                                onLoad={() => setIsLoading(false)}
                            />
                            
                        </div>
                    </div>
                </div>
                
            )}
        </>
    )
}

export default Cards