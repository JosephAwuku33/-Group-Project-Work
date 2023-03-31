import React from 'react'
import Button from './button'
import './BannerText.css'

export default function BannerText() {
  return (
    <section className='banner_text'>
        <p className='text1'>
        Voted No.1🏆
For Boosting Your Instagram.
        </p>
        <p className='text2'>
        Hundreds of Instagram Followers, Likes, and Views – Real Users, Real Accounts, and Quick Delivery!
        </p>
        <div>
          <Button className="btn_like">Buy Likes</Button>
          <Button className="btn_views">Buy Views</Button>
          <Button className="btn_followers">Buy Followers</Button>
        </div>

    </section>
  )
}
