import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { TbClockHour4 } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const [isDropdownVisible2, setDropdownVisible2] = useState(false);

  const toggleDropdown2 = () => {
    setDropdownVisible2(!isDropdownVisible2);
  };

  return (
    <>
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
                    <div id="dropdown"className={`z-10 ${isDropdownVisible ? '' : 'hidden'} bg-white divide-y divide-gray-500 rounded-lg shadow w-44 block absolute`}>
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
        <div className='flex flex-wrap justify-between items-center my-5'>
            <Link to={"/"}>
                <img src="../src/assets/logos/logo.svg" alt="" />
            </Link>
            <div className='flex items-center'>
                <img src="../src/assets/images/delivery-06 1.svg" alt="" />
                <p className='w-[80px] text-[#808080] text-[14px]'>Бесплатная доставка</p>
            </div>
            <div className='flex items-center'>
                <img src="../src/assets/images/credit-card-repeat 1.svg" alt="" />
                <p className='w-[120px] text-[#808080] text-[14px]'>Скидка при оплате на сайте</p>
            </div>
            <div className='flex items-center'>
                <img src="../src/assets/images/user-protection-shield-square 1.svg" alt="" />
                <p className='w-[80px] text-[#808080] text-[14px]'>Защита покупателей</p>
            </div>
            <div className='flex items-center gap-4'>
                <img src="../src/assets/icons/Telegram.svg" alt="" />
                <img src="../src/assets/icons/WhatsUp.svg" alt="" />
                <img src="../src/assets/icons/Messenger.svg" alt="" />
            </div>
            <div >
                <p className='font-bold'>+8 916 460-19-60</p>
                <button  type="button" class="text-[#FD9339] flex items-center gap-3  border border-[#FD9339] rounded-lg text-sm px-2 py-2 text-center me-2 mb-2">
                    <FiPhone />
                    Заказать звонок
                </button>
            </div>
            <div className='flex items-center'>
                <p className='w-[120px]'>Ваша корзина <span className='text-[#FD9339]'>1680 руб.</span> </p>
                <div className='flex items-start'>
                    <Link to={"/card"}>
                        <img src="../src/assets/icons/shopping-cart 1.svg" alt="" />
                        <p className='bg-[#FD9339] text-white rounded-full w-5 h-5 flex items-center justify-center relative bottom-12 left-8'>{length}</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex flex-wrap items-center gap-4'>
                <div>
                    <div>
                        <button id="dropdownDefaultButton"onClick={toggleDropdown2}className="text-black  font-medium rounded-lg text-sm  text-center inline-flex items-center "type="button">
                            Рецепты
                            <svg className="w-2.5 h-2.5 ms-3"aria-hidden="true"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 10 6"><path stroke="currentColor"stroke-linecap="round"stroke-linejoin="round"stroke-width="2"d="m1 1 4 4 4-4"/></svg>
                        </button>
                    </div>
                    <div id="dropdown"className={`z-10 ${isDropdownVisible2 ? '' : 'hidden'} bg-white divide-y divide-gray-500 rounded-lg shadow w-44 block absolute`}>
                        <ul className="py-2 text-sm text-black "aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339] "> Молодые сыры</a>
                            </li>
                            <li>
                                <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Полутвердые сыры</a>
                            </li>
                            <li>
                                <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Паста Филата</a>
                            </li>
                            <li>
                                <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Сывороточные сыры</a>
                            </li>
                            <li>
                                <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Сыры с плесенью</a>
                            </li>
                            <li>
                                <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Твердые сыры</a>
                            </li>
                            <li>
                                <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Творожные сыры</a>
                            </li>
                            <li>
                                <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Кисломолочные продукты</a>
                            </li>
                            <li>
                                <a href="#"className="block px-4 py-2 hover:bg-[#FFF1DB] hover:text-[#FD9339]">Все рецепты</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>Доставка и оплата</p>
                <p>Калькулятор Сыродела</p>
                <p>Отзывы</p>
                <p>Вопросы и ответы</p>
                <p>Контакты</p>
            </div>
            
            {/* input */}
            <div>
                <form class="max-w-md mx-auto">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-[300px] px-5 ps-10 py-2 text-sm bg-inherit outline-none rounded-lg border border-solid border-[#FD9339]" placeholder="Введите название товара или артикул" required />
                    </div>
                </form>
            </div>
        </div>
    </>
    
  );
};

export default Header;
