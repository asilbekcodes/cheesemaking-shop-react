
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Card = ({ cart }) => {
//   const [quantities, setQuantities] = useState(cart.map(() => 1));

//   const handleIncrease = (index) => {
//     const newQuantities = [...quantities];
//     newQuantities[index] += 1;
//     setQuantities(newQuantities);
//   };

//   const handleDecrease = (index) => {
//     const newQuantities = [...quantities];
//     if (newQuantities[index] > 1) {
//       newQuantities[index] -= 1;
//       setQuantities(newQuantities);
//     }
//   };

//   const handleRemove = (index) => {
//     const newCart = cart.filter((_, i) => i !== index);
//     setCart(newCart);
//     const newQuantities = quantities.filter((_, i) => i !== index);
//     setQuantities(newQuantities);
//   };

//   return (
//     <div>
//       <h2 className='text-[#4E2D2D] text-[28px] font-bold my-5'>Оформление заказа</h2>
//       {cart.length === 0 ? (
//         <p className='flex flex-col justify-center items-center font-bold text-3xl h-[80vh] bg-white mb-5'>
//           <img className='mb-5' src="../src/assets/icons/Vector (2).svg" alt="Cart is empty" />
//           Ваша корзина пуста
//           <Link to='/'>
//             <button className='bg-[#FD9339] text-white text-[16px] font-normal px-5 py-1 rounded-md mt-10'>Перейти к товарам</button>
//           </Link>
//         </p>
//       ) : (
//         <div className='flex flex-wrap justify-between'>
//           <div>
//             <div className='bg-[#fff] p-5 w-[780px]'>
//               <p className='text-[20px] text-[#4E2D2D] font-semibold'>Контактные данные:</p>
//               <hr className='my-5' />
//               <div className='flex flex-wrap justify-between items-center gap-5'>
//                 <form className='w-[48%] mx-auto'>
//                   <label htmlFor='fullName' className='block mb-2 text-sm font-medium'>Имя и фамилия</label>
//                   <input type='text' id='fullName' className='outline-none rounded-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5' placeholder='Иванов Андрей' />
//                 </form>
//                 <form className='w-[48%] mx-auto'>
//                   <label htmlFor='email' className='block mb-2 text-sm font-medium'>Электронный адрес</label>
//                   <input type='email' id='email' className='outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='ivan.services@gmail.com' />
//                 </form>
//               </div>
//             </div>
//             <div className='p-5 bg-white my-5 w-[780px]'>
//               <div className='flex justify-between items-center'>
//                 <h2 className='font-semibold text-lg'>Заказ</h2>
//                 <div className='text-right'>на сумму руб.</div>
//               </div>
//               <hr className='my-5' />
//               {cart.map((item, index) => (
//                 <div key={index} className='flex flex-col justify-between items-center md:flex-row px-5'>
//                   <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg' src={cart.image} alt={cart.title} />
//                   <div className='flex flex-col justify-between p-4 leading-normal'>
//                     <h5 className='mb-2 text-lg font-semibold tracking-tight text-gray-900'>{cart.title}</h5>
//                     <p onClick={() => handleRemove(index)} className='text-[#FD9339] underline decoration-solid cursor-pointer'>Удалить</p>
//                   </div>
//                   <div className='flex items-center'>
//                     <button onClick={() => handleDecrease(index)} className='px-2'>−</button>
//                     <input type='text' className='w-8 text-center border mx-2' value={quantities[index]} readOnly />
//                     <button onClick={() => handleIncrease(index)} className='px-2'>+</button>
//                   </div>
//                   <div className='ml-4 font-semibold'>{cart.money}</div>
//                 </div>
//               ))}
//             </div>
//             <div className='p-5 bg-white my-5 w-[780px]'>
//               <p className='font-bold text-[20px]'>Выберите способ доставки:</p>
//               <hr className='my-5' />
//               <div className='flex items-center gap-5'>
//                 <input type='radio' name='delivery' />
//                 <p>Бесплатная доставка <span className='text-[#FD9339]'>(0 руб.)</span></p>
//               </div>
//               <div className='flex items-center gap-5 mt-2'>
//                 <input type='radio' name='delivery' />
//                 <p>Курьер <span className='text-[#FD9339]'>(0 руб.)</span></p>
//               </div>
//               <p className='font-bold text-[20px] mt-5'>Ваши данные для доставки:</p>
//               <hr className='my-5' />
//               <div className='flex flex-wrap justify-between items-center gap-5'>
//                 <form className='w-[48%] mx-auto'>
//                   <label htmlFor='deliveryName' className='block mb-2 text-sm font-medium'>Имя и фамилия</label>
//                   <input type='text' id='deliveryName' className='outline-none rounded-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5' placeholder='Иванов Андрей' />
//                 </form>
//                 <form className='w-[48%] mx-auto'>
//                   <label htmlFor='phone' className='block mb-2 text-sm font-medium'>Номер телефона</label>
//                   <input type='tel' id='phone' className='outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='+7 000 000 00 00' />
//                 </form>
//               </div>
//               <div className='flex items-center gap-5 my-5'>
//                 <form className='w-[48%] mx-auto'>
//                   <label htmlFor='country' className='block mb-2 text-sm font-medium'>Выберите страну</label>
//                   <select id='country' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'>
//                     <option>Российская Федерация</option>
//                     <option>Canada</option>
//                     <option>France</option>
//                     <option>Germany</option>
//                   </select>
//                 </form>
//                 <form className='w-[48%] mx-auto'>
//                   <label htmlFor='region' className='block mb-2 text-sm font-medium'>Выберите регион</label>
//                   <select id='region' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'>
//                     <option>Нижний Новгород</option>
//                     <option>Canada</option>
//                     <option>France</option>
//                     <option>Germany</option>
//                   </select>
//                 </form>
//               </div>
//               <div className='flex flex-wrap justify-between items-center gap-5'>
//                 <form className='w-[48%] mx-auto'>
//                   <label htmlFor='address' className='block mb-2 text-sm font-medium'>Улица, дом и квартира</label>
//                   <input type='text' id='address' className='outline-none rounded-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5' placeholder='Ивановская 34, кв.12' />
//                 </form>
//                 <form className='w-[48%] mx-auto'>
//                   <label htmlFor='postalCode' className='block mb-2 text-sm font-medium'>Индекс</label>
//                   <input type='text' id='postalCode' className='outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='02100' />
//                 </form>
//               </div>
//               <div className='flex items-center my-5'>
//                 <input type='checkbox' id='privacyPolicy' className='w-4 h-4' />
//                 <label htmlFor='privacyPolicy' className='ms-2 text-sm font-medium text-gray-500'>Cогласен на обработку персональных данных в соответствии с <a href='#' className='hover:underline text-[#FD9339]'>политикой конфиденциальности</a>.</label>
//               </div>
//             </div>
//             <div className='bg-white p-5'>
//               <div className='flex items-center mb-4'>
//                 <input type='radio' id='paymentOption1' name='payment' className='w-4 h-4' />
//                 <label htmlFor='paymentOption1' className='block ms-2 text-sm font-medium text-gray-900'>Онлайн оплата</label>
//               </div>
//               <div className='flex items-center mb-4'>
//                 <input type='radio' id='paymentOption2' name='payment' className='w-4 h-4' />
//                 <label htmlFor='paymentOption2' className='block ms-2 text-sm font-medium text-gray-900'>Оплата наличными</label>
//               </div>
//               <div className='flex items-center mb-4'>
//                 <input type='radio' id='paymentOption3' name='payment' className='w-4 h-4' />
//                 <label htmlFor='paymentOption3' className='block ms-2 text-sm font-medium text-gray-900'>Кредитные карты / Интернет банкинг / QIWI / Yandex</label>
//               </div>
//             </div>
//           </div>
//           <div className='px-5 pb-5 text-[#4E2D2D] bg-[#FEF0C2] w-[400px] h-[500px] grid grid-rows-8 items-center'>
//             <p className='text-[20px] font-bold'>Итоги заказа</p>
//             <p className='font-semibold'>Есть промокод для скидки?</p>
//             <div className='bg-[#fff] flex items-center justify-between p-2 rounded-md'>
//               <p className='font-semibold'>Cheese2021</p>
//               <p className='font-bold cursor-pointer'>Применить</p>
//             </div>
//             <div className='flex items-center justify-between font-semibold mt-5'>
//               <p>Сумма заказа</p>
//               <p>2350 руб.</p>
//             </div>
//             <div className='flex items-center justify-between font-semibold'>
//               <p>Доставка</p>
//               <p>0 руб.</p>
//             </div>
//             <div className='flex items-center justify-between font-semibold mb-6'>
//               <p>Промокод</p>
//               <p>-300 руб.</p>
//             </div>
//             <div className='flex items-center justify-between font-bold'>
//               <p>К оплате</p>
//               <p>2050 руб.</p>
//             </div>
//             <button className='bg-[#FD9339] rounded-md text-[#fff] w-full py-3'>Подтвердить заказ</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cart, setCart }) => {
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleRemove = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    const newQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(newQuantities);
  };

  return (
    <div>
      <h2 className='text-[#4E2D2D] text-[28px] font-bold my-5'>Оформление заказа</h2>
      {cart.length === 0 ? (
        <p className='flex flex-col justify-center items-center font-bold text-3xl h-[80vh] bg-white mb-5'>
          <img className='mb-5' src="../src/assets/icons/Vector (2).svg" alt="Cart is empty" />
          Ваша корзина пуста
          <Link to='/'>
            <button className='bg-[#FD9339] text-white text-[16px] font-normal px-5 py-1 rounded-md mt-10'>Перейти к товарам</button>
          </Link>
        </p>
      ) : (
        <div className='flex flex-wrap justify-between'>
          <div>
            <div className='bg-[#fff] p-5 w-[780px]'>
              <p className='text-[20px] text-[#4E2D2D] font-semibold'>Контактные данные:</p>
              <hr className='my-5' />
              <div className='flex flex-wrap justify-between items-center gap-5'>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='fullName' className='block mb-2 text-sm font-medium'>Имя и фамилия</label>
                  <input type='text' id='fullName' className='outline-none rounded-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5' placeholder='Иванов Андрей' />
                </form>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium'>Электронный адрес</label>
                  <input type='email' id='email' className='outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='ivan.services@gmail.com' />
                </form>
              </div>
            </div>
            <div className='p-5 bg-white my-5 w-[780px]'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-lg'>Заказ</h2>
                <div className='text-right'>на сумму руб.</div>
              </div>
              <hr className='my-5' />
              {cart.map((item, index) => (
                <div key={index} className='flex flex-col justify-between items-center md:flex-row px-5'>
                  <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg' src={cart.image} alt={cart.title} />
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-lg font-semibold tracking-tight text-gray-900'>{cart.title}</h5>
                    <button className='text-[#FD9339] underline decoration-solid cursor-pointer' onClick={() => handleRemove(index)}>Удалить</button>
                  </div>
                  <div className='flex items-center'>
                    <button onClick={() => handleDecrease(index)} className='px-2'>−</button>
                    <input type='text' className='w-8 text-center border mx-2' value={quantities[index]} readOnly />
                    <button onClick={() => handleIncrease(index)} className='px-2'>+</button>
                  </div>
                  <div className='ml-4 font-semibold'>{cart.money}</div>
                </div>
              ))}
            </div>
            <div className='p-5 bg-white my-5 w-[780px]'>
              <p className='font-bold text-[20px]'>Выберите способ доставки:</p>
              <hr className='my-5' />
              <div className='flex items-center gap-5'>
                <input type='radio' name='delivery' />
                <p>Бесплатная доставка <span className='text-[#FD9339]'>(0 руб.)</span></p>
              </div>
              <div className='flex items-center gap-5 mt-2'>
                <input type='radio' name='delivery' />
                <p>Курьер <span className='text-[#FD9339]'>(0 руб.)</span></p>
              </div>
              <p className='font-bold text-[20px] mt-5'>Ваши данные для доставки:</p>
              <hr className='my-5' />
              <div className='flex flex-wrap justify-between items-center gap-5'>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='deliveryName' className='block mb-2 text-sm font-medium'>Имя и фамилия</label>
                  <input type='text' id='deliveryName' className='outline-none rounded-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5' placeholder='Иванов Андрей' />
                </form>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='phone' className='block mb-2 text-sm font-medium'>Номер телефона</label>
                  <input type='tel' id='phone' className='outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='+7 000 000 00 00' />
                </form>
              </div>
              <div className='flex items-center gap-5 my-5'>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='country' className='block mb-2 text-sm font-medium'>Выберите страну</label>
                  <select id='country' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'>
                    <option>Российская Федерация</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </form>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='region' className='block mb-2 text-sm font-medium'>Выберите регион</label>
                  <select id='region' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'>
                    <option>Нижний Новгород</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </form>
              </div>
              <div className='flex flex-wrap justify-between items-center gap-5'>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='address' className='block mb-2 text-sm font-medium'>Улица, дом и квартира</label>
                  <input type='text' id='address' className='outline-none rounded-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5' placeholder='Ивановская 34, кв.12' />
                </form>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='postalCode' className='block mb-2 text-sm font-medium'>Индекс</label>
                  <input type='text' id='postalCode' className='outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='02100' />
                </form>
              </div>
              <div className='flex items-center my-5'>
                <input type='checkbox' id='privacyPolicy' className='w-4 h-4' />
                <label htmlFor='privacyPolicy' className='ms-2 text-sm font-medium text-gray-500'>Cогласен на обработку персональных данных в соответствии с <a href='#' className='hover:underline text-[#FD9339]'>политикой конфиденциальности</a>.</label>
              </div>
            </div>
            <div className='bg-white p-5'>
              <div className='flex items-center mb-4'>
                <input type='radio' id='paymentOption1' name='payment' className='w-4 h-4' />
                <label htmlFor='paymentOption1' className='block ms-2 text-sm font-medium text-gray-900'>Онлайн оплата</label>
              </div>
              <div className='flex items-center mb-4'>
                <input type='radio' id='paymentOption2' name='payment' className='w-4 h-4' />
                <label htmlFor='paymentOption2' className='block ms-2 text-sm font-medium text-gray-900'>Оплата наличными</label>
              </div>
              <div className='flex items-center mb-4'>
                <input type='radio' id='paymentOption3' name='payment' className='w-4 h-4' />
                <label htmlFor='paymentOption3' className='block ms-2 text-sm font-medium text-gray-900'>Кредитные карты / Интернет банкинг / QIWI / Yandex</label>
              </div>
            </div>
          </div>
          <div className='px-5 pb-5 text-[#4E2D2D] bg-[#FEF0C2] w-[400px] h-[500px] grid grid-rows-8 items-center'>
            <p className='text-[20px] font-bold'>Итоги заказа</p>
            <p className='font-semibold'>Есть промокод для скидки?</p>
            <div className='bg-[#fff] flex items-center justify-between p-2 rounded-md'>
              <p className='font-semibold'>Cheese2021</p>
              <p className='font-bold cursor-pointer'>Применить</p>
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
      )}
    </div>
  );
};

export default Card;
