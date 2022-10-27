import React, { useState } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillClockCircle, AiFillCompass, AiOutlineSearch } from 'react-icons/ai'
import './topheader.scss'

export default function TopHeader() {

    const [acitve, setActive] = useState(0)

    const handleChange = (e) => {
        setActive(e)
    }

    return (
        <div className="header">
            <div className='top-header'>
                <div className="top-header_one">
                    <p><AiFillClockCircle /> Пн-Пт с 10:00 до 20:00<br />
                        Сб-Вс с 10:00 до 19:00F
                    </p>
                    <p><AiFillCompass /><a href="#">Наши салоны</a></p>
                </div>
                <div className="top-header_two">
                    <img src="image/logo.png" alt="logo" />
                </div>
                <div className="top-header_three">
                    <p>Отдел продаж: <BsFillTelephoneFill /> 8 (495) 664-54-57 <br /> 8 (929) 928-86-35</p>
                    <p>Звонки по Росии: <BsFillTelephoneFill /> 8-800-000-00-00<br /><span>Бесплатно</span></p>
                </div>
            </div>
            <div className="navbar">
                <ul>
                    <li className={acitve === 0 ? 'active' : 'link'} onClick={() => handleChange(0)}><div>Каталог</div></li>
                    <li className={acitve === 1 ? 'active' : 'link'} onClick={() => handleChange(1)}><a href="#">О нас</a></li>
                    <li className={acitve === 2 ? 'active' : 'link'} onClick={() => handleChange(2)}><a href="#">3D-моделирование</a></li>
                    <li className={acitve === 3 ? 'active' : 'link'} onClick={() => handleChange(3)}><a href="#">Покупателю</a></li>
                    <li className={acitve === 4 ? 'active' : 'link'} onClick={() => handleChange(4)}><a href="#">Доставка и оплата</a></li>
                </ul>
                <div className="search">
                    <input type="text" placeholder='Поиск по сайту...' />
                    <AiOutlineSearch />
                </div>
            </div>
        </div>
    )
}
