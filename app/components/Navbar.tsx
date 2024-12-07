'use client'

import Link from "next/link"
import { useEffect } from "react"


const Navbar = () => {

    const initDot = async() => {
        const dot = document.querySelector('#dot')
        const navMenu = document.querySelector('#nav-menu')
        
        if(dot){
        dot.addEventListener('click', () => {
            dot.classList.toggle('dot-active')
            navMenu.classList.toggle('hidden')
        })  
    }
    }

    const handleScroll = () => {
        window.onscroll = function() {
            const header = document.querySelector('#header') as HTMLElement

        const fixedNav = header.offsetTop;
  
        if (window.scrollY > fixedNav) {
          header.classList.add('navbar-fixed');
        } else {
          header.classList.remove('navbar-fixed');
        }
        }
        
      };
 
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
    

    

    // useEffect(() => {
    //     dot()
    // }, [])

    return (
        <div id="header" className='bg-transparent absolute top-0 left-0 flex w-full max-w-full border-b shadow-md py-3'>
            <div className="container mx-auto">
                <div className="flex w-full items-center justify-between relative">
                    <div className="px-4">
                        <Link href="#Home" className="font-bold text-lg text-primary ">Prama Ramdhani Farras</Link>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="dot" name='dot' type='button' className="block absolute right-4 lg:hidden">
                        <span className="w-[30px] h-[2px] my-2 block  bg-black origin-top-left transition duration-300 ease-in-out"></span>
                        <span className="w-[30px] h-[2px] my-2 block  bg-black transition duration-300 ease-in-out"></span>
                        <span className="w-[30px] h-[2px] my-2 block  bg-black origin-bottom-left transition duration-300 ease-in-out"></span>
                        </button>

                    <nav id="nav-menu" className="hidden absolute shadow-lg border lg:border-0 rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none z-50 bg-white">
                        <ul className="block gap-4 lg:flex">
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0"><Link href="#Home" className="text-base text-black py-2 flex">
                            <div className="inline-block">
                                🚀Home <div className="block w-0 group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </Link></li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0"><Link href="#About" className="text-base text-black py-2 flex">
                            <div className="inline-block">
                                🧑About <div className="block w-0 group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </Link></li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0"><Link href="#Skills" className="text-base text-black py-2 flex">
                            <div className="inline-block">
                                💡Skills <div className="block w-0 group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </Link></li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0"><Link href="#Experience" className="text-base text-black py-2 flex">
                            <div className="inline-block">
                                💼Experience <div className="block w-0 group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </Link></li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0"><Link href="#Education" className="text-base text-black py-2 flex">
                            <div className="inline-block">
                                🎓Education <div className="block w-0 group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </Link></li>
                            <li className="group border-b lg:border-b-0 pl-4 lg:pl-0"><Link href="#Projects" className="text-base text-black py-2 flex">
                            <div className="inline-block">
                                🛠️Projects <div className="block w-0 group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </Link></li>
                            <li className="group pl-4 lg:pl-0"><Link href="#Contact" className="text-base text-black py-2 flex">
                            <div className="inline-block">
                                💬Contact <div className="block w-0 group-hover:w-full transition-all ease-in-out duration-200 mt-0.5 h-[2px] bg-primary"></div>
                            </div>
                            </Link></li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar