import React, {useState} from 'react'


const Contact = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submit = async (e) => {
        e.preventDefault();
        try{
            console.log(firstName, lastName, email, message)
        } catch(err){
            console.log(err)
        }
    }

    return (
    <div>
        <div className="container space-top-3 space-top-lg-4 space-bottom-2">
        <div className="row">
            <div className="col-lg-6 mb-9 mb-lg-0">
            <div className="mb-5">
                <h1>Get in touch</h1>
                <p>We'd love to talk about how we can help you.</p>
            </div>
           

          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <span className="d-block h5 mb-1">Call us:</span>
                <span className="d-block text-body font-size-1">+91 7838237658</span>
              </div>

              <div className="mb-3">
                <span className="d-block h5 mb-1">Email us:</span>
                <span className="d-block text-body font-size-1">info@aegindia.in</span>
              </div>
            </div>

          
          </div>
        </div>

        <div className="col-lg-6">
          <div className="ml-lg-5">
            
            <form className="js-validate card shadow-lg mb-4" novalidate="novalidate">
              <div className="card-header border-0 bg-light text-center py-4 px-4 px-md-6">
                <h2 className="h4 mb-0">General Enquiries</h2>
              </div>

              <div className="card-body p-4 p-md-6">
                <div className="row">
                  <div className="col-sm-6">
                    
                    <div className="js-form-message form-group">
                      <label for="firstName" className="input-label">First name</label>
                      <input type="text" className="form-control" value={firstName} id="firstName" onChange = {e => setFirstName(e.target.value)} placeholder="Aditya" required  />
                    </div>
                    
                  </div>

                  <div className="col-sm-6">
                    
                    <div className="js-form-message form-group">
                      <label for="lastName" className="input-label">Last name</label>
                      <input type="text" className="form-control" value={lastName} id="lastName" onChange = {e => setLastName(e.target.value)} placeholder="Sangwan"  required  />
                    </div>
                    
                  </div>

                  <div className="col-sm-12">
                    
                    <div className="js-form-message form-group">
                      <label for="emailAddress" className="input-label">Email address</label>
                      <input type="email" className="form-control" value={email} id="emailAddress" onChange = {e => setEmail(e.target.value)} placeholder="aditya.sangwan@pixeel.com" aria-label="alex@pixeel.com" required/>
                    </div>
                    
                  </div>

                  <div className="col-sm-12">
                    
                    <div className="js-form-message form-group">
                      <label for="message" className="input-label">Message</label>
                      <div className="input-group">
                        <textarea className="form-control" rows="4" value={message} onChange = {e => setMessage(e.target.value)} id="message" placeholder="Hi there, I would like to ..." aria-label="Hi there, I would like to ..." required></textarea>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <button type="submit" className="btn btn-block btn-primary transition-3d-hover" onClick = {e => submit(e)}>Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Contact
