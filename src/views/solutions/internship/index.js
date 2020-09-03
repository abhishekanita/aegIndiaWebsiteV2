import React, { Fragment } from 'react'
import Header from './Header'
import Impact from './Impact'
import Testimonials from './Testimonials'
import Actions from './Actions'
import MPs from './MPs'
import Footer from '../../footer/dark'

const index = () => {
    return (
        <Fragment>
            <Header/>
            <Impact/>
            <MPs/>
            <Testimonials/>
            <Actions/>
            <Footer/>
        </Fragment>
    )
}

export default index
