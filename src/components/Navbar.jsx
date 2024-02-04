import logooq from "../assets/oq.png"
const Navbar = () => {
    return (
        <nav className="sticky z-50 mx-auto  py-3 px-5 my-3 flex items-center justify-between top-3 max-w-[1400px] bg-white/10 backdrop-blur-md w-[90%] rounded-xl">
            <div>
                <a href="#"> <img src={logooq} alt="moviz.uz logo moviz.cg instagram " className="h-8" /></a>
            </div>
            <ul className="flex text-white gap-3 text-xl font-semibold">
                <a href="#home"><li>Home</li></a>
                <a href="#allproduct"><li>All product</li></a>
                <a href="#about"><li>About</li></a>
            </ul>
        </nav>
    )
}

export default Navbar