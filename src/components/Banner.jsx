import React from 'react'
import Bannner from '../assets/Group.svg';
import './Banner.css';
import BannerText from './BannerText';

export default function Banner() {
  return (
    <section className='banner'>
        <BannerText/>
        <img src={Bannner} alt='banner' style={{ width: 'auto', height: 'auto',  marginLeft:60}}/>
    </section>
    
  )
}
