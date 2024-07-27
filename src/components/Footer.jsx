import React from 'react'
const Footer = () => {

    const footerMap = [
        {number: 1, title: 'Все материалы данного сайта являются объектами авторского права.', title2: 'Разработка сайта: ЛяЧиз', image: '../src/assets/logos/logo.svg' },
        
    ]
    const footerMap2 = [
        {number: 1, title: 'Компания', title2: 'О компании', title3:'Акции и скидки', title4:'Доставка и оплата', title5:'Отзывы', title6: 'Гарантия и возврат'},
        {number: 2, title: 'Поддержка', title2: 'Вопрос-ответ', title3: 'Бонусная программа', title4: 'Политика конфиденциальности', title5: 'Персональные данных' },
    ]

    const footerMap3 = [
        {number: 1, title: 'Способы оплаты', image: '../src/assets/logos/Ruble.svg', image2: '../src/assets/logos/Vector.svg', image3: '../src/assets/logos/Sberbank.svg', image4: '../src/assets/logos/Yandex.svg', image5: '../src/assets/logos/Mastercard.svg', image6: '../src/assets/logos/Visa.svg'}
    ]

    const footerMap4 = [
        {number: 1, phone: '+7 495 120-00-00', hour: 'Пн-пт 9:00 - 19:00', location: 'г. Москва,  улица Свободы 1/7', image: '../src/assets/icons/logo-instagram 1.svg', image2: '../src/assets/icons/logo-vk 1.svg', image3: '../src/assets/icons/logo-twitter 1.svg', image4: '../src/assets/icons/logo-facebook 1.svg', image5: '../src/assets/icons/logo-youtube 1.svg'}
    ]

  return (
    <div className='flex flex-wrap justify-between text-[#292929] gap-5 py-20'>
        {footerMap.map((item, index) => (
            <div key={index} className="w-[250px]">
                <img src={ item.image } className="img-fluid py-2" alt={item.title} />
                <h1 className='text-[#808080] py-2'>{ item.title }</h1>
                <h1 className='py-2'>{ item.title2 }</h1>
                
            </div>
        ))}
        {footerMap2.map((item, index) => (
            <div key={index} className="">
                <h1 className='font-bold pt-3 pb-5'>{ item.title }</h1>
                <h1 className='py-1'>{ item.title2 }</h1>
                <h1 className='py-1'>{ item.title3 }</h1>
                <h1 className='py-1'>{ item.title4 }</h1>
                <h1  className='py-1'>{ item.title5 }</h1>
                <h1 className='py-1'>{ item.title6 }</h1>
            </div>
        ))}
        {footerMap3.map((item, index) => (
            <div key={index} className="">
                <h1 className='font-bold py-3'>{ item.title }</h1>
                <div className=''>
                    <div className='flex items-center flex-wrap gap-3 py-2'>
                        <img src={ item.image } className="img-fluid" alt='' />
                        <img src={ item.image2 } className="img-fluid" alt='' />
                        <img src={ item.image3 } className="img-fluid" alt='' />
                        <img src={ item.image4 } className="img-fluid" alt='' />
                    </div>
                    <div className='flex items-center flex-wrap gap-3 py-2'>
                        <img src={ item.image5 } className="img-fluid" alt='' />
                        <img src={ item.image6 } className="img-fluid" alt='' />
                    </div>
                </div>
            </div>
        ))}
        {footerMap4.map((item, index) => (
            <div key={index} className="">
                <h1 className='font-bold py-3'>{ item.phone }</h1>
                <h1 className='py-1'>{ item.hour }</h1>
                <h1 className='py-1'>{ item.location }</h1>
                <div className='flex items-center gap-3 flex-wrap '>
                    <img src={ item.image } className="img-fluid" alt='' />
                    <img src={ item.image2 } className="img-fluid" alt='' />
                    <img src={ item.image3 } className="img-fluid" alt='' />
                    <img src={ item.image4 } className="img-fluid" alt='' />
                    <img src={ item.image5 } className="img-fluid" alt='' />
                    <img src={ item.image6 } className="img-fluid" alt='' />
                </div>
            </div>
        ))}
    </div>
  )
}

export default Footer

