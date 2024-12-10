import Image from "next/image"
import Link from "next/link"


const Contacts = () => {
    return (
        <>
            <button className="rounded-full bg-secondary w-16 h-auto hover:bg-blue-900 hover:opacity-70 transition-all ease-in-out duration-100">
                <div className="flex justify-center items-center">
                    <Link href="https://github.com/pramafarras/"
                    aria-label="githublink"
                                    target="_blank" 
                                    rel="noopener noreferrer">                       
                    <Image src='/Images/Github.png' alt="Github" width={100} height={300} className="self-center scale-100 invert" loading="eager"></Image>
                    </Link>
                </div>
            </button>
            <button className="rounded-full bg-secondary w-16 h-auto hover:bg-blue-900 hover:opacity-70 transition-all ease-in-out duration-100">
                <div className="flex justify-center items-center">
                    <Link href="https://linkedin.com/in/prama-ramdhani-farras"
                    aria-label="linkedinlink"
                                    target="_blank" 
                                    rel="noopener noreferrer">                       
                    <Image src='/Images/Linkedin.png' alt="Linkedin" width={100} height={300} className="self-center scale-75 invert" loading="eager"></Image>
                    </Link>
                </div>
                </button>
            <button className="rounded-full bg-secondary w-16 h-auto hover:bg-blue-900 hover:opacity-70 transition-all ease-in-out duration-100">
                <div className="flex justify-center items-center">
                    <Link href="https://wa.me/+6282112654964"
                    aria-label="whatsapplink"
                                    target="_blank" 
                                    rel="noopener noreferrer">                       
                    <Image src='/Images/Whatsapp.png' alt="Whatsapp" width={100} height={300} className="self-center w-10 h-auto brightness-0 invert" loading="eager"></Image>
                    </Link>
                </div>
            </button>
        </>
    )
}

export default Contacts