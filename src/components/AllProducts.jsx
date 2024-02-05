import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import moviz1 from '../assets/moviz1.jpg'
import video1 from '../assets/videos/video1.mp4'


const App = () => {
    // eslint-disable-next-line no-unused-vars
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
            <a href="#" className="raise p-2 px-4 capitalize flex items-center linkbtn">
                <svg className='me-2 w-6 h-6' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                    <path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z" /><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1\tc0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z" /><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z" /><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1\tC30,18.7,30.1,18.4,29.9,18.2z" />
                </svg>
                <span>buyurtma berish</span>
            </a>
        )
    }

    const handlePlay = (index) => {
        // console.log(`Video ${index + 1} is playing`);
        setIsPlaying(true);
        setVideoID(index + 1);

        // Boshqa videolarni pause qilish
        videoRefs.forEach((ref, i) => {
            if (i !== index && ref.current) {
                ref.current.pause();
            }
        });
    };

    const handlePause = () => {
        // console.log(`Video ${index + 1} is paused`);
        setIsPlaying(false);
        setVideoID(null);
    };

    const handleVideoEnd = (index) => {
        // console.log(`Video ${index + 1} has ended`);
        setIsPlaying(false);

        // Boshqa videolarni avtomatik ravishda boshlash
        const nextIndex = (index + 1) % 6;
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
            { opacity: 1, scale: 1, duration: 0, repeat: 0, yoyo: true, stagger: 1 })
    }, [])
    const styles = {
        videoBox: "flex items-center justify-center md:items-end h-[400px] md:h-[400px] md:h-[380px]",
        infoCard: 'flex flex-col-reverse md:flex-row box bg-black/60 backdrop-blur-md justify-between basis-auto md:basis-[100%] mt-[3rem] relative gap-2',
        video: 'rounded-xl max-w-[300px] h-auto z-20',
        cardInfo: 'w-full md:w-1/2 text-base  flex flex-col gap-2 sm:gap-1 justify-between py-4 p-2 text-justify',
        infoBtnBox: 'w-100 flex justify-end items-center mt-2'
    }
    return (
        <section className='w-full border-t-2 border-t-slate-300' id='allproduct'>
            <main className='max-w-[1400px]  pt-20 w-[95%] mx-auto'>
                <h1 className='text-2xl md:text-3xl text-center  text-white w-4/5 md:text-left font-bold p-3 md:p-5'> {text.map((el, i) => (
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
                        <div className='w-full md:w-1/2 lg:w-2/3 text-base md:text-xl  flex flex-col gap-2 sm:gap-1 justify-between py-4 p-2 text-left'>
                            <div className='flex flex-col gap-3'>
                                <div className='border-b-2 border-b-slate-800 py-2'>
                                    <h3>
                                        <span className='font-[800]'>#Video editing Type 1</span>-Bu faqat mijoz tomonidan beriladigan videolarni montaj qilib berish.
                                    </h3>
                                </div>
                                <ul className='flex gap-2 text-base flex-col md:flex-row'>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>Video haqida</li>
                                            <li>- 90 soniyagacha </li>
                                            <li>- Format 4K</li>
                                        </ul>
                                    </li>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>
                                                Narxlar
                                            </li>
                                            <li>
                                                - <span className='text-red-500'>1 ta video 29.9$ </span>
                                            </li>
                                            <li>
                                                - <span className='text-green-500'>10 ta video 24.9$ dan </span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-[100%] flex justify-center md:justify-start items-center mt-2'>
                                <LinkButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/3 flex items-center justify-center md:items-end h-[400px] md:h-[400px]'>
                            <div className={videoID == 1 ? "gradient absolute" : "absolute"} />
                            <video
                                ref={videoRefs[0]}
                                controls
                                onPlay={() => handlePlay(0)}
                                onPause={() => handlePause(0)}
                                onEnded={() => handleVideoEnd(0)}
                                className={styles.video}
                                poster='https://moviz-files.netlify.app/3.png'
                            >

                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className='w-full md:w-1/2 lg:w-2/3 text-base md:text-xl  flex flex-col gap-2 sm:gap-1 justify-between py-4 p-2 text-left'>
                            <div className='flex flex-col gap-3'>
                                <div className='border-b-2 border-b-slate-800 py-2'>
                                    <h3>
                                        <span className='font-[800]'>#Video editing Type 2</span>- Bu paketimizda mijoz bizga taqdim etilgan videolarga xar xil effektlar va turli xil 3D matnlar joylash xizmati kiradi.
                                    </h3>
                                </div>
                                <ul className='flex gap-2 text-base flex-col md:flex-row'>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>Video haqida</li>
                                            <li>- 60 soniyagacha </li>
                                            <li>- Format 4K</li>
                                        </ul>
                                    </li>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>
                                                Narxlar
                                            </li>
                                            <li>
                                                - <span className='text-red-500'>1 ta video 49.9$ </span>
                                            </li>
                                            <li>
                                                - <span className='text-green-500'>10 ta video 44.9$ dan </span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-[100%] flex justify-center md:justify-start items-center mt-2'>
                                <LinkButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/3 flex items-center justify-center md:items-end h-[400px] md:h-[400px]'>
                            <div className={videoID == 2 ? "gradient absolute" : "absolute"} />
                            <video
                                ref={videoRefs[1]}
                                controls
                                onPlay={() => handlePlay(1)}
                                onPause={() => handlePause(1)}
                                onEnded={() => handleVideoEnd(1)}
                                className={styles.video}
                                poster='https://moviz-files.netlify.app/2.png'
                            >

                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className='w-full md:w-1/2 lg:w-2/3 text-base md:text-xl  flex flex-col gap-2 sm:gap-1 justify-between py-4 p-2 text-left'>
                            <div className='flex flex-col gap-3'>
                                <div className='border-b-2 border-b-slate-800 py-2'>
                                    <h3>
                                        <span className='font-[800]'>#VideoMaker Type 1</span> - Ushbu paketimizda siz o‘zingizning biror mahsulotingizni comericial reklama qildirishingiz mumkin. Bu tarifimizga ham videoga olish va montaj qilish kiradi. Ishlatiladigan texnikalar Samera Sony a7 III mahsulotdan kelib chiqib turli xil obyektiv va led chiroqlar ishlatiladi.
                                    </h3>
                                </div>
                                <ul className='flex gap-2 text-base flex-col md:flex-row'>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>Video haqida</li>
                                            <li>- 60 soniyagacha </li>
                                            <li>- Format 4K</li>
                                            <li>- Camera Sony a7 III</li>
                                        </ul>
                                    </li>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>
                                                Narxlar
                                            </li>
                                            <li>
                                                - <span className='text-red-500'>1 ta video 69.9$ </span>
                                            </li>
                                            <li>
                                                - <span className='text-green-500'>10 ta video 59.9$ dan </span>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-[100%] flex justify-center md:justify-start items-center mt-2'>
                                <LinkButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/3 flex items-center justify-center md:items-end h-[400px] md:h-[400px]'>
                            <div className={videoID == 3 ? "gradient absolute" : "absolute"} />
                            <video
                                ref={videoRefs[2]}
                                controls
                                onPlay={() => handlePlay(2)}
                                onPause={() => handlePause(2)}
                                onEnded={() => handleVideoEnd(2)}
                                className={styles.video}
                                poster='https://moviz-files.netlify.app/4.png'
                            >

                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className='w-full md:w-1/2 lg:w-2/3 text-base md:text-xl  flex flex-col gap-2 sm:gap-1 justify-between py-4 p-2 text-left'>
                            <div className='flex flex-col gap-3'>
                                <div className='border-b-2 border-b-slate-800 py-2'>
                                    <h3>
                                        <span className='font-[800]'>#VideoMaker Type 2</span>- Ushbu paketimizda siz o‘zingizning restoran,
                                        kiyim do‘konlar,avtosalonlarni reklamani rolik  qildirishingiz mumkin. Bu tarifimizga ham videoga olish
                                        va montaj qilish kiradi. Ishlatiladigan texnikalar Camera Sony a7 III sizning talabingizdan kelib chiqib
                                        turli xil obyektiv va led chiroqlar ishlatiladi
                                    </h3>
                                </div>
                                <ul className='flex gap-2 text-base flex-col md:flex-row'>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>Video haqida</li>
                                            <li>- 90 soniyagacha </li>
                                            <li>- Format 4K</li>
                                            <li>- Camera Sony a7 III</li>
                                        </ul>
                                    </li>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>
                                                Narxlar
                                            </li>
                                            <li>
                                                - <span className='text-red-500'>1 ta video 99.9$ </span>
                                            </li>
                                            <li>
                                                - <span className='text-green-500'>10 ta video 69.9$ dan </span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-[100%] flex justify-center md:justify-start items-center mt-2'>
                                <LinkButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/3 flex items-center justify-center md:items-end h-[400px] md:h-[400px]'>
                            <div className={videoID == 4 ? "gradient absolute" : "absolute"} />
                            <video
                                ref={videoRefs[0]}
                                controls
                                onPlay={() => handlePlay(3)}
                                onPause={() => handlePause(3)}
                                onEnded={() => handleVideoEnd(3)}
                                className={styles.video}
                                poster='https://moviz-files.netlify.app/5.png'
                            >

                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className='w-full md:w-1/2 lg:w-2/3 text-base md:text-xl flex flex-col gap-2 sm:gap-1 justify-between py-4 p-2 text-left'>
                            <div className='flex flex-col gap-3'>
                                <div className='border-b-2 border-b-slate-800 py-2'>
                                    <h3>
                                        <span className='font-[800]'>#VideoMaker Type 3</span>- Ushbu paketimizda
                                        sizning shaxsiy brendingiz uchun videolar syomka qilish va uni jonlantirib
                                        montaj qilish kiradi.
                                    </h3>
                                </div>
                                <ul className='flex gap-2 text-base flex-col md:flex-row'>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>Video haqida</li>
                                            <li>- 60 soniyagacha </li>
                                            <li>- Format 4K</li>
                                            <li>- Camera Sony a7 III</li>
                                        </ul>
                                    </li>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>
                                                Narxlar
                                            </li>
                                            <li>
                                                - <span className='text-red-500'>1 ta video 69.9$ </span>
                                            </li>
                                            <li>
                                                - <span className='text-green-500'>10 ta video 59.9$ dan </span>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-[100%] flex justify-center md:justify-start items-center mt-2'>
                                <LinkButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/3 flex items-center justify-center md:items-end h-[400px] md:h-[400px]'>
                            <div className={videoID == 5 ? "gradient absolute" : "absolute"} />
                            <video
                                ref={videoRefs[4]}
                                controls
                                onPlay={() => handlePlay(4)}
                                onPause={() => handlePause(4)}
                                onEnded={() => handleVideoEnd(4)}
                                className={styles.video}
                                poster='https://moviz-files.netlify.app/1.png'
                            >

                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className={styles.infoCard} >
                        <div className='w-full md:w-1/2 lg:w-2/3 text-base md:text-xl  flex flex-col gap-2 sm:gap-1 justify-between py-4 p-2 text-left'>
                            <div className='flex flex-col gap-3'>
                                <div className='border-b-2 border-b-slate-800 py-2'>
                                    <h3>
                                        <span className='font-[800]'>#Motion Design Type 1</span>- Ushbu paketimizda 
                                        sizga Televideniye va Monitorlar uchun turli xil Motion dizayn tayyorlaymiz.
                                    </h3>
                                </div>
                                <ul className='flex gap-2 text-base flex-col md:flex-row'>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>Video haqida</li>
                                            <li>- 60 soniyagacha </li>
                                            <li>- Format 4K</li>
                                        </ul>
                                    </li>
                                    <li className='pr-2 w-full md:w-1/2'>
                                        <ul>
                                            <li>
                                                Dizayn 0 dan tayyorlansa
                                            </li>
                                            <li>
                                                - <span className='text-red-500'>1 ta video 69.9$ </span>
                                            </li>
                                            <li>
                                                - <span className='text-green-500'>10 ta video 59.9$ dan </span>
                                            </li>
                                            <li>Dizayn PSD mijoz tomonidan taqdim etilsa</li>
                                            <li>
                                                - <span className='text-red-500'>1 ta video 34.9$</span>
                                            </li>
                                            <li>
                                                - <span className='text-green-500'>10 ta video 29.9$ dan </span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-[100%] flex justify-center md:justify-start items-center mt-2'>
                                <LinkButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/3 flex items-center justify-center md:items-end h-[400px] md:h-[400px]'>
                            <div className={videoID == 6 ? "gradient absolute" : "absolute"} />
                            <video
                                ref={videoRefs[5]}
                                controls
                                onPlay={() => handlePlay(5)}
                                onPause={() => handlePause(5)}
                                onEnded={() => handleVideoEnd(5)}
                                className={styles.video}
                                poster='https://moviz-files.netlify.app/6.png'
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