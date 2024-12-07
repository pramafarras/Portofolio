'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import DownloadCV from "./components/DownloadCV";
import Skills from "./components/Tech";
import Tools from "./components/Tools";
import Contacts from "./components/Contact";
import Cards from "./components/Card";
import { Download } from "lucide-react";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* <Image src='bg_abstract'></Image> */}
      <Navbar/>
      <div className="mx-auto w-full max-w-[1320px]">
      <section id="Home" className="pt-36">
        <div className="container px-4 2xl:px-0">
          <div className="flex flex-wrap h-auto ">
            <div className="w-full text-wrap self-center px-4 lg:w-1/2">
              <h3 className="text-secondary font-bold text-4xl">Prama Ramdhani Farras</h3>
              <h1 className="text-secondary font-bold text-2xl mt-3">Welcome!</h1>
              <p className="mt-3 font-medium leading-relaxed">I am a <span className="font-bold">fresh graduate</span> from BINUS University, Computer Science Major who is currently focusing on Web Development, especially Frontend Development. I have always been interested in everything related to design.</p>
              <DownloadCV></DownloadCV>
            </div>
            <div className="w-full self-center lg:w-1/2">
              <div className="lg:right-0 relative mt-10 lg:mt-0">
                  <Image src='/Foto_Transparan_2.png' alt="Prama"
                  className="max-w-full mx-auto h-[510px] object-cover object-[center_75%]" width={500} height={400} priority ></Image>
              <span className="absolute top-20 bottom-10 left-20 -z-10 translate-y-1">
                <svg width="500" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill='#f59e0b' d="M51.8,-57.5C62.2,-53,62.4,-32,63,-13.3C63.6,5.3,64.8,21.7,58.5,34.9C52.2,48.1,38.5,58.1,25.2,58.1C12,58.1,-0.9,47.9,-18.9,44.6C-36.8,41.2,-59.9,44.5,-70.6,35.9C-81.3,27.3,-79.7,6.8,-71.9,-8.3C-64,-23.4,-49.9,-33,-36.9,-37.1C-23.9,-41.1,-11.9,-39.6,4.4,-44.8C20.7,-50.1,41.4,-62.1,51.8,-57.5Z" transform="translate(100 100) scale(1.5)" />
                </svg>
              </span>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section id="About" className="py-36">
          <div className="container px-4 2xl:px-0">
            <div className="flex flex-wrap h-auto">
              <div className="w-full self-center lg:w-2/5">
                <div className="lg:right-0 relative mt-10 lg:mt-0 mx-auto">
                    <Image src='/Foto_Transparan_2.png' alt="Prama"
                    className="max-w-full mx-auto h-[510px] object-cover object-[center_75%]" width={500} height={400}></Image>
                </div>
              </div>
              <div className="w-full text-wrap self-center px-5 lg:w-3/5">
                <h1 className="w-full text-center font-bold text-4xl text-secondary">About Me</h1>
                <p className="mt-5">I recently graduated from <span className="font-bold">BINUS University</span> with a degree in Computer Science. I am currently focusing on studying and interested in Frontend Development, especially for Web Development.</p>
                <p className="mt-3">
                I enjoy doing things related to design, such as interfaces. Also, I really love design and editing. I love to learn new things and always open to new opportunities. Most importantly, I am always ready to continue learning throughout my life.
                </p>
              </div>
            </div>
          </div>
          
        </section>

        <section id="Skills" className="py-36">
          <div className="container px-4 2xl:px-0">
            <div className="flex flex-wrap">
              <h1 className="w-full text-center font-bold text-4xl text-secondary">Skills</h1>
              <div className="w-full text-center mx-auto mt-20">
                <h1 className="font-bold text-xl text-secondary text-center">Language and Framework</h1>
                <div className="flex flex-wrap justify-center items-center content-center gap-8 gap-y-0 mt-3">
                  <Skills/>
                </div>
              </div>
              <div className="w-full text-center mx-auto mt-20">
                <h1 className="font-bold text-xl text-secondary text-center">Tools</h1>
                <div className="flex flex-wrap justify-center items-center content-center gap-8 gap-y-0 mt-3">
                  <Tools/>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="Experience" className="py-36">
          <div className="container px-6 2xl:px-0">
            <h1 className="w-full text-start font-bold text-4xl text-secondary">Experience</h1>
            
            <div className="relative mt-6">
              <div className="absolute left-0.5 h-full w-1 bg-secondary "></div>
              <div className="space-y-10 py-10">

                    
              <div className="relative ml-8">
                <div className="absolute -left-11 h-8 w-8 rounded-full bg-primary"></div>
                  <h1 className="w-full text-start font-semibold text-lg text-secondary">January 2022 - January 2023</h1>
                  <h1 className="w-full text-start font-bold text-2xl text-secondary mt-4">HIMTI (Himpunan Mahasiswa Teknik Informatika) BINUS University</h1>
                  <h2 className="w-full text-start font-light text-md text-secondary">Staff of Publication & Marketing</h2>
                  <p className="mt-4 text-lg">Creating content to build chemistry between HIMTI members, creating news for the BINUS website, finding sponsors for event needs, and be documentarian by participating in two events, which are called HISHOT and TECHNO.</p>
              </div>

              <div className="relative ml-8">
                <div className="absolute -left-11 h-8 w-8 rounded-full bg-primary"></div>
                <h1 className="w-full text-start font-semibold text-lg text-secondary">March 2023 - August 2024</h1>
                <h1 className="w-full text-start font-bold text-2xl text-secondary mt-4">BINUS University</h1>
                <div className="flex items-center justify-start gap-2">
                  <h2 className="font-light text-md text-secondary">Data Analytics Certified Specific Independent Study</h2>
                  <button className="flex flex-row items-center justify-center gap-1 rounded-xl bg-amber-500 w-fit px-3 py-1 self-center text-center text-sm hover:bg-amber-400 transition-all ease-in-out duration-100 border-b-4 border-blue-950 hover:border-blue-900">
                    <a className="flex gap-2 items-center " href="/files/Sertifikat_SSI.pdf"
                                    download='sertifikatSSI'
                                    target="_blank" 
                                    rel="noopener noreferrer">                       
                     Certificate <Download size={16}></Download></a></button>
                </div>
                <p className="mt-4 text-lg">Learning about Data Analytics Course and implemented it by clustering data using K-Means Clustering Algorithm with Worldwide Internet Users Dataset.</p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-200">
                  Python
                  </div>
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-200">
                  Data Analytics
                  </div>
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-200">
                  Machine Learning
                  </div>
                </div>
              </div>

              <div className="relative ml-8">
                <div className="absolute -left-11 h-8 w-8 rounded-full bg-primary"></div>
                <h1 className="w-full text-start font-semibold text-lg text-secondary">September 2023 - February 2024</h1>
                <h1 className="w-full text-start font-bold text-2xl text-secondary mt-4">BINUS University x PTPN IV</h1>
                <h2 className="w-full text-start font-light text-md text-secondary">Application Developer</h2>
                <p className="mt-4 text-lg">Collaborate with the development team to develop a tree counting application with the CNN Machine Learning Method Using PTPN IV Data.</p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-200">
                  Python
                  </div>
                  <div className="rounded-full bg-slate-300 w-fit mt-2 px-3 py-1 self-center text-center text-sm hover:bg-slate-200">
                  Machine Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section id="Education" className="py-36">
          <div className="container px-6 2xl:px-0">
            <div className="flex flex-col">
              <h1 className="w-full text-start font-bold text-4xl text-secondary">Education</h1>
                <div className="mt-10">
                  <h1 className="w-full text-start font-semibold text-lg text-secondary">2017 - 2020</h1>
                  <h1 className="w-full text-start font-bold text-2xl text-secondary mt-4">SMAN 12 Tangerang Selatan</h1>
                  <h2 className="w-full text-start font-light text-md text-secondary">Natural Science</h2>
                </div>
                <div className="mt-10">
                  <h1 className="w-full text-start font-semibold text-lg text-secondary">2020 - 2024</h1>
                  <h1 className="w-full text-start font-bold text-2xl text-secondary mt-4">BINUS University</h1>
                  <h2 className="w-full text-start font-light text-md text-secondary">S1 Computer Science</h2>
                </div>
            </div>
          </div>
        </section>

        <section id="Projects" className="py-36">
          <div className="container px-4 2xl:px-0">
            <div className="flex flex-col w-full justify-center items-center">
              <h1 className="w-full font-bold text-4xl text-secondary text-center">Portofolio</h1>
              <p className="mt-2">These are all projects that I have worked on</p>
            </div>
            <div className="w-full px-4 flex flex-wrap flex-col justify-center">
              <Cards/>
            </div>
          </div>
        </section>

        <section id="Contact" className="py-36">
          <div className="container px-4 2xl:px-0">
            <div className="flex flex-wrap flex-col justify-center items-center text-center">
              <h1 className="w-full font-bold text-4xl text-secondary">Get In Touch</h1>
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
    
    </div>
    </div>
  );
}
