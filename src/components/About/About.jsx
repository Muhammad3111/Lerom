import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import './about.scss'


export default function About() {
    return (
        <div className='about'>
            <h1>Видеопрезентация<br /> «Лером»</h1>
            <div className="icon">
                <BsPlayCircle />
            </div>
            <button>
                Читать о компании
            </button>
        </div>
    )
}
