

const Button = () => {
    return (
        <button className="bg-amber-400 hover:bg-amber-500 text-secondary font-bold py-2 px-4 border-b-4 border-blue-950 hover:border-blue-900 rounded mt-3 drop-shadow-md mb-10">
        <a href="/files/CV_Prama.pdf"
                                    download='CV'
                                    target="_blank" 
                                    rel="noopener noreferrer">                       
                     Download CV</a>
        
        </button>
    )
}

export default Button