import React from 'react'
import { Link } from 'react-router-dom'
import blogsJSON from '../../content/blogs/index.json'

const about = () => {
    return (
      <div className="overflow-hidden">
      <div className="container space-2 space-top-lg-3">
        <div className="row justify-content-lg-between">
          <div className="col-lg-5 mb-9 mb-lg-0">
           

            <div className="mb-5">
            <h2>Blogs and our Research Papers</h2>
              <p>Explore and learn more our work, the challenges we face and our understand of the problems.</p>
            </div>

            <Link to = '/blogs' className="btn btn-primary transition-3d-hover px-4">View all blogs</Link>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6 mb-5 mb-sm-0">
              
                <Link to = {`/blog/${blogsJSON[0].id}`} className="d-block aos-init aos-animate">
                  <img className="img-fluid w-100 rounded" style = {{height: '200px', objectFit: 'cover'}} src={blogsJSON[0].coverImage} alt="Description" />
                  <div className="shadow-none py-4">
                    <h4>{blogsJSON[0].title}</h4>
                    <p className="text-body">{blogsJSON[0].description}</p>
                    <span className="font-size-1 font-weight-bold">Learn More <i className="fas fa-angle-right fa-sm ml-1"></i></span>
                  </div>
                </Link>
              
              </div>

              <div className="col-sm-6">
             
              <Link to = {`/blog/${blogsJSON[1].id}`} className="d-block aos-init aos-animate">
                  <img className="img-fluid w-100 rounded" style = {{height: '200px', objectFit: 'cover'}} src={blogsJSON[1].coverImage} alt="Description" />
                  <div className="shadow-none py-4">
                    <h4>{blogsJSON[1].title}</h4>
                    <p className="text-body">{blogsJSON[1].description}</p>
                    <span className="font-size-1 font-weight-bold">Learn More <i className="fas fa-angle-right fa-sm ml-1"></i></span>
                  </div>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default about
