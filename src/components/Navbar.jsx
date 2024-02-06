import logooq from "../assets/oq.png"

const Navbar = () => {
    return (
        <nav className="sticky z-50 mx-auto  py-3 px-5 my-3 flex items-center justify-between top-3 max-w-[1400px] bg-white/10 backdrop-blur-md w-[90%] rounded-xl">
            <div>
                <a href="#"> <img src={logooq} alt="moviz.uz logo moviz.cg instagram " className="h-4 md:h-8" /></a>
            </div>
            <ul className="flex text-white gap-3 text-base md:text-xl font-semibold">
                <a href="#home"><li>Bosh sahifa</li></a>
                <a href="#allproduct"><li>Tariflarimiz</li></a>
                <a href="#about"><li>Men haqimda</li></a>
            </ul>
        </nav>
    )
}

export default Navbar