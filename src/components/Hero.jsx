import { motion } from "framer-motion";

const Hero = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, eaque!".split(" ");
    return (
        <section className="max-w-[1400px] mx-auto w-full py-3 flex justify-center items-center relative h-[90vh]">
            <h2 className="text-6xl text-white w-4/5 text-center font-bold">
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
            <div className="absolute bottom-0">
                <div className="scroll-arrow" />
                <div className="scroll-arrow" />
                <div className="scroll-arrow" />
            </div>
        </section>
    )
}

export default Hero