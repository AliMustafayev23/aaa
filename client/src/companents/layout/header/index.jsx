import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import "./index.scss"
const Header = () => {
  return (
    <div className='header'>
        <div className='headercontent'>
          <Link to={"/"}><img src={Logo} alt="" className='logo'/>
          <h1>Course</h1></Link>
        
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about-us"}>About Us</NavLink>
            <NavLink to={"/courses"}>Courses</NavLink>
            <NavLink to={"/elements"}>Elements</NavLink>
            <NavLink to={"/news"}>News</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/add-course"}>Add Course</NavLink>
        </nav>
        <div className='telephone'>
        <i class="fa-solid fa-phone-volume fa-2x"></i>
        <i>+43 4566 7788 2457</i>
        </div>
        </div>
    
    </div>
  )
}

export default Header