import avatar from '../assets/moviz.png'
import AdobeP from '../assets/AdobePremierepro.png'
import latipov from '../assets/latipov.jfif'

const About = () => {
    return (
        <section className='w-full border-t-2 border-t-slate-300' id='about'>
            <main className='max-w-[1400px]  pt-20 w-[95%] mx-auto  flex flex-col-reverse justify-start md:flex-row'>
                <div className="w-full md:w-1/2 text-white flex flex-col gap-3">
                    <div className='text-xl about_links'>
                            <h3>Yo'ldoshboyev Tolibjon Nurullayevich.</h3>
                            <h3>7 yillik tajriba.</h3>
                            <h3>500+ Mijozlar</h3>
                            <h3>Men ishlagan taniqli brendlar </h3>  
                            <ul>
                                <li>
                                    <img src={latipov} alt=""  className='h-16 w-16 rounded-full'/>
                                </li>
                            </ul>
                            <h3>
                                Jahongir Latipov (@latipov_uz), <br />  
                                Dilshod Nazarov (@dili.me) , <br />
                                Abbos Mamaev (@mamaevx) , <br />
                                Aziz Xasanov (@aziz_estet)</h3>
                    </div>
                    {/* skills */}
                    <div className='flex gap-4 about_links'>
                        <div className="radial-progress text-primary dark:text-blue-500 about_links" style={{ "--value": 70 }} role="progressbar" title='Adobe Premiere pro 90%'>
                            <img src={AdobeP} alt="" className='h-8 w-8 rounded-full' />
                        </div>
                        <div className="radial-progress text-primary" style={{ "--value": 80 }} role="progressbar">
                            <img src={AdobeP} alt="" className='h-8 w-8 rounded-full' />
                        </div>
                        <div className="radial-progress text-red-500" style={{ "--value": 90 }} role="progressbar">
                            <img src={AdobeP} alt="" className='h-8 w-8 rounded-full' />
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