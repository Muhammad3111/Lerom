import React from 'react'
import './footer.scss'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="columns">
                <div className="columns_column">
                    <h2>О компании</h2>
                    <p>Производство</p>
                    <p>Награды</p>
                    <p>Сертификаты</p>
                </div>
                <div className="columns_column">
                    <h2>Покупателю</h2>
                    <p> Как сделать заказ</p>
                    <p>Рекомендации по сборке</p>
                    <p> Договор публичной оферты</p>
                </div>
                <div className="columns_column">
                    <h2>Полезная информация</h2>
                    <p>Всё о фасадах</p>
                    <p>Всё о фурнитуре</p>
                    <p>Всё о ЛДСП</p>
                </div>
                <div className="columns_column">
                    <h2>3D-моделирование</h2>
                    <p>Запустить онлайн,<br />
                        от 2 Мбит/с</p>
                    <p>Скачать на компьютер,<br />
                        606 Мб</p>
                </div>
                <div className="columns_last">
                    <h3>Рассрочка</h3>
                    <h3>Гарантия</h3>
                    <h3>Контакты</h3>
                </div>
            </div>
            <div className="bottom-text">
                <p>Все права защищены. Любое копирование и использование материалов сайта разрешено только с письменного согласия правообладателя. Не является публичной офертой.</p>
            </div>
        </div>
    )
}
