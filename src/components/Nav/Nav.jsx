import React from 'react'
import './Nav.css'
import {BiSolidHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState("#")
  return (
 <nav>
  <a href='#' onClick={() =>setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><BiSolidHome/></a>
  <a href='#about' onClick={() =>setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
  <a href='#experience'  onClick={() =>setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt/></a>
  <a href='#service'  onClick={() =>setActiveNav("#service")} className={activeNav === '#service' ? 'active' : ''}><RiServiceFill/></a>
  <a href='#contact'  onClick={() =>setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
 </nav>
  )
}

export default Nav