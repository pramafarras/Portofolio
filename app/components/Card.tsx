'use client'

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'react-feather';


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


const Cards = () => {
    const [curr, setCurr] = useState(0)
    const [modal, setModal] = useState(false)
    
    const prev = () => {
        return (
            setCurr (curr => curr === 0 ? alato.length - 1 : curr - 1)
        )
    }

    const next = () => {
        return (
            setCurr (curr === alato.length - 1 ? 0 : curr + 1)
        )
    }

    const getObjectFitStyle = (index: number) => {
        if (index === 0 || index === 2 || index === 3 || index === 4 || index === 6 || index === 7) return 'object-cover object-top'
        if (index === 1 || index === 5) return 'object-fill'
        return 'object-contain'
    };

    return (
        <>
            <div className=" mt-6">
                <div onClick={() => setModal(true)} className="overflow-hidden relative border-4 border-secondary w-[1280px] h-[720px] rounded-lg cursor-pointer group">
                    <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${curr*100}%)` }}>
                        {alato.map((j, i) => (
                            <div key={i} className="min-w-full h-[720px] relative"
                            >
                            <Image src={j} alt="" fill className={`${getObjectFitStyle(i)}`}
                            
                            />
                            
                            </div>
                        ))}
                        
                    </div>
                    <div className="absolute inset-3 flex items-center justify-between">
                        <button onClick={(e) => {e.stopPropagation(); prev();}}
                        className="rounded-full bg-slate-200/80 hover:bg-slate-300/70 z-10">
                            <ChevronLeft size={40}></ChevronLeft>
                        </button>
                        <button onClick={(e) => {e.stopPropagation(); next();}} className="rounded-full bg-slate-200/80 hover:bg-slate-300/70 z-10">
                            <ChevronRight size={40}></ChevronRight>
                        </button>
                    </div>
                    <div className="absolute top-2 inset-x-0">
                        <div className="flex items-center justify-center gap-2 ">
                            {alato.map((item, i) => (
                                <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 group-hover:bg-primary  h-[25%] transform translate-y-full  group-hover:translate-y-0 transition-all ease-in-out duration-300 flex flex-col items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                        <div className="text-center flex flex-wrap flex-col max-w-[75%]">
                            <div className="flex flex-row items-center justify-center gap-2">
                                <h1 className="font-bold text-4xl">Alato</h1>
                                <Link href="https://github.com/pramafarras/Alato.git"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className=" text-black hover:text-white hover:scale-125 hover:shadow-lg transition-all ease-in-out duration-200">
                                    <ExternalLink></ExternalLink>
                                </Link>
                            </div>
                            <p className="text-lg mt-2">Thesis project that are built to improve physical fitness with filtering features and recommendation system using user-based collaborative filtering</p>
                            <div className="flex flex-wrap gap-2 mt-1 justify-center items-center">
                                <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-100">
                                Laravel
                                </div>
                                <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-100">
                                PHP
                                </div>
                                <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-100">
                                HTML
                                </div>
                                <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-100">
                                CSS
                                </div>
                                <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-100">
                                Bootstrap
                                </div>
                                <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-100">
                                MySQL
                                </div>
                                <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-100">
                                Python
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            

            {modal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setModal(false)}>
                    <div className="relative max-w-[90vw]">
                        <button onClick={() => setModal(false)} className="absolute top-0 -right-10 text-white hover:text-gray-300 border border-white rounded-md">
                        <X size={32}></X>
                        </button>
                        <Image src={alato[curr]} alt={`Original ${curr}`} width={1920} height={1080} className="object-contain max-h-[90vh] w-auto rounded-md border" onClick={(e) => e.stopPropagation()}>
                        
                        </Image>
                    </div>
                </div>

            )}
        </>
    )
}

export default Cards