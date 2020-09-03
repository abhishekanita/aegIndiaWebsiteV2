import React from 'react'

const MPs = () => {
    return (
        <div>
            <div className="container space-1 space-lg-1">
      
      <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-4">
        <h4 className="d-block  font-weight-bold text-cap">Some of the MPs that we work with</h4>
      </div>
      

        <div className="row mx-n2" >
            <MP name = 'Dr Vikas Mahatme' desc = "Hon'ble Member of Parliament, Rajya Sabha" avatar = 'drVikasMahatme.jpg'/>
            <MP name = 'Mr Ashwini Vaishnaw' desc = "Hon'ble Member of Parliament, Rajya Sabha" avatar = 'ashwiniVaishnaw.jpg'/>
            <MP name = 'Smt Thamizhachi Thangapandian' desc = "Hon'ble Member of Parliament, Lok Sabha" avatar = 'sumathy.png'/>
            <MP name = 'Shri Anubhav Mohanty' desc = "Hon'ble Member of Parliament, Lok Sabha" avatar = 'anubhavMohanty.jpg'/>
        </div>
      
      
    </div>
        </div>
    )
}

export default MPs


const MP = ({avatar, name, desc}) => {
    return (
        <div className="col-sm-6 col-lg-3 px-2 mb-3" >
          <div className="card">
          <img className="img-fluid"  src={`/assets/img/internship/MPs/${avatar}`} alt="Description" />
            <div className="card-body text-center">
                <h4 className="mb-1">{name}</h4>
                <p className="font-size-1 mb-0">{desc}</p>
            </div>
          </div>
        </div>
    )
}


