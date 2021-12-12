import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import {FiSearch } from 'react-icons/fi';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';

const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <nav className="p-5 pb-2 flex flex-wrap sm:justify-between justify-center item-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between item-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl flex bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
                        Goggl <FiSearch className="ml-2 mt-1"/>
                    </p>
                </Link>

                <button type="button" onClick={()=> setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-500 dark:text-gray-900 bg-white rounded-full  px-2 py-1 hover:shadow-lg ">
                    {darkTheme ?<BsFillMoonFill/> : <BsFillSunFill/> }
                </button>

            </div>
                <Search/>
        </nav>
    )
}

export default Navbar
