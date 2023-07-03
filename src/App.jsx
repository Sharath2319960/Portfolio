import React from 'react'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/about/about';
import Experience from './components/Experience/Experience'
import Service from './components/Services/Service'
import Portfolio from './components/Portfolio/Portfolio'
import Testmonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <React.Fragment>
     <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Service/>
     <Portfolio/>
     <Testmonials/>
     <Contact/>
     <Footer/>
    </React.Fragment>
  )
}

export default App