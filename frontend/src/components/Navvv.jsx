import React, { useState } from 'react';
import bag from '../assets/bag.png';
import menu from '../assets/main-menu.png';
import chevron from '../assets/chevron.png'
import { Link } from 'react-router-dom';

const Navvv = () => {
    const [isDropDown, setIsDropDown] = useState(false);

    const toggleDrop = () => {
        setIsDropDown(!isDropDown);
    };

    return (
        <nav className='bg-indigo-900 p-6 sticky'>
            <div className='flex justify-between items-center text-xl relative'> {/* Added relative positioning */}
                {/* left side */}
                <div className='flex justify-between items-center'>
                    <img src={bag} alt="" className="w-8 h-8 mr-2" />
                    <p className='font-bold text-white '>ShopFx</p>
                </div>

                {/* Menu button */}
                <div className='md:hidden absolute right-0'> {/* Positioned absolutely to the right */}
                    <button onClick={toggleDrop}>
                        {isDropDown? (
                            <img src={chevron
                            } className='w-8 h-8 fill-white' alt="Menu"/>
                        ) : (
                            <img src={menu} className='w-8 h-8 fill-white' alt="Menu"/>
                        )}
                    </button>
                </div>

                {/* right side */}
                <div className='md:flex items-center text-white font-bold hidden'>
                    <Link to="/" className='mx-4'>Home</Link>
                    <Link to="/cart" className='mx-4'>Cart</Link>
                </div>

                {/* Dropdown menu */}
                {isDropDown && (
                    <div className='md:hidden absolute top-full right-0 mt-2'> {/* Positioned absolutely below the navbar */}
                        <div className='flex flex-col bg-gray-300 p-10 my-3 rounded-sm font-bold overflow-visible text-gray-900 hover:font-blue-900'>
                            <Link to='/'>Home</Link>
                            <Link to='/cart'>Cart</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navvv;
