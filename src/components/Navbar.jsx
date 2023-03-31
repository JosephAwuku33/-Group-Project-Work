import React from 'react'
import './Navbar.css';
import Button from './button';
import Insta from '../assets/Insta.svg';
import Home from '../assets/Home.png';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
    <header className='header'><Link to='/'><img src={Home} alt='Home' width="auto" height="auto" /></Link></header>
    <ul className="navbar__links">
      <li><Link to="/">Buy Instagram Followers</Link></li>
      <li><Link to="/">Buy Instagram Likes</Link></li>
      <li><Link to="/">Buy Instagram Views</Link></li>
      <li><Link to="/signup"><Button className="btn_insta_icon"><img src={Insta} alt='Insta' style={{ width: 22, height: 24}}/></Button></Link></li>
      <Link to="/login"><Button className="btn"> Join </Button></Link>
    </ul>
    <Outlet/>
  </nav>
  )
}
