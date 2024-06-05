import React from 'react'
import banner from "../assests/images/sharktankbanner.png"
import "./Banner.css"
const Banner = () => {
  return (
    <section className='banner-section'>
        <img src={banner} alt='img'/>
    </section>
  )
}

export default Banner