import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Category from '../components/Category/Category'
import Logos from '../components/Logos/Logos'
import Partner from '../components/Partner/Partner'

export default function Home() {
    return (
        <div className='home-page'>
            <Banner />
            <Category />
            <About />
            <Partner />
            <Logos />
        </div>
    )
}
