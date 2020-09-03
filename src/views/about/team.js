import React from 'react'
import {AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

const Team = () => {
    return (
        <div className="container space-2 space-lg-3">
      
      <div className="w-md-80 w-lg-60 text-center mx-md-auto mb-5 mb-md-9">
        <span className="d-block small font-weight-bold text-cap mb-2">Our team</span>
        <h2>Creative mind by people like you</h2>
      </div>
      

      <div className="row mx-n2 mb-5">
        <div className="col-sm-6 col-lg-6 px-2 mb-3">
          
          <div className="card h-100 transition-3d-hover">
            <div className="card-body">
              <div className="avatar avatar-lg avatar-circle mb-4">
                <img className="avatar-img" src="/assets/img/about/abhishek.png" style = {{width: '100px'}} alt="Description" />
              </div>

              <span className="d-block small font-weight-bold text-cap mb-1">Founder / CEO</span>
              <h4 className="text-lh-sm">Abhishek Anita</h4>
              <p className="font-size-1">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
            </div>

            <div className="card-footer border-0 pt-0">
              
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="btn btn-xs btn-icon btn-soft-secondary rounded" href="https://www.facebook.com/Abhishek.1804/">
                    <AiFillFacebook size = {24}/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-xs btn-icon btn-soft-secondary rounded" href="https://www.linkedin.com/in/abhishek-aggarwal-b2b1a8b0/">
                    <AiFillLinkedin size = {24}/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-xs btn-icon btn-soft-secondary rounded" href="https://www.instagram.com/abhishekanita/">
                    <AiFillTwitterSquare size = {24}/>
                  </a>
                </li>
              </ul>
              
            </div>
          </div>
          
        </div>

        <div className="col-sm-6 col-lg-6 px-2 mb-3">
          
          <div className="card h-100 transition-3d-hover">
            <div className="card-body">
              <div className="avatar avatar-lg avatar-circle mb-4">
                <img className="avatar-img" src="/assets/img/about/Aditya.jpg" alt="Description" />
              </div>

              <span className="d-block small font-weight-bold text-cap mb-1">Co-Founder / COO</span>
              <h4 className="text-lh-sm">Aditya Sangwan</h4>
              <p className="font-size-1">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
            </div>

            <div className="card-footer border-0 pt-0">
              
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="btn btn-xs btn-icon btn-soft-secondary rounded" href="https://www.facebook.com/adityasingh201196">
                    <AiFillFacebook size = {24}/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-xs btn-icon btn-soft-secondary rounded" href="https://www.linkedin.com/in/aditya-sangwan-824677133/">
                    <AiFillLinkedin size = {24}/>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-xs btn-icon btn-soft-secondary rounded" href="https://www.instagram.com/sangwan_adi/">
                    <AiFillInstagram size = {24}/>
                  </a>
                </li>
              </ul>
              
            </div>
          </div>
          
        </div>

       </div>
      
    </div>
    )
}

export default Team
