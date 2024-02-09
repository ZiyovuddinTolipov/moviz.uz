import { useState } from "react";
import logooq from "../assets/oq.png"
import { CiHome } from "react-icons/ci";


export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="absolute z-50 left-0 right-0 py-3 px-5 my-3 top-3  w-full sticky">
            <div className="md:justify-between flex  mx-auto  md:items-center flex-col md:flex-row  px-3 md:px-8 max-w-[1400px] bg-white/10 backdrop-blur-md w-[90%] rounded-xl">
                <div className="w-[100%] md:w-auto">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div>
                            <a href="#"> <img src={logooq} alt="moviz.uz logo moviz.cg instagram " className="h-8" /></a>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] md:w-auto">
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-start px-3 justify-start flex flex-col md:flex-row  md:flex md:space-x-6 text-xl font-[500] gap-4">
                            <a href="#home" className="mt-2 text-white"><li>Bosh sahifa</li></a>
                            <a href="#allproduct" className="mt-2 text-white"><li>Tariflarimiz</li></a>
                            <a href="#about" className="mt-2 text-white"><li>Men haqimda</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
