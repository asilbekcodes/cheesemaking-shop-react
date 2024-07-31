import React from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'
import { PiCheese } from 'react-icons/pi'

const Hero = () => {
    const heroMap = [
        {number: 1 , title: 'Закваски для сыра', icon: <IoIosArrowForward />, title2: 'Формы для сыра'},
        {number: 2 , title: 'Ферменты для сыра', icon: <IoIosArrowForward />, title2: 'Латексное покрытие'},
        {number: 3 , title: 'Хлористый кальций', icon: <IoIosArrowForward />, title2: 'Воск для сыра'},
        {number: 4 , title: 'Плесень для сыра', icon: <IoIosArrowForward />, title2: 'Термоусадочные пакеты'},
        {number: 5 , title: 'Кисломолочные закваски', icon: <IoIosArrowForward />, title2: 'Дренажные коврики'},
        {number: 6 , title: 'Красители для сыра', icon: <IoIosArrowForward />, title2: 'Дренажные мешки и салфетки для прессования'},
        {number: 7 , title: 'Специи для сыра', icon: <IoIosArrowForward />, title2: 'Дренажные контейнеры'},
    ]
  return (
    <div>
        <div className='w-[250px] mb-5'>
        <div className='flex items-center gap-3 bg-[#FBE8BB] p-3 hover:text-[#FD9339]'>
                < PiCheese className='text-[25px]'/>
                <p className='font-bold'>Ингредиенты</p>
        </div>
            <div className='bg-[#fff] '>
                {heroMap.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-[#E6E6E6] border-solid hover:bg-[#FFF1DB] hover:text-[#FD9339]">
                        <h1>{ item.title }</h1>  
                        <h1>{ item.icon }</h1>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-[250px]'>
        <div className='flex items-center gap-3 bg-[#FBE8BB] p-3  hover:text-[#FD9339]'>
            < CiShoppingBasket className='text-[25px]'/>
            <p className='font-bold'>Оборудование</p>
        </div>
        <div className='bg-[#fff]'>
            {heroMap.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-[#E6E6E6] border-solid hover:bg-[#FFF1DB] hover:text-[#FD9339]">
                    <h1>{ item.title2 }</h1>  
                    <h1>{ item.icon }</h1>
                </div>
            ))}
        </div>
    </div>
  </div>
  )
}

export default Hero

