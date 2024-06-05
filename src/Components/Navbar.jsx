import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Navbar , Container } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar expand="lg" className=" flex  bg-body-tertiary text-white h-20   py-6  pl-2 text-xl  backdrop-blur-xl bg-opacity-40 bg-black fixed w-full z-20 top-0 start-0">
      <Container className='flex  '>
        <Navbar.Brand href="#home" className='px-40 '>Dhwanit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" className=' flex space-x-80 ' >
          <Nav className="space-x-16  ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
            <Nav.Link href="#Contacts">Contact Me</Nav.Link>
          </Nav>
          <span className='flex m-4' >
            <div className=' flex space-x-10  items-center    '>
              <div className=' rounded-full border-white border-2 p-2'>
              <a href='https://www.instagram.com/dhwxnit.rwt/' ><FaInstagram /></a>
              </div>
              <div className=' rounded-full border-white border-2 p-2'>
              <a href='https://x.com/DhwanitRawat' ><FaSquareXTwitter /></a>
              </div>
              <div className=' rounded-full border-white border-2 p-2'>
              <a href='https://github.com/Dhwanit2003' ><FaGithub /></a>
              </div>
              <div className=' rounded-full border-white border-2 p-2'>
              <a href='https://www.linkedin.com/in/dhwanit-singh-rawat-7b2080206/' ><FaLinkedin /></a>
              </div>
              <a href='#'className='rounded-none inline-block overflow-hidden border-white border-2  px-4 py-2 mt-1 ' >Let's Connect</a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar