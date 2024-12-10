import Image from "next/image"

const Tools = () => {
    return (
        <>
            <div className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-2 px-4 border hover:border-b-4 hover:border hover:border-slate-900 rounded mt-3 drop-shadow-md mb-10 w-28 h-32 transition-all ease-in-out duration-100 relative">
                <div className="h-full w-full flex flex-col justify-between pb-8 ">
                    <div className="w-full flex justify-center items-center">
                        <Image src='/Images/VSC.png' alt='VSC' width={100} height={300} loading="eager"></Image>
                    </div>
                    <h1 className="absolute bottom-2 inset-x-0 text-center px-2 text-[12px] leading-3">Visual Studio Code</h1>
                </div>
            </div>

            <div className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-2 px-4 border hover:border-b-4 hover:border hover:border-slate-900 rounded mt-3 drop-shadow-md mb-10 w-28 h-32 transition-all ease-in-out duration-100 relative">
                <div className="h-full w-full flex flex-col justify-between pb-8 ">
                    <div className="w-full flex justify-center items-center">
                        <Image src='/Images/Gitbash.png' alt='Gitbash' width={100} height={300} loading="eager"></Image>
                    </div>
                    <h1 className="absolute bottom-2 inset-x-0 text-center text-sm">Git Bash</h1>
                </div>
            </div>

            <div className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-2 px-4 border hover:border-b-4 hover:border hover:border-slate-900 rounded mt-3 drop-shadow-md mb-10 w-28 h-32 transition-all ease-in-out duration-100 relative">
                <div className="h-full w-full flex flex-col justify-between pb-8 ">
                    <div className="w-full flex justify-center items-center">
                        <Image src='/Images/Github.png' alt='Github' width={100} height={300} loading="eager" className="scale-150"></Image>
                    </div>
                    <h1 className="absolute bottom-2 inset-x-0 text-center text-sm">Github</h1>
                </div>
            </div>

            <div className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-2 px-4 border hover:border-b-4 hover:border hover:border-slate-900 rounded mt-3 drop-shadow-md mb-10 w-28 h-32 transition-all ease-in-out duration-100 relative">
                <div className="h-full w-full flex flex-col justify-between pb-8 ">
                    <div className="w-full flex justify-center items-center">
                        <Image src='/Images/Figma.png' alt='Figma' width={100} height={300} loading="eager"></Image>
                    </div>
                    <h1 className="absolute bottom-2 inset-x-0 text-center text-sm">Figma</h1>
                </div>
            </div>

            <div className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-2 px-4 border hover:border-b-4 hover:border hover:border-slate-900 rounded mt-3 drop-shadow-md mb-10 w-28 h-32 transition-all ease-in-out duration-100 relative">
                <div className="h-full w-full flex flex-col justify-between pb-8 ">
                    <div className="w-full flex justify-center items-center">
                        <Image src='/Images/Canva.png' alt='Canva' width={100} height={300} loading="eager"></Image>
                    </div>
                    <h1 className="absolute bottom-2 inset-x-0 text-center text-sm">Canva</h1>
                </div>
            </div>

            <div className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-2 px-4 border hover:border-b-4 hover:border hover:border-slate-900 rounded mt-3 drop-shadow-md mb-10 w-28 h-32 transition-all ease-in-out duration-100 relative">
                <div className="h-full w-full flex flex-col justify-between pb-8 ">
                    <div className="w-full flex justify-center items-center">
                        <Image src='/Images/Photoshop.png' alt='Photoshop' width={100} height={300} loading="eager"></Image>
                    </div>
                    <h1 className="absolute bottom-2 inset-x-0 text-center px-2 text-[12px] leading-3">Adobe Photoshop</h1>
                </div>
            </div>

            <div className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-2 px-4 border hover:border-b-4 hover:border hover:border-slate-900 rounded mt-3 drop-shadow-md mb-10 w-28 h-32 transition-all ease-in-out duration-100 relative">
                <div className="h-full w-full flex flex-col justify-between pb-8 ">
                    <div className="w-full flex justify-center items-center">
                        <Image src='/Images/Premiere_Pro.png' alt='Premiere_Pro' width={100} height={300} loading="eager"></Image>
                    </div>
                    <h1 className="absolute bottom-2 inset-x-0 text-center px-2 text-[12px] leading-3">Adobe Premiere Pro</h1>
                </div>
            </div>
        </>
    )
}

export default Tools