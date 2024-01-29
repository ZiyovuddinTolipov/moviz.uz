import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { motion } from "framer-motion";





const App = () => {
    const text = "Lorem ipsum dolor sit amet, ".split(" ");
    const el = useRef();
    let elInner = gsap.utils.selector(el)

    useEffect(() => {
        gsap.fromTo(elInner('.box'),
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 2, repeat: 0, yoyo: true, stagger: 1 })
    }, [])

    return (
        <main className='h-screen max-w-[1400px] mx-auto w-full ' id='allproduct'>
            <h1 className='text-3xl text-white w-4/5 text-left font-bold'>  {text.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.9,
                            delay: i / 10,
                        }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}</h1>
            <div ref={el} className='flex flex-col'>
                <div className='flex box' >
                    <div>
                        text
                    </div>
                    <div>
                        video
                    </div>
                </div>
                <div className='box'></div>
            </div>
        </main>
    );
};

export default App;