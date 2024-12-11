'use client'
import dynamic from "next/dynamic";
import Image from "next/image";
import DownloadCV from "./components/DownloadCV";
import { Download } from "lucide-react";
import { useEffect, useRef } from "react";
import { Reveal } from "./components/utils/Reveal";
import ThemeToggle from "./components/ThemeSwitch";
import Contacts from "./components/Contact";
import Skills from "./components/Tech";
import Tools from "./components/Tools";
import Navbar from "./components/Navbar";
import Cards from "./components/Card";






export default function Home() {
    const homeRef = useRef<HTMLDivElement>(null)
    const aboutRef = useRef<HTMLDivElement>(null)
    const techStackRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)
    const educationRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    
  
  return (
    <>
      
    
    <div className="overflow-x-hidden">
    
            <ThemeToggle  />
            
      
      <Navbar refs={{homeRef,
                    aboutRef,
                    techStackRef,
                    experienceRef,
                    educationRef,
                    projectsRef,
                    contactRef}}></Navbar>
                    
                    
      <div className="mx-auto max-w-[1320px]">

      <Reveal>
      <section ref={homeRef} id="Home" className="lg:py-36 mt-36 ">
        <div className="container px-8 2xl:px-0 mx-auto">
          <div className="flex flex-wrap h-auto ">
            <div className="w-full text-wrap self-center px-4 lg:w-1/2">
              <h1 className="text-secondary font-bold text-4xl dark:text-primary">Prama Ramdhani Farras</h1>
              <h1 className="text-secondary font-bold text-2xl mt-3 dark:text-primary">Welcome!</h1>
              <p className="mt-3 font-medium leading-relaxed dark:text-white">I am a <span className="font-bold dark:text-white">fresh graduate</span> from BINUS University, Computer Science Major who is currently focusing on Web Development, especially Frontend Development. I have always been interested in everything related to design.</p>
                <div className="mt-6">
              <DownloadCV ></DownloadCV>
              </div>
            </div>
            <div className="w-full self-center mt-10 lg:mt-0 lg:w-1/2">
              <div className="lg:right-0 relative mt-0 hover:scale-110  transition-all ease-in-out duration-200 ">
                  <Image src='/Images/prama_web.webp' alt="Prama"
                  className="max-w-full max-h-full mx-auto aspect-square p-6 lg:p-4"
                  width={400}
                  height={400}
                  priority={true}
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 400px"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>


      <Reveal>
        <section ref={aboutRef} id="About" className="lg:mt-10 mt-0 lg:py-36 py-12">
          <div className="container px-8 2xl:px-0 mx-auto ">
            <div className="flex flex-wrap h-auto">
              <div className="w-0 h-0 lg:h-auto self-center lg:w-2/5">
                <div className="lg:right-0 relative lg:mt-0 mx-auto group">
                  <Image src='/Images/FotoGrad_crop.png' alt="PramaGradcrop"
                    className="absolute left-1/2 -translate-x-1/2 top-0 max-w-full mx-auto  lg:transition-all lg:ease-in-out lg:duration-200 lg:h-[500px] lg:w-auto lg:object-cover lg:object-[center_75%] opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-105 lg:rounded-sm lg:z-20" width={500} height={400} loading="lazy"></Image>
                  <Image src='/Images/FotoGrad.jpeg' alt="PramaGrad"
                    className=" max-w-full mx-auto lg:group-hover:grayscale lg:transition-all lg:ease-in-out lg:duration-200 h-[500px] lg:w-auto lg:object-cover lg:object-[center_75%] lg:group-hover:scale-105 lg:rounded-sm" width={500} height={400} loading="lazy"></Image>
                </div>
              </div>
              <div className="w-full text-wrap self-center px-4 lg:px-10 lg:w-3/5">
                <h1 className="w-full text-center font-bold text-4xl text-secondary dark:text-primary">About Me</h1>
                <p className="mt-5 leading-relaxed">I recently graduated from <span className="font-bold">BINUS University</span> with a degree in Computer Science. I am currently focusing on studying and interested in Frontend Development, especially for Web Development.</p>
                <p className="mt-3 leading-relaxed">
                I enjoy doing things related to design, such as interfaces. Also, I really love design and editing. I love to learn new things and always open to new opportunities. Most importantly, I am always ready to continue learning throughout my life.
                </p>
              </div>
            </div>
          </div>
        </section>
        </Reveal>


        <Reveal>
        <section ref={techStackRef} id="TechStack" className="py-36">
          <div className="container px-8 2xl:px-0 mx-auto">
            <div className="flex flex-wrap">
              <h1 className="w-full text-center font-bold text-4xl text-secondary dark:text-primary">Tech Stack</h1>
              <div className="w-full text-center mx-auto mt-20">
                <h1 className="font-bold text-xl text-secondary text-center w-full dark:text-primary">Language and Framework</h1>
                <div className="flex flex-wrap justify-center items-center content-center lg:gap-8 gap-4 gap-y-0 mt-3">
                  <Skills/>
                </div>
              </div>
              <div className="w-full text-center mx-auto mt-20">
                <h1 className="font-bold text-xl text-secondary text-center dark:text-primary">Tools</h1>
                <div className="flex flex-wrap justify-center items-center content-center lg:gap-8 gap-4 gap-y-0 mt-3">
                  <Tools/>
                </div>
              </div>
            </div>
          </div>
        </section>
        </Reveal>
        
        <Reveal>
        <section ref={experienceRef} id="Experience" className="py-36">
          <div className="container px-6 2xl:px-0 mx-auto">
            <h1 className="w-full text-start font-bold text-4xl text-secondary dark:text-primary">Experience</h1>
            <div className="relative mt-6">
              <div className="absolute left-0.5 h-full w-1 bg-secondary dark:bg-gray-200 "></div>
              <div className="space-y-10 py-10">
              <div className="relative ml-8">
                <div className="absolute -left-11 h-8 w-8 rounded-full bg-primary"></div>
                  <h1 className="w-full text-start font-semibold text-lg text-secondary dark:text-primary">January 2022 - January 2023</h1>
                  <h1 className="w-full text-start font-bold text-xl md:text-2xl text-secondary mt-4 dark:text-primary">HIMTI (Himpunan Mahasiswa Teknik Informatika) BINUS University</h1>
                  <h2 className="w-full text-start font-light text-xs md:text-md text-secondary dark:text-primary">Staff of Publication & Marketing</h2>
                  <p className="mt-4 text-sm md:text-md">Creating content to build chemistry between HIMTI members, creating news for the BINUS website, finding sponsors for event needs, and be documentarian by participating in two events, which are called HISHOT and TECHNO.</p>
              </div>
              <div className="relative ml-8">
                <div className="absolute -left-11 h-8 w-8 rounded-full bg-primary"></div>
                <h1 className="w-full text-start font-semibold text-lg text-secondary dark:text-primary">March 2023 - August 2024</h1>
                <h1 className="w-full text-start font-bold text-xl md:text-2xl text-secondary mt-4 dark:text-primary">BINUS University</h1>
                <div className="flex items-center justify-start gap-1 md:gap-2 ">
                  <h2 className="font-light text-xs md:text-md text-secondary dark:text-primary">Data Analytics Certified Specific Independent Study</h2>
                  <a href="/files/Sertifikat_SSI.pdf"
                                    download='sertifikatSSI'
                                    aria-label="downloadCertificate"
                                    target="_blank" 
                                    rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-1 rounded-xl bg-amber-400 hover:bg-amber-500 w-fit px-3 py-1 self-center text-center text-xs md:text-sm transition-all ease-in-out duration-100 border-b-4 text-secondary border-blue-950 hover:border-blue-900 dark:border-gray-300 dark:hover:border-gray-400">              
                     Certificate <Download size={16}></Download>
                     </a>
                </div>
                <p className="mt-4 text-sm md:text-md">Learning about Data Analytics Course and implemented it by clustering data using K-Means Clustering Algorithm with Worldwide Internet Users Dataset.</p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center md:text-sm text-xs hover:bg-slate-200 dark:bg-gray-300 dark:text-secondary dark:hover:bg-gray-100">
                  Python
                  </div>
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center md:text-sm text-xs hover:bg-slate-200 dark:bg-gray-300 dark:text-secondary dark:hover:bg-gray-100">
                  Data Analytics
                  </div>
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center md:text-sm text-xs hover:bg-slate-200 dark:bg-gray-300 dark:text-secondary dark:hover:bg-gray-100">
                  Machine Learning
                  </div>
                </div>
              </div>
              <div className="relative ml-8">
                <div className="absolute -left-11 h-8 w-8 rounded-full bg-primary"></div>
                <h1 className="w-full text-start font-semibold text-lg text-secondary dark:text-primary">September 2023 - February 2024</h1>
                <h1 className="w-full text-start font-bold text-xl md:text-2xl text-secondary mt-4 dark:text-primary">BINUS University x PTPN IV</h1>
                <h2 className="w-full text-start font-light text-xs md:text-md text-secondary dark:text-primary">Application Developer</h2>
                <p className="mt-4 text-sm md:text-lg">Collaborate with the development team to develop a tree counting application with the CNN Machine Learning Method Using PTPN IV Data.</p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center md:text-sm text-xs hover:bg-slate-200 dark:bg-gray-300 dark:text-secondary dark:hover:bg-gray-100">
                  Python
                  </div>
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center md:text-sm text-xs hover:bg-slate-200 dark:bg-gray-300 dark:text-secondary dark:hover:bg-gray-100">
                  Machine Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        </Reveal>


        <Reveal>
        <section ref={educationRef} id="Education" className="py-36">
          <div className="container px-8 2xl:px-0 mx-auto">
     
          <h1 className="w-full text-start font-bold text-4xl text-secondary dark:text-primary">Education</h1>
     
            <div className="relative mt-6">
            <div className="absolute left-0.5 w-1 h-full bg-secondary dark:bg-gray-200 "></div>
            <div className="space-y-10 py-10">
            <div className="relative ml-8">
              <div className="absolute -left-11 w-8 h-8 rounded-full bg-primary"></div>
                  <h1 className="w-full text-start font-semibold text-lg text-secondary dark:text-primary">2017 - 2020</h1>
                  <h1 className="w-full text-start font-bold text-2xl text-secondary mt-4 dark:text-primary">SMAN 12 Tangerang Selatan</h1>
                  <h2 className="w-full text-start font-light text-md text-secondary dark:text-white">Natural Science</h2>
              </div>
              <div className="relative ml-8">
                <div className="absolute -left-11 w-8 h-8 rounded-full bg-primary"></div>
                
                  <h1 className="w-full text-start font-semibold text-lg text-secondary dark:text-primary">2020 - 2024</h1>
                  <h1 className="w-full text-start font-bold text-2xl text-secondary mt-4 dark:text-primary">BINUS University</h1>
                  <h2 className="w-full text-start font-light text-md text-secondary dark:text-white">S1 Computer Science</h2>
                </div>
            </div>
            </div>
          </div>
        </section>
        </Reveal>


        <Reveal>
        <section ref={projectsRef} id="Projects" className="py-36">
          <div className="sm:container sm:px-4 2xl:px-0 m-0 sm:mx-auto w-screen sm:w-full">
            <div className="flex flex-col w-full justify-center items-center ">
              <h1 className="w-full font-bold text-4xl text-secondary text-center dark:text-primary">Portofolio</h1>
              <p className="mt-2 text-center">These are all projects that I have worked on</p>
            </div>
            <div className="sm:w-full w-screen sm:px-4 flex flex-wrap mt-2 flex-col justify-center self-center sm:mx-auto">
              <Cards/>
            </div>
          </div>
        </section>
        </Reveal>


        <Reveal>
        <section ref={contactRef} id="Contact" className="py-36 mb-20">
          <div className="container px-8 2xl:px-0 mx-auto">
            <div className="flex flex-wrap flex-col justify-center items-center text-center">
              <h1 className="w-full font-bold text-4xl text-secondary dark:text-primary">Get In Touch</h1>
              <div>
                <p className="mt-4">If you have any questions, feel free to contact me.</p>
                <p className="mt-6">pramafarras1@gmail.com</p>
                <div className="flex flex-wrap justify-center mt-4 gap-3">
                  <Contacts/>
                </div>
              </div>
            </div>
          </div>
        </section>
        </Reveal>
      </div>
    </div>
    </>
  );
}
