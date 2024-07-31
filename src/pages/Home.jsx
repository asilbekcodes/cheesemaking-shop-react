import React from 'react'
import Hero from '../components/Hero'
import MyCarousel from '../components/MyCarousel'

const Home = ({addToCart}) => {
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
  ]

  return (
    <div>
      <img className='w-full py-10' src="../src/assets/images/pictures/Slider.svg" alt="" />
      <div className='flex gap-5'>
        <Hero />
        <div >
          <div className='flex items-center gap-3'>
            <p className='text-[#FD9339] font-bold '>Популярные товары</p>
            <p className='text-[#808080] font-bold'> Акции</p>
          </div>
          <p className='font-bold text-[#4E2D2D] text-[24px] py-8'>Ингредиенты</p>
          <div className='grid grid-cols-4 gap-5'>
            {cardMap.map((item, index) => (
              <div key={index}>
                <div className=" max-w-[250px] bg-white border border-gray-200 rounded-lg shadow ">
                  <a href="ProductCard">
                    <img className="px-8 pt-5 rounded-t-lg" src={item.image} alt="product image" />
                    <img className='mx-auto' src={item.img} alt="" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="ProductCard">
                      <h5 className="text-[16px] font-semibold tracking-tight pt-5">{item.title}</h5>
                    </a>
                    <hr className='my-4'/>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[16px] font-bold block">{item.money}</span>
                          <span className="text-[16px] text-[#f65b5b] line-through">{item.del}</span>
                        </div>
                        <button onClick={() => addToCart({item})  } className='bg-[#FD9339] text-white rounded-lg px-3 py-2'>{item.btn}</button>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='py-20'>
        <img src="../src/assets/images/pictures/04-Features.svg" alt="" />  
      </div>
      <div>
        <p className='font-bold text-[#4E2D2D] text-[28px] pb-5'>Мы подобрали для вас</p>
        <div className='flex justify-between'>
          <img src="../src/assets/images/pictures/1@2x.svg" alt="" />
          <img src="../src/assets/images/pictures/2@2x.svg" alt="" />
        </div>
      </div>
      <div>
        <p className='font-bold text-[#4E2D2D] text-[28px] pt-20 pb-5'>наше оборудование</p>
        <img className='w-full' src="../src/assets/images/pictures/06-Staff.svg" alt="" />
      </div>
      <div className='flex justify-center flex-wrap pt-20 pb-44'>
        <div className="w-[350px] bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
              <img className="rounded-t-lg" src="../src/assets/images/card-images/image 4.svg" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-[] font-bold tracking-tight text-[#4E2D2D]">Сырная тарелка</h5>
            </a>
            <p className="mb-3 font-normal ">Так называется блюдо, которое состоит из разных сортов сыра. </p>
            <a href="#" className="flex items-center py-1 text-sm font-medium text-center text-[#FD9339]">Читать далее 
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <MyCarousel/>
    </div>
  )
}

export default Home
