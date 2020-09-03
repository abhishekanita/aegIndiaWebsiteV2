import React from 'react'

const Header = () => {
    return (
        <div className="container space-top-3 space-top-lg-4 space-bottom-2 space-bottom-lg-2">
        <div className="row justify-content-lg-between mb-7">
          <div className="col-md-6 col-lg-5">
            
            <div className="mb-5">
              <h1>Advocating policies for a new India</h1>
              <p>Built with the belief in a collaborative approach to policy making</p>
            </div>
  
            <div className="mb-3">
              <a className="btn-link pointer mb-2 mb-sm-0" href="app-saas.html#">Check Our Climate Action Group <i className="fas fa-angle-right fa-sm ml-1"></i></a>
            </div>
            
          </div>
  
          <div className="col-md-6 d-none d-md-inline-block">
            
            <figure className="w-100">
              <img className="img-fluid" src="/assets/img/advocacy/people.svg" alt="Description" />
            </figure>
            
          </div>
        </div>
  
        
        
        
      </div>
    )
}

export default Header
