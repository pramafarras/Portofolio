'use client'

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface NavbarProps {
    refs: {
        homeRef: React.RefObject<HTMLDivElement>
        aboutRef: React.RefObject<HTMLDivElement>
        techStackRef: React.RefObject<HTMLDivElement>
        experienceRef: React.RefObject<HTMLDivElement>
        educationRef: React.RefObject<HTMLDivElement>
        projectsRef: React.RefObject<HTMLDivElement>
        contactRef: React.RefObject<HTMLDivElement>
    }
}

const Navbar = ({refs}: NavbarProps) => {

    const linkRef = useRef(null)
    const goTo = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth'
            });
            hideMenu();
        }
    }


    const handleScroll = () => {
        window.onscroll = () => {
            const header = document.querySelector('#header') as HTMLElement

        const fixedNav = header.offsetTop;
  
        if (window.scrollY > fixedNav) {
          header.classList.add('navbar-fixed');
        } else {
          header.classList.remove('navbar-fixed');
        }
        }
        
      };

      const hideMenu = () => {
        const dot = document.querySelector('#dot');
        const navMenu = document.querySelector('#nav-menu');
        
        if (dot && navMenu) {
            dot.classList.remove('dot-active');
            navMenu.classList.add('hidden');
        }
    }

      const initDot = () => {
        const dot = document.querySelector('#dot')
        const navMenu = document.querySelector('#nav-menu')
        
        if(dot){
        dot.addEventListener('click', () => {
            dot.classList.toggle('dot-active')
            navMenu?.classList.toggle('hidden')
        })  
    }
    }
 
    useEffect(() =>{
        initDot();
        handleScroll();
        return () => {
            window.onscroll = null;
            const dot = document.querySelector('#dot');
            if (dot) {
                dot.removeEventListener('click', () => {});
            }
        };
    }, []);
    
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent( scrollY, "change", (latest) =>{
        const previous = scrollY.getPrevious() ?? 0
        if (latest > previous && latest > 150){
            setHidden(true)
            hideMenu();
        } else{
            setHidden(false)
        }
    } )

    return (
        <motion.div 
        variants={{
            visible: {y: 0},
            hidden: {y: "-100%"},
        }}
        id="header" 
            className='bg-transparent fixed top-0 left-0 flex w-full max-w-full border-b shadow-md py-3 z-50'
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        
        >
        
            <div className="container mx-auto">
                <div className="flex w-full items-center justify-between relative">
                    <div className="px-4 py-2 flex cursor-pointer" onClick={() => goTo(refs.homeRef)}>
                        <h1 className="font-bold text-lg text-primary">Prama Ramdhani Farras</h1>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="dot" name='dot' type='button' className="block absolute right-4 lg:hidden z-50">
                        <span className="w-[30px] h-[2px] my-2 block  bg-black origin-top-left transition duration-300 ease-in-out"></span>
                        <span className="w-[30px] h-[2px] my-2 block  bg-black transition duration-300 ease-in-out"></span>
                        <span className="w-[30px] h-[2px] my-2 block  bg-black origin-bottom-left transition duration-300 ease-in-out"></span>
                        </button>

                    <nav id="nav-menu" className="hidden absolute shadow-lg border lg:border-0 rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none z-40 bg-white ">
                        <ul className="block gap-4 lg:flex">
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0 text-base text-black py-2 flex cursor-pointer" onClick={() => goTo(refs.homeRef)}>
                            <div className="inline-block">
                                🚀Home <div className="block w-0 lg:group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0 text-base text-black py-2 flex cursor-pointer" onClick={() => goTo(refs.aboutRef)}>
                            <div className="inline-block">
                                🧑About <div className="block w-0 lg:group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0 text-base text-black py-2 flex cursor-pointer" onClick={() => goTo(refs.techStackRef)}>
                            <div className="inline-block">
                                💡Skills <div className="block w-0 lg:group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0 text-base text-black py-2 flex cursor-pointer" onClick={() => goTo(refs.experienceRef)}>
                            <div className="inline-block">
                                💼Experience <div className="block w-0 lg:group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0 text-base text-black py-2 flex cursor-pointer" onClick={() => goTo(refs.educationRef)}>
                            <div className="inline-block">
                                🎓Education <div className="block w-0 lg:group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0 text-base text-black py-2 flex cursor-pointer" onClick={() => goTo(refs.projectsRef)}>
                            <div className="inline-block">
                                🛠️Projects <div className="block w-0 lg:group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0 text-base text-black py-2 flex cursor-pointer" onClick={() => goTo(refs.contactRef)}>
                            <div className="inline-block">
                                💬Contact <div className="block w-0 lg:group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
        
        </motion.div>
    )
}

export default Navbar