import React, {useState, useEffect, useRef} from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import AnimateHeight from 'react-animate-height'
import {Link} from 'react-router-dom'

const Nav = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, [])

    useEffect(() => {
      if(width > 991) setCollapsed(false)
      else if(width < 990) setCollapsed(true)
    }, [width])

    return (
      <header id="header" className="header header-box-shadow-on-scroll header-sticky-top header-show-hide" data-hs-header-options="{
        &quot;fixMoment&quot;: 1000,
        &quot;fixEffect&quot;: &quot;slide&quot;
      }">
      <div className="header-section">
        <div id="logoAndNav" className="container">
          <nav className="js-mega-menu navbar navbar-expand-lg hs-menu-initialized hs-menu-horizontal">
            <Link to = '/' className="navbar-brand" href="index.html" aria-label="Front">
              <img src="/assets/img/logos/logo4.png" alt="Logo" style = {{width: '200px'}}/>
            </Link>

            <button type="button" className={`navbar-toggler btn btn-icon btn-sm rounded-circle ${collapsed ? 'collapsed' : ''}`} onClick = {() => setCollapsed(prev => !prev)}>
              <span className="navbar-toggler-default">
                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"></path>
                </svg>
              </span>
              <span className="navbar-toggler-toggled">
                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"></path>
                </svg>
              </span>
            </button>

            <div id="navBar" className={`navbar-collapse collapse show ${collapsed ? '' : 'show'}`}>
              <div className="navbar-body header-sticky-top-inner">
              <AnimateHeight height = {collapsed ? 0 : 'auto'} duration = {300}>
                <ul className="navbar-nav">
                  <li className="hs-has-sub-menu navbar-nav-item ">
                    <Link to = '/about' className="hs-mega-menu-invoker nav-link nav-link-toggle noDropdown">About</Link>
                  </li>
                  <Solutions width = {width}/>
                  <li className="hs-has-sub-menu navbar-nav-item ">
                    <Link to = '/blogs' className="hs-mega-menu-invoker nav-link nav-link-toggle noDropdown">Blogs</Link>
                  </li>
                  <li className="hs-has-sub-menu navbar-nav-item ">
                    <Link to = '/FAQs' className="hs-mega-menu-invoker nav-link nav-link-toggle noDropdown">FAQs</Link>
                  </li>
                  <li className="hs-has-sub-menu navbar-nav-item ">
                    <Link to = '/contact' className="hs-mega-menu-invoker nav-link nav-link-toggle noDropdown">Contact</Link>
                  </li>
                </ul>
            </AnimateHeight>
              </div>
            </div>
          </nav>
        </div>
      </div>
      </header>
    )
}

export default Nav


const Solutions = ({width}) => {

  const [hover, setHover] = useState(false);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const ref = useRef()
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setLeft(ref.current.getBoundingClientRect().left)
      setTop(ref.current.getBoundingClientRect().height)
    });
  }, [])

  useEffect(() => {
    if(ref){
      setLeft(ref.current.getBoundingClientRect().left)
      setTop(ref.current.getBoundingClientRect().height)
    }
  }, [ref])

  useEffect(() => {
    if(width < 992) setHover(false);
  }, [width])

  return (
    <li  className={`hs-has-sub-menu navbar-nav-item pointer ${hover ? 'hs-sub-menu-opened' : ''}`} onMouseOver = {() => setHover(true)} onMouseLeave = {() => setHover(false)}>
      <div ref = {ref} className="hs-mega-menu-invoker nav-link nav-link-toggle noDropdown d-flex align-items-center">Solution <AiFillCaretDown className = 'ml-1 mt-0 mb-0 pointer'/></div>
      <div className={`hs-sub-menu dropdown-menu hs-sub-menu-desktop-lg fadeOut animated ${hover ? 'slideInUp' : 'hs-reversed'}`} style={{minWidth: '230px', display: hover ? 'block' : 'none', left: (left) + 'px', animationDuration: '300ms', top: top, position: 'fixed'}}>
        <Link to = '/advocacy' className="dropdown-item" href="../blog/journal.html">Policy Advocacy</Link>
        <Link to = '/internship' className="dropdown-item" href="../blog/metro.html">Internship Program</Link>
        <Link to = '/nitiMilaap' className="dropdown-item" href="../blog/newsroom.html">Niti Milaap</Link>
      </div>
    </li>
  )
}

