import React from 'react'
import banner from "../assests/images/sharktankbanner.png"
import "./Banner.css"
const Banner = () => {
  return (
    <section className='banner-section'>
        <img src={banner}/>
    </section>
  )
}

export default Banner