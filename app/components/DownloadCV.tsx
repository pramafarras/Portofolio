

const Button = () => {
    return (
        <>
        <a href="/files/CV_Prama.pdf"
        download='CV'
        aria-label="downloadCV"
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-amber-400 hover:bg-amber-500 text-secondary font-bold py-2 px-4 border-b-4 border-blue-950 hover:border-blue-900 rounded-lg drop-shadow-md">              
        Download CV
        </a>
        </>
    )
}

export default Button