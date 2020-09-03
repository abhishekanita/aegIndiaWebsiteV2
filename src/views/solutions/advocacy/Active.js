import React from 'react'
import {Link} from 'react-router-dom'

const Active = () => {
    return (
        <div>
            <div id="caseStudies" className="container space-2 space-lg-2">
      
      <div className="aos-init aos-animate">
          <Link to = '/advocacy/PGCA'>
        <div className="card shadow-none bg-soft-success text-inherit transition-3d-hover p-4 p-md-7 mb-3 mb-md-5" >
          <div className="row">
            <div className="col-lg-4 order-lg-2 mb-5 mb-lg-0">
              <div className="d-flex flex-column h-100">
                <div className="mb-7">
                  <h2 className="h3">Parliamentarians Group for Climate Action</h2>
                  <p className="text-body">Group focused on bringing macro-level policy changes in our fight against climate change</p>
                </div>

                
                <div className="card shadow-none p-4 mt-auto">

                  <div className="mb-3">
                    <blockquote className="text-dark">"The template is really nice and offers quite a large set of options. It's beautiful and the coding is done quickly and seamlessly. Thank you!"</blockquote>
                  </div>

                  <div className="media">
                    <div className="avatar avatar-circle mr-3">
                      <img className="avatar-img" src="/assets/img/internship/MPs/drVikasMahatme.jpg" alt="Description" />
                    </div>
                    <div className="media-body">
                      <span className="d-block h5 mb-0">Dr Vikas Mahatme</span>
                      <small className="d-block text-muted">Hon'ble Member of Parliament</small>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="col-lg-8 order-lg-1">
              
              <div className="mb-5">
                <img className="img-fluid rounded" src="/assets/img/advocacy/climateChange.jpg" alt="Description" />
              </div>

              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <h4>Objective</h4>
                  <p className="text-body">Supporting existing systems in India with the necessary policies to fight the impact of climate change.</p>
                </div>

                <div className="col-sm-6">
                  <h4>Initiatives</h4>
                  <p className="text-body">Combating Air pollution caused by Diesel Generator sets in India</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>s
        </Link>
      </div>
    </div>
    </div>
    )
}

export default Active
