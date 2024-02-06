import avatar from '../assets/moviz.png'
import AdobeP from '../assets/AdobePremierepro.png'
import PhotoshopIcon from '../assets/AdobePhotoshop.png';
import AdobeAfterEffect from '../assets/AdobeAftereffect.png';
import CapCut from '../assets/CapCut.png';
import vnicon from '../assets/Vn.png';
import Davenci from '../assets/DavenciResolver.png';


const About = () => {
    return (
        <section className='w-full border-t-2 border-t-slate-300' id='about'>
            <main className='max-w-[1400px]  pt-20 w-[95%] mx-auto  flex flex-col-reverse justify-start md:flex-row'>
                <div className="w-full md:w-1/2 text-white flex flex-col gap-3">
                    <div className='text-xl about_links'>
                        <h3>Yo'ldoshboyev Tolibjon Nurullayevich.</h3>
                        <h3>7 yillik tajriba.</h3>
                        <h3>600+ Mijozlar</h3>
                    </div>
                    {/* skills */}
                    <div className='flex gap-4 about_links'>
                        <div className="radial-progress text-green-500" style={{ "--value": 90 }} role="progressbar" title='Adobe Premiere pro 90%'>
                            <img src={AdobeP} alt="AdobeP" className='h-10 w-10 rounded-full' />
                        </div>
                        <div className="radial-progress text-green-500" style={{ "--value": 60 }} role="progressbar" title='Adobe Photoshop 60%'>
                            <img src={PhotoshopIcon} alt="PhotoshopIcon" className='h-10 w-10 rounded-full' />
                        </div>
                        <div className="radial-progress text-blue-500" style={{ "--value": 50 }} role="progressbar" title='After Effect 50%'>
                            <img src={AdobeAfterEffect} alt="AdobeAfterEffect" className='h-10 w-10 rounded-full' />
                        </div>
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
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img src={avatar} alt="img" className='w-[200px] md:w-[400px]' />
                </div>
            </main>
        </section>
    )
}

export default About