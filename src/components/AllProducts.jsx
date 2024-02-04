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
        useRef(null),
        useRef(null),
    ];
    const LinkButton = () => {
        return (
            <a href="#">
                <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    <svg className='me-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 48 48">
                        <path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z" /><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1\tc0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z" /><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z" /><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1\tC30,18.7,30.1,18.4,29.9,18.2z" />
                    </svg>
                    Buyurtma
                </button>
            </a>
        )
    }

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
        videoBox: "flex items-center justify-center h-[500px] md:h-[380px]",
        infoCard :'flex flex-col-reverse md:flex-row box   justify-between basis-auto md:basis-[48%] mt-[3rem] relative gap-2',
        video:'rounded-xl max-w-[300px]',
        cardInfo:'w-full md:w-1/2 text-xs sm:text-base flex flex-col gap-2 sm:gap-1 justify-between py-4 pl-2'
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
                <div ref={el} className='flex gap-[4%] flex-col items-center md:flex-row flex-wrap text-white text-xl font-semibold p-3 md:p-5'>
                    <div className={styles.infoCard} >
                        <div className={videoID == 1 ? "gradient absolute" : "absolute"} />
                        <div className={styles.cardInfo}>
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
                            <div className='w-100 flex justify-around'>
                                <button>49$</button>
                                <LinkButton />
                            </div>
                        </div>
                        <div className={`${styles.videoBox}`}>
                            <video
                                ref={videoRefs[0]}
                                controls
                                onPlay={() => handlePlay(0)}
                                onPause={() => handlePause(0)}
                                onEnded={() => handleVideoEnd(0)}
                                className={styles.video}
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className={videoID == 2 ? "gradient absolute" : "absolute"} />
                        <div className={styles.cardInfo}>
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
                            <div className='w-100 flex justify-around'>
                                <button>49$</button>
                                <LinkButton />
                            </div>
                        </div>
                        <div className={styles.videoBox}>
                            <video
                                ref={videoRefs[1]}
                                controls
                                onPlay={() => handlePlay(1)}
                                onPause={() => handlePause(1)}
                                onEnded={() => handleVideoEnd(1)}
                                className={styles.video}
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className={videoID == 3 ? "gradient absolute" : "absolute"} />
                        <div className={styles.cardInfo}>
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
                            <div className='w-100 flex justify-around'>
                                <button>49$</button>
                                <LinkButton />
                            </div>
                        </div>
                        <div className={styles.videoBox}>
                            <video
                                ref={videoRefs[2]}
                                controls
                                onPlay={() => handlePlay(2)}
                                onPause={() => handlePause(2)}
                                onEnded={() => handleVideoEnd(2)}
                                className={styles.video}
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className={videoID == 4 ? "gradient absolute" : "absolute"} />
                        <div className={styles.cardInfo}>
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
                            <div className='w-100 flex justify-around'>
                                <button>49$</button>
                                <LinkButton />
                            </div>
                        </div>
                        <div className={styles.videoBox}>
                            <video
                                ref={videoRefs[3]}
                                controls
                                onPlay={() => handlePlay(3)}
                                onPause={() => handlePause(3)}
                                onEnded={() => handleVideoEnd(3)}
                                className={styles.video}
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className={videoID == 5 ? "gradient absolute" : "absolute"} />
                        <div className={styles.cardInfo}>
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
                            <div className='w-100 flex justify-around'>
                                <button>49$</button>
                                <LinkButton />
                            </div>
                        </div>
                        <div className={styles.videoBox}>
                            <video
                                ref={videoRefs[4]}
                                controls
                                onPlay={() => handlePlay(4)}
                                onPause={() => handlePause(4)}
                                onEnded={() => handleVideoEnd(4)}
                                className={styles.video}
                            >
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className={videoID == 6 ? "gradient absolute" : "absolute"} />
                        <div className={styles.cardInfo}>
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
                            <div className='w-100 flex justify-around'>
                                <button>49$</button>
                                <LinkButton />
                            </div>
                        </div>
                        <div className={styles.videoBox}>
                            <video
                                ref={videoRefs[5]}
                                controls
                                onPlay={() => handlePlay(5)}
                                onPause={() => handlePause(5)}
                                onEnded={() => handleVideoEnd(5)}
                                className={styles.video}
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