import React from 'react'

const Header = () => {
    return (
        <div className="position-relative bg-white overflow-hidden">
            <div className="container position-relative z-index-2 space-top-3 space-top-lg-4 space-bottom-2 space-bottom-md-3">
                <div className="row align-items-lg-around justify-content-around">
                <div className="col-lg-5 mb-5 mb-lg-0">
                    
                    <div className="mb-6">
                    <h1 className="text-white mb-3">
                        Connecting people with their rights
                    </h1>
                    <p className="text-white-70"> Using AI to build a conversational chatbot to engage people and assist them to determine their eligibility for various welfare schemes.</p>
                    </div>

                    <a className="btn btn-light btn-wide btn-pill shadow-soft transition-3d-hover mb-2 mb-sm-0 mr-4" href="app-payment.html#">Get Started</a>
                    
                </div>

                <div className="col-lg-4">
                    <div className="position-relative">
                    
                    <div className="device d-none d-sm-block mb-3 mb-sm-0 aos-init aos-animate" data-aos="fade-up">
                        <img className="img fluid ml-n12" src='/assets/img/nitiMilaap/mobile.svg' style = {{height: '50vh'}} alt="Description" />
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>

            
            <div className="bg-primary position-absolute top-0 right-0 bottom-0 left-0"></div>

            <figure className="d-none d-md-block position-absolute" style={{top: '0rem', left: '40rem', width: '62rem', height: '62rem'}}>
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 260 260">
                <circle fill="#1818EF" opacity=".1" cx="130" cy="130" r="130"></circle>
                </svg>
            </figure>
            <figure className="d-none d-md-block position-absolute" style={{top: '8rem', left: '40rem', width: '62rem', height: '62rem'}}>
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 260 260">
                <circle fill="#A612DD" opacity=".1" cx="130" cy="130" r="130"></circle>
                </svg>
            </figure>
            <figure className="d-none d-md-block position-absolute" style={{top: '5rem', left: '-10rem', width: '62rem', height: '62rem'}}>
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 260 260">
                <circle fill="#1919CC" opacity=".1" cx="130" cy="130" r="130"></circle>
                </svg>
            </figure>
            <figure className="d-none d-md-block position-absolute" style={{top: '-5rem', left: '-10rem', width: '75rem', height: '62rem'}}>
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 260 260">
                <circle fill="#1818EF" opacity=".1" cx="130" cy="130" r="130"></circle>
                </svg>
            </figure>

            <figure className="position-absolute bottom-0 right-0 left-0">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
                <polygon fill="#fff" points="0,273 1921,273 1921,0 "></polygon>
                </svg>
            </figure>
            
        </div>
    )
}

export default Header
