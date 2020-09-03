import React, {useState, useEffect, useRef} from 'react'
import Footer from '../../footer/dark'
import Flickity from 'react-flickity-component'

const PGCA = () => {
    return (
        <div>
            <Header />
            <About />
            <Team />
            <Footer />
        </div>
    )
}


export default PGCA


const Header = () => {
    return (
        <div className="position-relative border-bottom">
      
      <div id="heroNav" className="js-slick-carousel slick slick-equal-height slick-initialized slick-slider slick-dotted">
        <div className="slick-list draggable" style={{height: '574.688px'}}>
            <div className="slick-track" style={{opacity: 1, width: '4520px', transform: 'translate3d(-1808px, 0px, 0px)'}}>
                <div className="js-slide gradient-y-overlay-sm-dark bg-img-hero slick-slide slick-cloned" style = {{backgroundImage: 'url(/assets/img/home/header.jpg)', width: '904px'}}>
          
          <div className="container d-md-flex align-items-md-center vh-md-70 space-top-4 space-bottom-3 space-md-0">
            <div className="w-80 w-lg-50">
              <span className="d-block h3 text-white mb-2" >
                It is an
              </span>
              <h2 className="text-white display-4 mb-0"  >
                Easy business with Front template
              </h2>
            </div>
          </div>
          
        </div><div className="js-slide gradient-y-overlay-sm-dark bg-img-hero slick-slide" style={{backgroundImage: 'url(/assets/img/home/header.jpg)', width: '904px', height: 'auto'}}>
          
          <div className="container d-md-flex align-items-md-center vh-md-70 space-top-4 space-bottom-3 space-md-0">
            <div className="w-80 w-lg-50">
              <span className="d-block h3 text-white mb-2"  style={{opacity: 0}}>
                Front is a
              </span>
              <h1 className="text-white display-4 mb-0"   style={{animationDelay: '200ms', opacity: '0'}}>
                Self-mastering template
              </h1>
            </div>
          </div>
          
        </div>
      </div></div>

                </div>
      

    </div>
    )
}


const About = () => {
    return (
        <></>
    )
}


const Team = () => {

    const cardRef = useRef();
    const [width, setWidth] = useState('')

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(cardRef.current.width))
    }, [])

    useEffect(() => {
        setWidth(cardRef.current.width)
    }, [cardRef])

    return (
    <div ref = {cardRef} className="bg-navy rounded mx-3 mx-xl-10" style={{overflow: 'hidden', backgroundImage: 'url(/assets/svg/components/abstract-shapes-20.svg)'}}>
        <div className="container-xl container-fluid space-1 space-md-2 px-4 px-md-8 px-lg-10">
            <div className="px-3">
                <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
                    <span className="d-block small text-white-70 font-weight-bold text-cap mb-2">Success stories</span>
                    <h2 className="text-white">See how Front is helping teams get organized and work smarter</h2>
                </div>

                <div className="js-slick-carousel slick slick-equal-height ie-slick-equal-height slick-gutters-3 slick-initialized slick-slider slick-dotted">
                    <div className="slick-list draggable">
                        <Flickity clasName="slick-track" elementType={'div'} options = {options} disableImagesLoaded={false} reloadOnUpdate static>
                            <TeamItem width = {width}/>
                            <TeamItem width = {width}/>
                            <TeamItem width = {width}/>
                            <TeamItem width = {width}/>
                            <TeamItem width = {width}/>
                            <TeamItem width = {width}/>
                        </Flickity>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const TeamItem = ({width}) => {

    return (
        <div className="js-slide mb-4 slick-slide slick-cloned" style={{width: '300px'}}>
            <div className="card h-100">
                <img className="card-img-top" src="/assets/img/home/header.jpg" alt="Description" />
                <div className="card-body">
                    <div className="max-w-13rem w-100 mb-3"> <h4>Dr Vikas Mahatme</h4>
                </div>
                <p className="mb-0">Google is an innovator in public safety technology. First-to-market with TASER conducted energy weapons (CEWs).</p>
                </div>
                <div className="card-footer border-0 pt-0">
                    <a className="font-weight-bold" href="../pages/customer-story.html" tabindex="-1">
                        Read story
                    </a>
                </div>
            </div>
        </div>
    )
}

const options = {
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    fade: true,
    imagesLoaded: true,
    cellAlign: 'left'
}