import React from 'react'
import Footer from '../../footer/dark'
import Header from './Header'
import About from './About'
import AppFlow from './AppFlow'
import Data from './Data'

const index = () => {
    return (
        <div>
            <Header />
            <About />
            <AppFlow />
            <Data />
            <Footer />
        </div>
    )
}

export default index

