import { useState } from 'react'
import { AiOutlineClose, AiOutlineHeart, AiOutlineLogin, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import logooq from "../assets/oq.png"

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        console.log('hello');
        // alert('hello');
        setNav(!nav)
    }
    const style = {
        navbar: `sticky z-50 mx-auto  py-3 px-5 my-3 flex items-center justify-between top-3 max-w-[1400px] bg-white/10 backdrop-blur-md w-[90%] rounded-xl`,
    }
    return (
        <nav className={style.navbar}>

            <div>
                <a href="#"> <img src={logooq} alt="moviz.uz logo moviz.cg instagram " className="h-4 md:h-8" /></a>
            </div>
            <ul className=" hidden md:flex text-white gap-3 text-xl font-semibold">
                <a href="#home"><li>Bosh sahifa</li></a>
                <a href="#allproduct"><li>Tariflarimiz</li></a>
                <a href="#about"><li>Men haqimda</li></a>
            </ul>

            <div onClick={handleNav} className='block md:hidden ease-in-out duration-300 mr-5 cursor-pointer'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'text-white text-xl fixed left-0 top-0 w-[80%] bg-[#131b27] backdrop-blur-md min-h-full border-r ease-in-out duration-500' : "fixed left-[-100%]"}>
                <div className='w-full my-4'>
                    <a href="#"> <img src={logooq} alt="moviz.uz logo moviz.cg instagram " className="h-8" /></a>
                </div>
                <ul className="flex flex-col md:hidden text-white gap-3 text-xl font-semibold bg-[#131b27] backdrop-blur-md">
                    <a href="#home" ><li>Bosh sahifa</li></a>
                    <a href="#allproduct"><li>Tariflarimiz</li></a>
                    <a href="#about"><li>Men haqimda</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar