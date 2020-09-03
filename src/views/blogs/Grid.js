import React, {useState} from 'react'
import blogJSON from '../../content/blogs/index.json'
import {Link} from 'react-router-dom'

const Grid = () => {
    return (
    <div className = 'container space-top-md-2 space-bottom-2 space-bottom-lg-3'>
      
      <ActiveBlog />

      <div className="row mb-3">
          {blogJSON.map((item, index) => <GridItem key = {index} blog = {item}/>)}
      </div>

    </div>
    )
}

export default Grid


const ActiveBlog = () => {

  const [blog] = useState(blogJSON.filter(item => item.active)[0])
  console.log(blog)

  return (
    <article className="card mb-11">
        <div className="row no-gutters">
          <div className="col-lg-8">
            <div className="position-relative overflow-hidden">
              <img className="card-img" src={blog.coverImage} alt="Description" />
              <figure className="d-none d-lg-block">
                <svg className="ie-curved-x position-absolute top-0 right-0 bottom-0 mr-n1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.1 1920" height="101%">
                  <path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z"></path>
                </svg>
              </figure>
              <figure className="d-lg-none mb-n1">
                <svg className="ie-curved-y position-absolute right-0 bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </svg>
              </figure>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card-body d-flex flex-column h-100 p-4 p-lg-5">
              <h2><Link className="text-inherit" to={`/blog/${blog.id}`}>{blog.title}</Link></h2>
              <p>{blog.description}</p>
              <div className="media align-items-center mt-auto">
                <div className="avatar-group">
                  <div className="avatar avatar-xs avatar-circle">
                    <img className="avatar-img" src={blog.authorImage} alt="Description" />
                  </div>
                </div>
                <div className="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                  {blog.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      )

}


const GridItem = ({blog}) => {
    return (
        <div className="col-sm-6 col-lg-4 mb-3 mb-sm-8">

        <article className="card h-100">
          <div className="card-img-top position-relative">
            <img className="card-img-top" src={blog.coverImage} alt="Description" />
            <figure className="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
              </svg>
            </figure>
          </div>

          <div className="card-body">
            <h3><Link className="text-inherit" to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
            <p>{blog.description}</p>
          </div>

          <div className="card-footer border-0 pt-0">
            <div className="media align-items-center">
              <div className="avatar-group">
                <div className="avatar avatar-xs avatar-circle" href="newsroom.html#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Aaron Larsson">
                  <img className="avatar-img" src={blog.authorImage} alt="Description" />
                </div>
              </div>
              <div className="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                {blog.date}
              </div>
            </div>
          </div>
        </article>
        
      </div>
    )
}
