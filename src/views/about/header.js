import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
        <div className="container space-top-3 space-top-lg-4 space-bottom-2">
            <div className="w-lg-80 text-center mx-lg-auto">
                <div className="mb-5 mb-md-11">
                <h1 className="display-4">About Us</h1>
                <p className="lead">AEG is a not-for-profit organisation that primarily engages with lawmakers to build effective governance systems in India.</p>
                </div>
            </div>

            
            <div className="row mx-n2">
                <div className = 'col-4 col-md px-2 mb-3'>
                    <div className="h-100 bg-img-hero" style={{backgroundImage: 'url(aegIndiaWebsite/assets/img/about/parliament.jpg)'}}></div>
                </div>
                <div className = 'col-4 col-md px-2 mb-0'>
                    <div className = 'row'>
                        
                        <div className="col-6 col-md-6 d-none d-md-block px-2 mb-3">
                            <div className="h-250rem bg-img-hero" style={{height: '300px', backgroundImage: 'url(aegIndiaWebsite/assets/img/about/education.jpg)'}}></div>
                        </div>
                        <div className="col-6 col-md px-2 mb-3">
                            <div className="h-250rem bg-img-hero h-100" style={{backgroundImage: 'url(aegIndiaWebsite/assets/img/about/tech.webp)'}}></div>
                        </div>
                    </div>
                </div>
              
            </div>
            
        </div>
        <div className="container space-2 space-top-2 space-bottom-3">
        <div className="row justify-content-lg-between">
            <div className="col-lg-6">
            <p>Through our years of experience, we have understood that even though our lawmakers are willing to bring about change, their efforts are not able to bring sustainable impact in the absence of a conducive environment and a lack of skilled manpower. </p>
            </div>
            <div className="col-lg-5 mb-5 mb-lg-0">
            <h3>Our mission is to create an enabling environment for all the stakeholders to collaborate &amp; address various challenges and create scalable impact.</h3>
            </div>
        </div>
        </div>

        
        </Fragment>
    )
}

export default Header
