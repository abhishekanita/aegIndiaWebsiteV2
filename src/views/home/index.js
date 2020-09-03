import React from 'react'
import Header from './header'
import Verticals from './verticals'
import Impact from'./impact'
import Testimonials from './testimonials'
import Blogs from './blogs'
import Footer from '../footer/dark'

const Home = () => {
    return (
        <div>
            <Header />
            <Verticals />
            <Impact />
            <Testimonials />
            <Blogs />
            <Footer />
        </div>
    )
}

export default Home
