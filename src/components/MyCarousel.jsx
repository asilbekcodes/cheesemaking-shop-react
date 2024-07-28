import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const MyCarousel = () => {
  const cardMap = [
    {number: 1, image: '../src/assets/images/card-images/Rectangle 65.svg', img: '../src/assets/images/card-images/Group 275.svg',  title: 'Мезофильная закваска Danisco CHOOZIT MM...', money: '1300₽/1 шт.', del: '1800₽', btn: 'Добавить'},
    {number: 2, image: '../src/assets/images/card-images/Rectangle 65 (1).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Душистый перец горошком (100г)', money: '200₽/ 1 шт.', del: '320₽', btn: 'Добавить'},
    {number: 3, image: '../src/assets/images/card-images/Rectangle 65 (2).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Красный перец молотый (100г).', money: '380₽/1 шт.', del: '400₽', btn: 'Добавить'},
    {number: 4, image: '../src/assets/images/card-images/Rectangle 65 (3).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Мускатный орех молотый (100г)', money: '420/1 шт.', del: '560₽', btn: 'Добавить'},
    {number: 5, image: '../src/assets/images/card-images/Rectangle 65 (4).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Форма для твердого сыра 1 кг', money: '1300₽/1 шт.', del: '1800₽', btn: 'Добавить'},
    {number: 6, image: '../src/assets/images/card-images/Rectangle 65 (5).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Душистый перец горошком (100г)', money: '200₽/1 шт.', del: '320₽', btn: 'Добавить'},
    {number: 7, image: '../src/assets/images/card-images/Rectangle 65 (6).svg', img: '../src/assets/images/card-images/Group 275.svg',title: 'Красный перец молотый (100г).', money: '380₽/1 шт.', del: '400₽', btn: 'Добавить'},
    {number: 8, image: '../src/assets/images/card-images/Rectangle 65 (7).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Мускатный орех молотый (100г)', money: '420₽/1 шт.', del: '560₽', btn: 'Добавить'},
    {number: 1, image: '../src/assets/images/card-images/Rectangle 65.svg', img: '../src/assets/images/card-images/Group 275.svg',  title: 'Мезофильная закваска Danisco CHOOZIT MM...', money: '1300₽/1 шт.', del: '1800₽', btn: 'Добавить'},
    {number: 2, image: '../src/assets/images/card-images/Rectangle 65 (1).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Душистый перец горошком (100г)', money: '200₽/ 1 шт.', del: '320₽', btn: 'Добавить'},
    {number: 3, image: '../src/assets/images/card-images/Rectangle 65 (2).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Красный перец молотый (100г).', money: '380₽/1 шт.', del: '400₽', btn: 'Добавить'},
    {number: 4, image: '../src/assets/images/card-images/Rectangle 65 (3).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Мускатный орех молотый (100г)', money: '420/1 шт.', del: '560₽', btn: 'Добавить'},
    {number: 5, image: '../src/assets/images/card-images/Rectangle 65 (4).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Форма для твердого сыра 1 кг', money: '1300₽/1 шт.', del: '1800₽', btn: 'Добавить'},
    {number: 6, image: '../src/assets/images/card-images/Rectangle 65 (5).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Душистый перец горошком (100г)', money: '200₽/1 шт.', del: '320₽', btn: 'Добавить'},
    {number: 7, image: '../src/assets/images/card-images/Rectangle 65 (6).svg', img: '../src/assets/images/card-images/Group 275.svg',title: 'Красный перец молотый (100г).', money: '380₽/1 шт.', del: '400₽', btn: 'Добавить'},
    {number: 8, image: '../src/assets/images/card-images/Rectangle 65 (7).svg', img: '../src/assets/images/card-images/Group 275.svg', title: 'Мускатный орех молотый (100г)', money: '420₽/1 шт.', del: '560₽', btn: 'Добавить'},
  ];

  const prosmotrCardesRef = useRef(null);
  const scrollLeft = () => {
      if (prosmotrCardesRef.current) {
          prosmotrCardesRef.current.scrollLeft -= 200;
      }
  };
  const scrollRight = () => {
      if (prosmotrCardesRef.current) {
          prosmotrCardesRef.current.scrollLeft += 200;
      }
  };
  return (
    <>
      <div className='flex flex-wrap justify-between items-center py-8'>
        <p className='text-[24px] font-semibold text-[#4E2D2D]'>Просмотренные товары</p>
        <div className='flex gap-8'>
          <IoIosArrowBack id="chevronLeft" onClick={scrollLeft}/>
          <IoIosArrowForward id="chevronRight" onClick={scrollRight}/>
        </div>
      </div>
      <div className='flex gap-5 overflow-hidden' id="prosmotr_cardes" ref={prosmotrCardesRef} >
        {cardMap.map((item, index) => (
          <div key={index} >
            <div className="w-[220px] bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img className="px-8 pt-5 rounded-t-lg" src={item.image} alt="item image" />
                <img className='mx-auto' src={item.img} alt="" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-[16px] font-semibold tracking-tight pt-5">{item.title}</h5>
                </a>
                <hr className='my-4'/>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[16px] font-bold block">{item.money}</span>
                    <span className="text-[16px] text-[#f65b5b] line-through">{item.del}</span>
                  </div>
                  <button className='bg-[#FD9339] text-white rounded-lg px-3 py-2'>{item.btn}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyCarousel
