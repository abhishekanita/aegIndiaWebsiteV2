import React, {useEffect, useState, Fragment} from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
import blogJSON from '../../content/blogs/index.json'

const Blog = (props) => {

    const [blog, setBlog] = useState()

    useEffect(() => {
        console.log(props.match.params.id)
        console.log(blogJSON)
        console.log(blogJSON.filter(item => item.id === props.match.params.id)[0])
        setBlog(blogJSON.filter(item => item.id === props.match.params.id)[0])
    }, [props.match.params.id])

    return (
        <div>
            {blog && <div className="container space-top-3 space-bottom-2">
                <div className="w-lg-60 mx-lg-auto">
                    <div className="mb-4">
                        <h1 className="h2">{blog.title}</h1>
                    </div>
                    <Author blog = {blog}/>
                    <Content blog = {blog} />
                    <Footer blog = {blog}/>
                </div>
            </div>}
        </div>
    )
}

export default Blog


const Author = ({blog}) => {
    return (
        <div className="border-top border-bottom py-4 mb-5">
          <div className="row align-items-md-center">
            <div className="col-md-7 mb-5 mb-md-0">
              <div className="media align-items-center">
                <div className="avatar avatar-circle">
                  <img className="avatar-img" src={blog.authorImage} alt="Description" />
                </div>
                <div className="media-body font-size-1 ml-3">
                  <span className="h6">{blog.author}</span>
                  <span className="d-block text-muted">{blog.date}</span>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex justify-content-md-end align-items-center">
                <span className="d-block small font-weight-bold text-cap mr-2">Share:</span>
                    <a className="btn btn-xs btn-icon btn-soft-secondary rounded-circle ml-2" href={blog.authorSocialMedia.facebook} target = 'blank'>
                    <AiFillFacebook/>
                    </a>
                    <a className="btn btn-xs btn-icon btn-soft-secondary rounded-circle ml-2" href={blog.authorSocialMedia.twitter} target = 'blank'>
                    <AiFillTwitterSquare />
                    </a>
                    <a className="btn btn-xs btn-icon btn-soft-secondary rounded-circle ml-2" href={blog.authorSocialMedia.instagram} target = 'blank'>
                    <AiFillInstagram />
                    </a>
              </div>
            </div>
          </div>
        </div>
    )
}

const Footer = ({blog}) => {
    return (
        <Fragment>
            <div className="row justify-content-sm-between align-items-sm-center mt-5">
            <div className="col-sm-6 mb-2 mb-sm-0">
                <div className="d-flex align-items-center">
                <span className="d-block small font-weight-bold text-cap mr-2">Share:</span>

                <a className="btn btn-xs btn-icon btn-ghost-secondary rounded-circle mr-2" href="single-article.html#">
                    <AiFillFacebook size = {15}/>
                </a>
                <a className="btn btn-xs btn-icon btn-ghost-secondary rounded-circle mr-2" href="single-article.html#">
                    <AiFillTwitterSquare size = {15}/>
                </a>
                <a className="btn btn-xs btn-icon btn-ghost-secondary rounded-circle mr-2" href="single-article.html#">
                    <AiFillInstagram size = {15}/>                
                </a>
                </div>
            </div>
            </div>

            <div className="media align-items-center border-top border-bottom py-5 my-8">
            <div className="avatar avatar-circle avatar-xl">
                <img className="avatar-img" src={blog.authorImage} alt="Description" />
            </div>
            <div className="media-body ml-3">
                <small className="d-block small font-weight-bold text-cap">Written by</small>
                <h3 className="mb-0">{blog.author}</h3>
                <p className="mb-0">{blog.authorDescription}</p>
            </div>
            </div>
        </Fragment>
    )
}


const Content = ({blog}) => {
    return (
        <Fragment>
            {blog.content.map((item, index) => {
                switch(item.type){
                    case 'paragraph':
                        return <Paragraph content = {item.content}/>
                    case 'image':
                        return <Image src = {item.content}/>
                    case 'quote':
                        return <Quote author = {item.author} quote = {item.quote}/>
                    case 'bulletedList':
                        return <BulletedList content =  {item.content}/>
                    case 'numberedList':
                        return <NumberedList content =  {item.content}/>
                    case 'heading':
                        return <Heading content = {item.content} />
                    default:
                        return <></>
                }
            })}
        </Fragment>
    )
}


const Paragraph = ({content}) => {
    return (
        <div className = ''>
            <p>{content}</p>
        </div>
    )
}

const Image = ({src}) => {
    return (
        <div className = 'my-4 my-sm-8'>
            <img src = {src} alt = '...' className = 'img-fluid rounded'/>
        </div>
    )
}

const Quote = ({quote, author}) => {
    return (
        <blockquote className="bg-soft-primary border-0 rounded text-center text-dark font-size-2 font-weight-bold text-lh-lg p-5 my-5">
            "{quote}"
            <span className="d-block text-muted font-size-1 mt-2">- {author}</span>
        </blockquote>
    )
}

const Heading = ({content}) => {
    return <h3 className="mb-3">{content}</h3>
}


const BulletedList = ({content}) => {
    return (
        <ul className="list-article">
          {content.map((item, index) => <li key = {index}>{item}</li>)}
        </ul>
    )
}

const NumberedList = ({content}) => {
    return (
        <ol className="list-article">
          {content.map((item, index) => <li key = {index}>{item}</li>)}
        </ol>
    )
}