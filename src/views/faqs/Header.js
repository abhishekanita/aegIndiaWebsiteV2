import React from 'react'

const Header = () => {
    return (
        <div className="bg-img-hero" style={{backgroundImage: 'url(/assets/svg/components/abstract-shapes-12.svg)'}}>
        <div className="container space-top-3 space-top-lg-4 space-bottom-2 position-relative z-index-2">
            <div className="w-md-80 w-lg-60 text-center mx-md-auto">
            <h1>FAQ</h1>
            <p>Search our FAQ for answers to anything you might ask.</p>
            </div>
        </div>
        </div>
    )
}

export default Header
