import React from 'react'
import {Link} from 'react-router-dom'

const verticals = () => {
    return (
      <div className="container space-2 space-top-xl-3 space-bottom-lg-3">
     
      <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <h2>Learn to develop sites with components and design systems</h2>
      </div>
     

      <div className="row mx-n2 mx-lg-n3">
        <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 aos-init aos-animate">
         
          <Link to = '/internship' className="card bg-primary text-left h-100 transition-3d-hover">
            <div className="card-body">
              <div className="mb-5">
                <h3 className="text-white">Legislative Research Support</h3>
                <p className="text-white"> 
                We work with Parliamentarians to strengthen their research capabilities for better parliamentary engagement.</p>
              </div>
              <img className="img-fluid w-100" src="/assets/img/home/research.svg" alt="Description" />
            </div>
            <div className="card-footer border-0 bg-transparent pt-0">
              <span className="font-size-1 text-white font-weight-bold">Learn more <i className="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </Link>
         
        </div>

        <div className="col-sm-6 col-lg-4 px-2 px-lg-3 mb-3 mb-lg-0 aos-init aos-animate">
         
          <Link to = '/advocacy' className="card bg-navy text-left h-100 transition-3d-hover" >
            <div className="card-body">
              <div className="mb-5">
                <h3 className="text-white">Advocacy Groups</h3>
                <p className="text-white">Advocacy groups are a unique platform for MPs, NGOs &amp; subject experts to come together &amp; discuss and advocacy better public policies. </p>
              </div>
              <img className="img-fluid w-100" src="/assets/img/home/advocacy.svg" alt="Description" />
            </div>
            <div className="card-footer border-0 bg-transparent pt-0">
              <span className="font-size-1 text-white font-weight-bold">Learn More <i className="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </Link>
         
        </div>

        <div className="col-sm-6 col-lg-4 px-2 px-lg-3 aos-init aos-animate">
         
          <Link to = '/nitiMilaap' className="js-go-to card bg-warning text-left h-100 transition-3d-hover">
            <div className="card-body">
              <div className="mb-5">
                <h3 className="text-white">Niti Milaap</h3>
                <p className="text-white">It is an interactive chatbot that helps citizens identify their eligibility for Central welfare schemes.  </p>
              </div>
              <img className="img-fluid w-100" src="/assets/img/home/nitiMilaap.svg" alt="Description" />
            </div>
            <div className="card-footer border-0 bg-transparent pt-0">
              <span className="font-size-1 text-white font-weight-bold">Learn More <i className="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </Link>
         
        </div>
      </div>
    </div>
    )
}

export default verticals
