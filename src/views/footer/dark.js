import React from 'react'
import {AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const DarkFooter = () => {
    return (
    <footer className="bg-navy">
        <div className="container">
         
    
          <hr className="opacity-xs my-0" />
    
          <div className="space-1">
            <div className="row align-items-md-center mb-7">
              <div className="col-md-6 mb-4 mb-md-0">
                
                <ul className="nav nav-sm nav-white nav-x-sm align-items-center">
                  <li className="nav-item">
                    <Link to = '/contact' className="nav-link">Contact Us</Link>
                  </li>
                  <li className="nav-item opacity mx-3">/</li>
                  <li className="nav-item">
                    <Link to = '/about' className="nav-link">About us</Link>
                  </li>
                </ul>
                
              </div>
    
              <div className="col-md-6 text-md-right">
                <ul className="list-inline mb-0">
                  
                  <li className="list-inline-item">
                    <Link to = '' className="btn btn-xs btn-icon btn-soft-light" >
                        <AiFillFacebook size = {24}/>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to = '' className="btn btn-xs btn-icon btn-soft-light" >
                        <AiFillTwitterSquare size = {24}/>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to = '' className="btn btn-xs btn-icon btn-soft-light" >
                      <AiFillLinkedin size = {24}/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
    
            
            <div className="w-md-75 text-lg-center mx-lg-auto">
              <p className="text-white opacity-sm small">© AEGD Foundation. 2020. All rights reserved.</p>
            </div>
            
          </div>
        </div>
      </footer>
    )
}

export default DarkFooter
