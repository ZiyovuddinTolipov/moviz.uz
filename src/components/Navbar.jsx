import logooq from "../assets/oq.png"
const Navbar = () => {
    return (
        <nav className="max-w-[1400px] mx-auto w-full py-3 flex items-center justify-between h-[9vh]">
            <div>
                <a href="#"> <img src={logooq} alt="moviz.uz logo moviz.cg instagram " className="h-8" /></a>
            </div>
            <ul className="flex text-white gap-3 text-xl font-semibold">
                <a href="#allproduct">
                <li>All roduct</li>
                </a>
                <li>rout</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default Navbar