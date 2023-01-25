import React from 'react'
import Carousel from 'better-react-carousel'
import "./index.scss"
const Slider = () => {
  return (
    <div className='slider'>
         <Carousel cols={1} rows={1} gap={0} loop>
      <Carousel.Item>
        <img className='sliderimage' width="100%" src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" />
        <div className='slidertext'> <h1>Get Your</h1><h1 className='education'>Education</h1><h1>Today</h1></div>
       
      </Carousel.Item>
      <Carousel.Item>
        <img className='sliderimage' width="100%" src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" />
        <div className='slidertext'> <h1>Get Your</h1><h1 className='education'>Education</h1><h1>Today</h1></div>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider