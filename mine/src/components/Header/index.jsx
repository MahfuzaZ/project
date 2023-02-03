import React from 'react'
import sass from '../s.module.scss'
import logo from "../../pages/img/logo.svg"
import { useState,useEffect } from 'react'
function Header() {
const [post, setPost] = useState([])
useEffect(()=>{
   fetch('https://fakestoreapi.com/products/categories')
     .then(res => res.json())
     .then(data => setPost(data))
})

  return (
    <div className={sass.header}>
         <div className={sass.logo}>
            <img src={logo} alt="" />
         </div>
         <div className={sass.menu}>
            
         </div>
    </div>
  )
}

export default Header