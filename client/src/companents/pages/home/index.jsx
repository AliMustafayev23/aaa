import {Helmet} from "react-helmet";
import React from 'react'
import OurServices from './our services'
import PopularCourse from './popular course'
import RegisterNow from './register now'
import Slider from './slider'

const Home = () => {
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Slider/>
        <PopularCourse/>
        <RegisterNow/>
        <OurServices/>
    </div>
  )
}

export default Home