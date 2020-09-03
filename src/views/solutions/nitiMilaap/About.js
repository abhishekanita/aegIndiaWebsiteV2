import React from 'react'

const About = () => {
    return (
        <div>
            <PointTwo />
            <PointOne />
        </div>
    )
}

export default About


const PointOne = () => {
    return(
        <div className="container space-top-lg-3 space-bottom-lg-2">
      <div className="row justify-content-lg-between align-items-lg-center">
        <div className="col-lg-5 order-lg-2 mb-9 mb-lg-0">
          <div className="mb-5">
            <h2>Integration with Facebook messenger</h2>
            <p>To leverage the power of the digital revolution for  increasing  the outreach &amp; awareness among citizens.</p>
          </div>

          
        </div>

        <div className="col-lg-6 order-lg-1">
          <div className="position-relative max-w-50rem mx-auto aos-init aos-animate" data-aos="fade-up">
            <div className="device device-iphone-x w-75 mx-auto">
              <img className="device-iphone-x-frame" src="/assets/svg/components/iphone-x.svg" alt="Description" />
              <img className="device-iphone-x-screen" src="/assets/img/nitiMilaap/chat2.jpeg" alt="Description" />
            </div>
            <div className="position-absolute bottom-0 right-0 max-w-50rem w-100 z-index-n1 mx-auto">
              <img className="img-fluid" src="/assets/svg/components/abstract-shapes-3.svg" alt="Description" />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}


const PointTwo = () => {
    return (
        <div className="container space-top-2 space-top-lg-3 space-bottom-lg-2">
      <div className="row justify-content-lg-between align-items-lg-center">
        <div className="col-lg-5 mb-9 mb-lg-0">
          <div className="mb-5">
              <h2>Repository of Central welfare schemes</h2>
              <p>Comprehensive database of meticulously researched Central Government welfare schemes, presented in an easy to understand way </p>
            </div>
        </div>

        <div className="col-lg-6">
          <div className="position-relative max-w-50rem mx-auto aos-init aos-animate" data-aos="fade-up">
            <div className="device device-iphone-x w-75 mx-auto">
              <img className="device-iphone-x-frame" src='/assets/svg/components/iphone-x.svg' alt="Description" />
              <img className="device-iphone-x-screen" src="/assets/img/nitiMilaap/chat1.jpeg" alt="Description" />
            </div>

            <div className="position-absolute bottom-0 right-0 max-w-50rem w-100 z-index-n1 mx-auto">
              <img className="img-fluid" src='/assets/svg/components/abstract-shapes-4.svg' alt="Description" />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}