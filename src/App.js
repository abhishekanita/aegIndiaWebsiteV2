import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from './HOC/ScrollToTop'
import Home from './views/home'
import About from './views/about'
import Internship from './views/solutions/internship'
import Advocacy from './views/solutions/advocacy'
import NitiMilaap from './views/solutions/nitiMilaap'
import Contact from './views/contact'
import FAQs from './views/faqs'
import Blogs from './views/blogs'
import Blog from './views/blogs/Blog'
import Nav from './views/nav'
import PGCA from './views/solutions/advocacy/PGCA';

function App() {
  return (
      <Router>
        <Nav />
        <ScrollToTop>
        <Switch>
          <Route exact path = '/about' component = {About}/>
          <Route exact path = '/internship' component = {Internship}/>
          <Route exact path = '/advocacy' component = {Advocacy}/>
          <Route exact path = '/advocacy/PGCA' component = {PGCA}/>
          <Route exact path = '/nitiMilaap' component = {NitiMilaap}/>
          <Route exact path = '/contact' component = {Contact}/>
          <Route exact path = '/FAQs' component = {FAQs}/>
          <Route exact path = '/blogs' component = {Blogs}/>
          <Route path = '/blog/:id' component = {Blog}/>
          <Route path = '/' component = {Home}/>
        </Switch>
        </ScrollToTop>
      </Router>
  );
}

export default App;


