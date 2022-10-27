import React from 'react'
import { BsArrowLeftShort, BsArrowDownShort, BsArrowRightShort } from 'react-icons/bs'
import './partner.scss'


export default function Partner() {
    return (
        <div className='partner'>
            <div className="partner_title">
                <div className='partner_title_one'><h2>Информация</h2></div>
                <div className='partner_title_two'><h2>Интересное</h2></div>
            </div>
            <div className="partner_images">
                <div className="category_colum_item">
                    <img src="image/rectangle7_1.png" alt="category-img" />
                    <div className="category_colum_item_text one">
                        <h1>Доставка по всей России</h1>
                        <p>Мини текст описания и преимущества
                            покупки данного направления.</p>
                        <div className="icon">
                            <BsArrowLeftShort />
                        </div>
                    </div>
                </div>
                <div className="category_colum_item">
                    <img src="image/rectangle8.png" alt="category-img" />
                    <div className="category_colum_item_text one">
                        <h1>Как выбрать матрас</h1>
                        <p>Мини текст описания и преимущества
                            покупки данного направления.</p>
                        <div className="icon">
                            <BsArrowLeftShort />
                        </div>
                    </div>
                </div>
            </div>
            <div className="partner_images">
                <div className="category_colum_item">
                    <div className="category_colum_item_text two">
                        <h1><span>Бесплатная</span> <br />сборка</h1>
                        <p>Мини текст описания и преимущества
                            покупки данного направления.</p>
                        <div className="icon">
                            <BsArrowRightShort />
                        </div>
                    </div>
                    <img src="image/rectangle11.png" alt="category-img" />
                </div>
                <div className="category_colum_item">
                    <div className="category_colum_item_text two">
                        <h1>Спальни</h1>
                        <p>Мини текст описания и преимущества
                            покупки данного направления.</p>
                        <div className="icon">
                            <BsArrowRightShort />
                        </div>
                    </div>
                    <img src="image/rectangle12_1.png" alt="category-img" />
                </div>
            </div>
            <div className="partner_footer">
                <div className="partner_footer_column"><h2>лером</h2></div>
                <div className="partner_footer_column"><h2>показать еще новости <BsArrowDownShort /></h2></div>
                <div className="partner_footer_column"><h2>открыть раздел новости<BsArrowDownShort /></h2></div>
                <div className="partner_footer_column"><h2>лером</h2></div>
            </div>
        </div >
    )
}
