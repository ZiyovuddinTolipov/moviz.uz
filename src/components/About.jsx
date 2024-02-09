import avatar from '../assets/moviz.png'
import AdobeP from '../assets/AdobePremierepro.png'
import PhotoshopIcon from '../assets/AdobePhotoshop.png';
import AdobeAfterEffect from '../assets/AdobeAftereffect.png';
import CapCut from '../assets/CapCut.png';
import vnicon from '../assets/Vn.png';
import Davenci from '../assets/DavenciResolver.png';


const About = () => {
    return (
        <section className='w-full border-t-2 border-t-slate-300 pb-4' id='about'>
            <main className='max-w-[1400px] pt-24 mt-5 w-[90%] mx-auto  flex flex-col-reverse justify-center md:flex-row min-h-screen'>
                <div className="w-full md:w-1/2 text-white flex flex-col gap-5 h-[600px] justify-end">
                    <h1 className='text-8xl font-bold'>Moviz.CG</h1>

                    <div className='flex flex-col gap-3 '>
                        <h3 className='text-4xl font-bold'><span className='text-green-500'>8+</span> yillik tajriba.</h3>
                        <h3 className='font-bold text-3xl'><span className='text-green-500'>600+</span> Mijozlar</h3>
                        <h3 className='text-3xl font-[700]'>Yo'ldoshboyev  Tolibjon Nurullayevich.</h3>
                    </div>
                    {/* skills */}
                    <div className='flex gap-4  about_links mt-10'>
                        <div className='flex gap-3'>
                            <div className="radial-progress text-green-500" style={{ "--value": 90 }} role="progressbar" title='Adobe Premiere pro 90%'>
                                <img src={AdobeP} alt="AdobeP" className='h-10 w-10 rounded-full' />
                            </div>
                            <div className="radial-progress text-green-500" style={{ "--value": 60 }} role="progressbar" title='Adobe Photoshop 60%'>
                                <img src={PhotoshopIcon} alt="PhotoshopIcon" className='h-10 w-10 rounded-full' />
                                
                                {/* 90% */}
                            </div>
                            <div className="radial-progress text-blue-500" style={{ "--value": 50 }} role="progressbar" title='After Effect 50%'>
                                <img src={AdobeAfterEffect} alt="AdobeAfterEffect" className='h-10 w-10 rounded-full' />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className="radial-progress text-green-500" style={{ "--value": 90 }} role="progressbar" title='CapCut 90%'>
                                <img src={CapCut} alt="CapCut" className='h-10 w-10 rounded-full' />
                            </div>
                            <div className="radial-progress text-green-500" style={{ "--value": 70 }} role="progressbar" title='Vn 70%'>
                                <img src={vnicon} alt="vnicon" className='h-10 w-10 rounded-full' />
                            </div>
                            <div className="radial-progress text-blue-500" style={{ "--value": 40 }} role="progressbar" title='Davenci Resolver 40%'>
                                <img src={Davenci} alt="Davenci" className='h-10 w-10 rounded-full' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-end justify-center h-[600px]">
                    <img src={avatar} alt="img" className='w-[200px] md:w-[400px] ' />
                </div>
            </main>
        </section>
    )
}

export default About