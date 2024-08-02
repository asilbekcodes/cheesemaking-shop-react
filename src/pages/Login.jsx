import React, { useState } from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { CiFacebook } from 'react-icons/ci'
import { FaGoogle, FaVk, FaYandex } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const emailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const passwordChange = (e) => {
        setPassword(e.target.value);
      };
  return (
    <div>
      <div className='flex justify-center h-[65vh] mt-5'>
        <div className='bg-[#fff] w-[610px] p-5'>
            <div className='text-center mb-5'>
                <p className='text-[#4E2D2D] text-[28px] font-bold'>Постоянный покупатель</p>

            </div>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium ">Электронная почта</label>
                    <input type="email" onChange={emailChange} id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5 outline-none dark:placeholder-gray-400" placeholder="yourname@mail.com" required />
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium ">Ваш пароль</label>
                    <input type="password" onChange={passwordChange} id="password" className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5 outline-none "placeholder='От 8 и более символов' required />
                </div>
                <div className="flex items-start mb-5">
                </div>
                {email && password ? (
                    <Link to="/">
                        <button type="submit" className="text-white bg-[#FD9339] hover:bg-[#fff] hover:text-[#FD9339] border-2 border-[#FD9339] rounded-lg text-sm w-full px-5 py-2.5 text-center">Войти</button>
                    </Link>
                ) : (
                    <button type="submit" className="text-white bg-[#FD9339] hover:bg-[#fff] hover:text-[#FD9339] border-2 border-[#FD9339] rounded-lg text-sm w-full px-5 py-2.5 text-center cursor-not-allowed" disabled>Войти</button>
                )}
                <div className='flex justify-center mt-5 text-xl gap-5 cursor-pointer'>
                    <CiFacebook />
                    <FaGoogle />
                    <FaVk/>
                    <BsTwitter/>
                    <BsInstagram/>
                    <FaYandex/>
                </div>
            </form>
            <div className='text-center mt-12'>
                <p className='text-[#FD9339]'>Забыли пароль?</p>
            </div>
        </div>
        <div className='bg-[#FDF2D8] w-[610px] flex items-center justify-center flex-col p-5 text-[#4E2D2D] text-center'>
            <p className='text-[28px] font-semibold'>Создайте аккаунт</p>
            <p className='my-5'>Делайте покупки быстро и удобно, отслеживайте статус заказа и получайте скидки.</p>
            <button className='px-5 py-2 rounded-lg hover:text-[#fff] hover:bg-[#FD9339] text-[#FD9339] border-2 border-[#FD9339]'>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  )
}

export default Login
