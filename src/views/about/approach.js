import React from 'react'

const Approach = () => {
    return (
        <div id="aboutSection" className="bg-light rounded mx-3 mx-md-11 space-2 space-lg-2">
      
      <div className="w-lg-65 text-center mx-auto mb-5 mb-sm-9">
        <h2 className="h2">Our Approach</h2>
        <p>We believe in leveraging the powers of following systems to realise our vision:</p>
      </div>
      

      <div className="row">
        <div className="col-md-4 mb-7">
          
          <div className="text-center px-lg-3">
            <figure className="max-w-8rem mx-auto mb-4">
              <img className="img-fluid" src='/assets/img/about/institution.svg' alt="SVG" />
            </figure>
            <h3>Power of Institutions</h3>
            <p>Enhancing the power of institutions to become agents of change.</p>
          </div>
          
        </div>

        <div className="col-md-4 mb-7">
          
          <div className="text-center px-lg-3">
            <figure className="max-w-8rem mx-auto mb-4">
              <img className="img-fluid" src='/assets/img/about/unity.svg' alt="SVG" />
            </figure>
            <h3>Power of Unity</h3>
            <p>Providing a common platform for various stakeholders to come together &amp; advocate policy changes.</p>
          </div>
          
        </div>

        <div className="col-md-4 mb-7">
          
          <div className="text-center px-lg-3">
            <figure className="max-w-8rem mx-auto mb-4">
              <img className="img-fluid" src='/assets/img/about/tech.svg' alt="SVG" />
            </figure>
            <h3>Power of Technology</h3>
            <p>Using state-of-the-art technology to build awareness among masses</p>
          </div>
          
        </div>
      </div>

      <img className="img-fluid d-none d-md-block w-75 mx-auto mb-7" src='/assets/svg/components/three-pointers.svg' alt="SVG Arrow" />

      
      <div className="w-md-60 w-lg-50 text-center mx-auto mb-7">
        <p className="text-dark">This approach helps in creating a <span className="font-weight-bold">collaborative ecosystem</span> that allows for the development of laws &amp; policies which are in-tune with the challenges of our time.</p>
      </div>
      


    </div>
    )
}

export default Approach
