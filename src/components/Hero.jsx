import { motion } from "framer-motion";
import Navbar from "./Navbar";
const Hero = () => {
    const text = "Assalomu Alaykum ushbu saytda siz Moviz.Cg guruhining xizmatlari bilan tanishib chiqishingiz va bizning xizmatlarga buyurtma berishingiz mumkin.".split(" ");
    return (
        <section className="max-w-[1400px] mx-auto w-full flex flex-col justify-center items-center h-[90vh]" id="home">
            <h2 className="text-2xl md:text-4xl text-white w-4/5 text-center font-bold z-40">
                {text.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.45,
                            delay: i / 10,
                        }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}
            </h2>
            <div className="lines absolute">
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
        </section>
    )
}

export default Hero