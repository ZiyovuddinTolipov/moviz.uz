import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { motion } from "framer-motion";
import moviz1 from '../assets/moviz1.jpg'
import video1 from '../assets/videos/video1.mp4'


const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoID, setVideoID] = useState();
    const videoRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const handlePlay = (index) => {
        console.log(`Video ${index + 1} is playing`);
        setIsPlaying(true);
        setVideoID(index + 1);

        // Boshqa videolarni pause qilish
        videoRefs.forEach((ref, i) => {
            if (i !== index && ref.current) {
                ref.current.pause();
            }
        });
    };

    const handlePause = (index) => {
        console.log(`Video ${index + 1} is paused`);
        setIsPlaying(false);
        setVideoID(null);
    };

    const handleVideoEnd = (index) => {
        console.log(`Video ${index + 1} has ended`);
        setIsPlaying(false);

        // Boshqa videolarni avtomatik ravishda boshlash
        const nextIndex = (index + 1) % 4;
        videoRefs[nextIndex].current.play();
        setVideoID(index + 1);
    };
    console.log(videoID);
    const text = "Lorem ipsum dolor sit amet, ".split(" ");
    const el = useRef();
    let elInner = gsap.utils.selector(el)

    useEffect(() => {
        gsap.fromTo(elInner('.box'),
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1, repeat: 0, yoyo: true, stagger: 1 })
    }, [])
    const styles = {
        videoBox: "w-1/2 flex items-center justify-center overflow-hidden w-full max-w-[300px] h-[380px]"
    }
    return (
        <section className='w-full' id='allproduct'>
            <main className='max-w-[1400px] mx-auto w-full pt-20'>
                <h1 className='text-3xl text-white w-4/5 text-left font-bold p-3 md:p-5'> {text.map((el, i) => (
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
                <div ref={el} className='flex gap-[4%] flex-row flex-wrap text-white text-xl font-semibold p-3 md:p-5'>
                    <div className='flex box w-1/2 justify-between basis-[48%] max-w-[50%] mt-[3rem] relative ' >
                        <div className={videoID==1 ? "gradient absolute" : "absolute"} />
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
                                ref={videoRefs[0]}
                                controls
                                onPlay={() => handlePlay(0)}
                                onPause={() => handlePause(0)}
                                onEnded={() => handleVideoEnd(0)}
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className='flex box w-1/2 justify-between basis-[48%] max-w-[50%] mt-[3rem]' >
                    <div className={videoID==2 ? "gradient absolute" : "absolute"} />
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
                                ref={videoRefs[1]}
                                controls
                                onPlay={() => handlePlay(1)}
                                onPause={() => handlePause(1)}
                                onEnded={() => handleVideoEnd(1)}
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className='flex box w-1/2 justify-between basis-[48%] max-w-[50%] mt-[3rem]' >
                    <div className={videoID==3 ? "gradient absolute" : "absolute"} />
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
                                ref={videoRefs[2]}
                                controls
                                onPlay={() => handlePlay(2)}
                                onPause={() => handlePause(2)}
                                onEnded={() => handleVideoEnd(2)}
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className='flex box w-1/2 justify-between basis-[48%] max-w-[50%] my-[3rem]' >
                    <div className={videoID==4 ? "gradient absolute" : "absolute"} />
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
                                ref={videoRefs[3]}
                                controls
                                onPlay={() => handlePlay(3)}
                                onPause={() => handlePause(3)}
                                onEnded={() => handleVideoEnd(3)}
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </main>

        </section >
    );
};

export default App;