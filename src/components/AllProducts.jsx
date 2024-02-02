import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { motion } from "framer-motion";
import moviz1 from '../assets/moviz1.jpg'
import video1 from '../assets/videos/video1.mp4'

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
        videoBox: "w-1/2 flex items-center justify-center overflow-hidden w-[200px] h-[380px]"
    }
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        console.log('Video is playing');
        setIsPlaying(true);
    };

    const handlePause = () => {
        console.log('Video is paused');
        setIsPlaying(false);
    };
    return (
        <section className='max-w-[1400px] mx-auto w-full mt-20' id='allproduct'>
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
                <div className='flex box w-1/2 justify-between basis-[48%] max-w-[50%] mt-[3rem] relative' >
                    <div className={isPlaying ? "gradient absolute" : "absolute"} />
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
                    <div className={`${styles.videoBox} relative`}>
                        <video
                            src={video1}
                            autoPlay
                            controls
                            className='object-cover rounded-xl z-50'
                            poster={moviz1}
                            onPlay={handlePlay}
                            onPause={handlePause}
                        >
                            <p>Error</p>
                        </video>
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
                        <video
                            src={video1}
                            autoPlay
                            controls
                            className='object-cover rounded-xl z-50'
                            poster={moviz1}
                        >
                            <p>Error</p>
                        </video>
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
                        <video
                            src={video1}
                            autoPlay
                            controls
                            className='object-cover rounded-xl z-50'
                            poster={moviz1}
                        >
                            <p>Error</p>
                        </video>
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
                    <div className={styles.videoBox}>
                        <video
                            src={video1}
                            autoPlay
                            controls
                            className='object-cover rounded-xl z-50'
                            poster={moviz1}
                            onPlay={handlePlay}
                            onPause={handlePause}
                        >
                            <p>Error</p>
                        </video>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default App;