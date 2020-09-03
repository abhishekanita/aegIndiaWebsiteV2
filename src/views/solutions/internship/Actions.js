import React from 'react'

const Actions = () => {
    return (
        <div className="container space-bottom-1">
      <div className="row">
      <div className="col-lg-12 mb-3 mb-lg-0">
          
          <div className="card bg-primary text-white h-100 overflow-hidden p-5">
            <div className="w-65 pr-2">
              <h2 className="text-white">Resume Box</h2>
              <p className="text-white">We hire research interns for working with lawmakers for every Parliamentary session. You can submit you resume and we will contact you if your experience matches with our requirement.</p>
              <a className="btn btn-sm btn-light transition-3d-hover" href="services-agency.html#">Find Out More <i className="fas fa-angle-right ml-1"></i></a>
            </div>
            <div className="position-absolute right-0 bottom-0 w-50 mb-n3" style = {{marginRight: '-130px'}}>
              <img className="img-fluid" style = {{width: '40vh'}} src="/assets/img/internship/subscription.svg" alt="Description" />
            </div>
          </div>
          
        </div>

        {/* <div className="col-lg-4">
          
          <div className="card bg-warning text-white h-100 overflow-hidden p-5">
            <div className="w-65 pr-2">
              <h2 className="text-white">Subscribe</h2>
              <p className="text-white">Subscribe to us to get updates on new internships with Parliamentarians</p>
              <a className="btn btn-sm btn-light transition-3d-hover" href="services-agency.html#">Find Out More <i className="fas fa-angle-right ml-1"></i></a>
            </div>
            <div className="position-absolute right-0 bottom-0 w-50 mb-n3 mr-n4">
              <img className="img-fluid" src="/assets/img/internship/subscription.svg" alt="Description" />
            </div>
          </div>
          
        </div> */}
       
      </div>
    </div>
    )
}

export default Actions
