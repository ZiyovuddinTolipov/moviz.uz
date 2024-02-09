import avatar from '../assets/moviz.png'
import AdobeP from '../assets/AdobePremierepro.png'
import PhotoshopIcon from '../assets/AdobePhotoshop.png';
import AdobeAfterEffect from '../assets/AdobeAftereffect.png';
import CapCut from '../assets/CapCut.png';
import vnicon from '../assets/Vn.png';
import Davenci from '../assets/DavenciResolver.png';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = () => {
    return (
        <section className='w-full border-t-2 border-t-slate-300 pb-4' id='about'>
            <main className='max-w-[1400px] pt-24 mt-5 w-[90%] mx-auto  flex flex-col-reverse justify-center md:flex-row min-h-screen'>
                <div className="w-full md:w-1/2 text-white flex flex-col gap-5 h-[600px] justify-start md:justify-end mt-3 md:mt-0">
                    <div className="circle rounded-full absolute " />
                    <h1 className='text-6xl font-bold'>Moviz.Cg</h1>
                    <div className='flex flex-col gap-3 relative z-10'>
                        <div className="circle2 rounded-full absolute z-[-1]" />
                        <h3 className='text-2xl font-bold'><span className='text-green-500'>8+</span> yillik tajriba.</h3>
                        <h3 className='font-bold text-2xl'><span className='text-green-500'>600+</span> Mijozlar</h3>
                        <h3 className='text-2xl font-[700]'>Yo'ldoshboyev  Tolibjon Nurullayevich.</h3>
                    </div>
                    {/* skills */}
                    <div className='about_links hidden md:flex'>
                        <div className='flex gap-3 '>
                            <div className='w-[100px]'>
                                <div className='w-[70px] mx-auto'>
                                    <CircularProgressbarWithChildren value={90}>
                                        <img src={AdobeP} alt="icon" className='h-10 w-10 rounded-full' />
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-[.9rem] mt-1'>
                                    Adobe Premiere pro
                                </div>
                            </div>
                            <div className='w-[100px] '>
                                <div className='w-[70px] mx-auto'>
                                    <CircularProgressbarWithChildren value={66}>
                                        <img src={PhotoshopIcon} alt="icon" className='h-10 w-10 rounded-full' />
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-[.9rem] mt-1'>
                                    Adobe  Photoshop
                                </div>
                            </div>
                            <div className='w-[100px] '>
                                <div className='w-[70px] mx-auto'>
                                    <CircularProgressbarWithChildren value={60}>
                                        <img src={AdobeAfterEffect} alt="icon" className='h-10 w-10 rounded-full' />
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-[.9rem] mt-1'>
                                    Adobe After Effect
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-[100px] '>
                                <div className='w-[70px] mx-auto'>
                                    <CircularProgressbarWithChildren value={90}>
                                        <img src={CapCut} alt="icon" className='h-10 w-10 rounded-full' />
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-[.9rem] mt-1'>
                                    Cap Cut
                                </div>
                            </div>
                            <div className='w-[100px] '>
                                <div className='w-[70px] mx-auto'>
                                    <CircularProgressbarWithChildren value={70}>
                                        <img src={vnicon} alt="icon" className='h-10 w-10 rounded-full' />
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-[.9rem] mt-1'>
                                    Vn
                                </div>
                            </div>
                            <div className='w-[100px] '>
                                <div className='w-[70px] mx-auto'>
                                    <CircularProgressbarWithChildren value={45}>
                                        <img src={Davenci} alt="icon" className='h-10 w-10 rounded-full' />
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className='text-center text-[.9rem] mt-1'>
                                    Davenci Resolver
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='block md:hidden text-xl font-semibold '>
                        <h3 className='mt-2 mb-1'>Adobe Premiere pro</h3>
                        <div className="range" style={{ '--p': "90" }} />
                        <h3 className='mt-2 mb-1'>Adobe Photoshop</h3>
                        <div className="range" style={{ '--p': "66" }} />
                        <h3 className='mt-2 mb-1'>Adobe After Effect</h3>
                        <div className="range" style={{ '--p': "60  " }} />
                        <h3 className='mt-2 mb-1'>Cap Cut</h3>
                        <div className="range" style={{ '--p': "90  " }} />
                        <h3 className='mt-2 mb-1'>Vn</h3>
                        <div className="range" style={{ '--p': "70  " }} />
                        <h3 className='mt-2 mb-1'>Davenci Resolver</h3>
                        <div className="range" style={{ '--p': "40  " }} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-end justify-center h-[300px] md:h-[600px]">
                    <img src={avatar} alt="img" className='w-[200px] md:w-[400px] ' />
                </div>
            </main>
        </section >
    )
}

export default About