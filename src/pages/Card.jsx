import React from 'react'

const Card = () => {
  return (
    <div>
      <h2 className='text-[#4E2D2D] text-[28px] font-bold'>Оформление заказа</h2>
      <div className='flex flex-wrap justify-between'>
        <div>
          <div className='bg-[#fff] p-5 w-[780px]'>
            <p className='text-[20px] text-[#4E2D2D]'>Контактные данные:</p>
            <hr />
            <div className='flex flex-wrap justify-between items-center'>
              <form class="max-w-sm mx-auto">
                <label for="website-admin" class="block mb-2 text-sm font-medium ">Username</label>
                <input type="text" id="website-admin" class=" outline-none rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500  block flex-1 min-w-0 w-full text-sm p-2.5 " placeholder="Иванов Андрей"/>
              </form>
              <form class="max-w-sm mx-auto"> 
                <label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
                <input type="email" id="email" aria-describedby="helper-text-explanation" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " placeholder="ivan.services@gmail.com"/>
              </form>
            </div>
          </div>
        </div>
        <div className='px-5 pb-5 text-[#4E2D2D] bg-[#FEF0C2] w-[400px] h-[500px] grid grid-rows-8 items-center'> 
          <p className='text-[20px] font-bold'>Итоги заказа</p>
          <p className='font-semibold'>Есть промокод для скидки?</p>
          <div className='bg-[#fff] flex items-center justify-between p-2'>
            <p className='font-semibold'>Cheese2021</p>
            <p className='font-bold'>Применить</p>
          </div>
          <div className='flex items-center justify-between font-semibold mt-5'>
            <p>Сумма заказа</p>
            <p>2350 руб.</p>
          </div>
          <div className='flex items-center justify-between font-semibold'>
            <p>Доставка</p>
            <p>0 руб.</p>
          </div>
          <div className='flex items-center justify-between font-semibold mb-6'>
            <p>Промокод</p>
            <p>-300 руб.</p>
          </div>
          <div className='flex items-center justify-between font-bold'>
            <p>К оплате</p>
            <p>2050 руб.</p>
          </div>
          <button className='bg-[#FD9339] rounded-md text-[#fff] w-full py-3'>Подтвердить заказ</button>
        </div>
      </div>
    </div>
  )
}

export default Card
