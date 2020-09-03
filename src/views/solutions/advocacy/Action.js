import React, {useState} from 'react'

const Action = () => {

    const [email, setEmail] = useState('');

    const submit = async () => {
        try{
            console.log.log(email)
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <div className="overflow-hidden space-top-lg-1 space-bottom-lg-1">
      <div className="position-relative">
        <div className="container-fluid bg-light space-2 space-lg-0">
          <div className="row justify-content-sm-center align-items-lg-center text-center py-10">

            <div className="col-sm-8 col-lg-4">
              
              <div className="mb-5">
                <h2 className="h1">Want to help us bring change?</h2>
                <p>If you would like to know more about our initiative or want to explore the possibility of working with us</p>
              </div>
              
              <form className="js-validate">
                <label className="sr-only" for="signupSrEmail">Email</label>
                <div className="input-group">
                  <input type="email" className="form-control" value={email} onChange = {e => setEmail(e.target.value)} id="signupSrEmail" placeholder="Email" aria-label="Email" required="" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-block btn-primary" onClick = {() => submit()}>Get Started</button>
                  </div>
                </div>
              </form>
              
            </div>

           
          </div>
        </div>
      </div>
    </div>

            <div className="container space-bottom-2 space-bottom-lg-3">
                <div className="w-md-80 w-lg-60 text-center mx-md-auto mb-6"><h2 >Partners who are helping us bring change.</h2></div>

                <div className="row justify-content-center text-center space-top-1">
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-7 mb-lg-0">
                    <img className="max-w-11rem max-w-md-13rem mx-auto" src='/assets/svg/clients-logo/fitbit.svg' alt="Description" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-7 mb-lg-0">
                    <img className="max-w-11rem max-w-md-13rem mx-auto" src='/assets/svg/clients-logo/spotify.svg' alt="Description" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-7 mb-lg-0">
                    <img className="max-w-11rem max-w-md-13rem mx-auto" src='/assets/svg/clients-logo/kaplan.svg' alt="Description" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-7 mb-sm-0">
                    <img className="max-w-11rem max-w-md-13rem mx-auto" src='/assets/svg/clients-logo/weebly.svg' alt="Description" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <img className="max-w-11rem max-w-md-13rem mx-auto" src='/assets/svg/clients-logo/slack.svg' alt="Description" />
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <img className="max-w-11rem max-w-md-13rem mx-auto" src='/assets/svg/clients-logo/hubspot.svg' alt="Description" />
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Action
