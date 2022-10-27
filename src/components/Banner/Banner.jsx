import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GoScreenFull } from 'react-icons/go'
import { BsPerson, BsStar } from 'react-icons/bs'
import { Navigation } from "swiper";
import './banner.scss'


export default function Banner() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="image/rectangle1.png" alt="banner" />
                    <div className="banner-text">
                        <h1>Производим мебель с 1997 года</h1>
                        <h5>Мы готовы принять и передать ваш  заказ на мебель
                            региональному представительству.
                        </h5>
                        <p>Для этого пришлите ваши пожелания и контактную
                            информацию нам на почту zakaz@lerom.ru
                        </p>
                        <div className="banner-text_icons">
                            <div className="banner-text_icons_item">
                                <span><GoScreenFull /></span>
                                <div className="banner-text_icons_item_text">
                                    <h5> 100 000 м2</h5>
                                    <p>Производственная <br />площадь.</p>
                                </div>
                            </div>
                            <div className="banner-text_icons_item">
                                <span><BsPerson /></span>
                                <div className="banner-text_icons_item_text">
                                    <h5> 1 100 чел</h5>
                                    <p>Рабочий<br />
                                        коллектив.</p>
                                </div>
                            </div>
                            <div className="banner-text_icons_item">
                                <span><BsStar /></span>
                                <div className="banner-text_icons_item_text">
                                    <h5> Официально</h5>
                                    <p>Мы находимся в национальном реестре промышленных предприятий.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src="image/rectangle1.png" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src="image/rectangle1.png" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src="image/rectangle1.png" alt="banner" /></SwiperSlide>
            </Swiper>
        </>
    );
}