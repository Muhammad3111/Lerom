import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './category.scss'

export default function Category() {
    return (
        <div className='category'>
            <div className="category_colum">
                <div className="category_colum_item">
                    <img src="image/rectangle4.png" alt="category-img" />
                    <div className="category_colum_item_text one">
                        <h1>Гостиные</h1>
                        <p>Мини текст описания и преимущества
                            покупки данного направления.</p>
                        <span>Товары под заказ в наличии: 2030шт</span>
                        <p>Цены от: 42.000р</p>
                        <div className="icon">
                            <BsArrowLeftShort />
                        </div>
                    </div>
                </div>
                <div className="category_colum_item">
                    <img src="image/rectangle6.png" alt="category-img" />
                    <div className="category_colum_item_text one">
                        <h1>Спальни</h1>
                        <p>Мини текст описания и преимущества
                            покупки данного направления.</p>
                        <span>Товары под заказ в наличии: 2030шт</span>
                        <p>Цены от: 42.000р</p>
                        <div className="icon">
                            <BsArrowLeftShort />
                        </div>
                    </div>
                </div>
            </div>
            <div className="category_colum">
                <div className="category_colum_item">
                    <div className="category_colum_item_text two">
                        <h1>Детские</h1>
                        <p>Мини текст описания и преимущества
                            покупки данного направления.</p>
                        <span>Товары под заказ в наличии: 2030шт</span>
                        <p>Цены от: 42.000р</p>
                        <div className="icon">
                            <BsArrowRightShort />
                        </div>
                    </div>
                    <img src="image/rectangle5.png" alt="category-img" />
                </div>
                <div className="category_colum_item">
                    <div className="category_colum_item_text two">
                        <h1>Прихожие</h1>
                        <p>Мини текст описания и преимущества
                            покупки данного направления.</p>
                        <span>Товары под заказ в наличии: 2030шт</span>
                        <p>Цены от: 42.000р</p>
                        <div className="icon">
                            <BsArrowRightShort />
                        </div>
                    </div>
                    <img src="image/rectangle7.png" alt="category-img" />
                </div>
            </div>
            <div className="category_colum_last">
                <div className="category_colum_item">
                    <img src="image/rectangle10.png" alt="category-img" />
                    <div className="category_colum_item_text one">
                        <h1>Кровати</h1>
                        <p>Мини текст описания и преимущества
                            покупки данного направления.</p>
                        <span>Товары под заказ в наличии: 2030шт</span>
                        <p>Цены от: 42.000р</p>
                        <div className="icon">
                            <BsArrowLeftShort />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
