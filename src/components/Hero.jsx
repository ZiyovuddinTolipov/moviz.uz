
const Hero = () => {
    return (
        <div className="max-w-[1400px] mx-auto w-full py-3 h-[600px] flex justify-center items-center relative">
            <h2 className="text-6xl text-white w-4/5 text-center font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, suscipit.
            </h2>
            <div className="absolute bottom-0">
                <div className="scroll-arrow" />
                <div className="scroll-arrow" />
                <div className="scroll-arrow" />
            </div>
        </div>
    )
}

export default Hero