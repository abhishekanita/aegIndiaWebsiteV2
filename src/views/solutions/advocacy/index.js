import React from 'react'
import Header from './Header'
import About from './About'
import Actions from './Action'
import Active from './Active'
import Footer from '../../footer/dark'

const index = () => {
    return (
        <div>
            <Header />
            <About />
            <Active />
            <Actions />
            <Footer />
        </div>
    )
}

export default index
