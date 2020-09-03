import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'

const AppFlow = () => {
    return (
        <div>
            <div className="container space-2 space-lg-3">
      
      <div className="w-lg-50 text-center mx-lg-auto mb-5 mb-md-9">
        <p className = 'h3'>With our chatbot we aim to help spread awareness about the welfare schemes, especially of non-flagship schemes in the masses of India.</p>
      </div>
      

      
      <div className="row no-gutters align-items-lg-center mb-7 mb-md-11">
        <div className="col-lg-7 shadow-lg rounded">
            <img src = "/assets/img/nitiMilaap/connect.jpg" className = 'bg-img-hero text-center rounded w-100' alt = '...'/>
        </div>

        <div className="col-lg-5 bg-primary">
          <div className="py-9 px-5 px-sm-9">
            
            <div className="media mb-4">
              <span className="icon icon-xs icon-soft-light icon-circle mt-1 mr-3">
                <AiOutlineCheck className = 'mb-0 mt-0' size = {15}/>
              </span>
              <div className="media-body">
                <h4 className="text-white mb-1">Increasing utilization of schemes</h4>
                <p className="text-white-70 mb-0">With increased awareness, people are more likely to apply for seeking benefit</p>
              </div>
            </div>
            <div className="border-top opacity-xs mb-4"></div>
            <div className="media mb-4">
              <span className="icon icon-xs icon-soft-light icon-circle mt-1 mr-3">
                <AiOutlineCheck className = 'mb-0 mt-0' size = {15}/>
              </span>
              <div className="media-body">
                <h4 className="text-white mb-1">Leveraging network</h4>
                <p className="text-white-70 mb-0">Partnerships with MPs &amp; NGOs for increasing adoption at ground level</p>
              </div>
            </div>
            <div className="border-top opacity-xs mb-4"></div>
            <div className="media">
              <span className="icon icon-xs icon-soft-light icon-circle mt-1 mr-3">
                <AiOutlineCheck className = 'mb-0 mt-0' size = {15}/>
              </span>
              <div className="media-body">
                <h4 className="text-white mb-1">Multilingual interface</h4>
                <p className="text-white-70 mb-0">This will promote uptake of the chatbot &amp; create awareness in masses</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      


    </div>
        </div>
    )
}

export default AppFlow
