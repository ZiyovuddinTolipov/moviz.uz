import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { motion } from "framer-motion";
import moviz1 from '../assets/moviz1.jpg'

const App = () => {
    const text = "Lorem ipsum dolor sit amet, ".split(" ");
    const el = useRef();
    let elInner = gsap.utils.selector(el)

    useEffect(() => {
        gsap.fromTo(elInner('.box'),
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1, repeat: 0, yoyo: true, stagger: 1 })
    }, [])
    const styles = {
        videoBox: "w-1/2 flex items-center justify-center"
    }
    return (
        <section className='h-screen max-w-[1400px] mx-auto w-full mt-20' id='allproduct'>
            <h1 className='text-3xl text-white w-4/5 text-left font-bold'> {text.map((el, i) => (
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
            <div ref={el} className='flex gap-[4%] flex-row flex-wrap text-white text-xl font-semibold'>
                <div className='flex box w-1/2 justify-between basis-[48%] max-w-[50%] mt-[3rem]' >
                    <div className='w-1/2 flex flex-col gap-3 justify-between py-4 pl-4'>
                        <div>
                            <h3 className='text-white'>
                                Video Type : <span>SMD post animation</span>
                            </h3>
                            <h3 className='text-white'>
                                Video Type : <span>SMD post animation</span>
                            </h3>
                            <h3 className='text-white'>
                                Video Type : <span>SMD post animation</span>
                            </h3>
                            <h3 className='text-white'>
                                Video Type : <span>SMD post animation</span>
                            </h3>
                        </div>
                        <div>
                            <button>49$</button>
                        </div>
                    </div>
                    <div className={styles.videoBox}>
                        <img src={moviz1} alt="img" className='h-[300px] rounded-xl' />
                    </div>
                </div>
                <div className='flex box w-1/2 justify-between basis-[48%] max-w-[50%] mt-[3rem]' >
                    <div className='w-1/2 flex flex-col gap-3 justify-center'>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3>

                        </h3>
                    </div>
                    <div className={styles.videoBox}>
                        <img src={moviz1} alt="img" className='h-[300px] rounded-xl' />
                    </div>
                </div>
                <div className='flex box w-1/2 justify-between basis-[48%] max-w-[50%] mt-[3rem]' >
                    <div className='w-1/2 flex flex-col gap-3 justify-center'>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3>

                        </h3>
                    </div>
                    <div className={styles.videoBox}>
                        <img src={moviz1} alt="img" className='h-[300px] rounded-xl' />
                    </div>
                </div>
                <div className='flex box w-1/2 justify-between basis-[48%] max-w-[50%] my-[3rem]' >
                    <div className='w-1/2 flex flex-col gap-3 justify-center'>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3 className='text-white'>
                            Video Type : <span>SMD post animation</span>
                        </h3>
                        <h3>

                        </h3>
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                        <img src={moviz1} alt="img" className='h-[300px] rounded-xl' />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default App;