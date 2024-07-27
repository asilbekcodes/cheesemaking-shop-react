import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { TbClockHour4 } from 'react-icons/tb';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className='flex justify-between'>
        <div className='flex items-start gap-5'>
            <div>
                <div className='flex items-center gap-3'>
                    <CiLocationOn />
                    <button id="dropdownDefaultButton"onClick={toggleDropdown}className="text-black  font-medium rounded-lg text-sm  text-center inline-flex items-center "type="button">
                        Ваш город: Москва
                        <svg className="w-2.5 h-2.5 ms-3"aria-hidden="true"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 10 6"><path stroke="currentColor"stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="m1 1 4 4 4-4"/></svg>
                    </button>
                </div>
                <div id="dropdown"className={`z-10 ${isDropdownVisible ? '' : 'hidden'} bg-white divide-y divide-gray-500 rounded-lg shadow w-44 block`}>
                    <ul className="py-2 text-sm text-black "aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339] "> Dashboard</a>
                        </li>
                        <li>
                            <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Settings</a>
                        </li>
                        <li>
                            <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Earnings</a>
                        </li>
                        <li>
                            <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center flex-wrap gap-2'>
                <TbClockHour4 />
                <p>Пн-Пт 9:00 - 19:00</p>
            </div>
        </div>
        <div className='flex items-start gap-3 '>
            <p>О компании</p>
            <p>Преимущества</p>
            <p>Акционные товары</p>
            <p className='flex items-center gap-1'>
                <IoPersonCircleOutline />
                Войти в аккаунт
            </p>
        </div>
    </div>
    
  );
};

export default Header;
