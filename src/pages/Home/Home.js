import React from 'react'
import Hero from './homeComponents/Hero'
import WhatWeDo from './homeComponents/WhatWeDo'
import Banner from './homeComponents/Banner'
import Content from './homeComponents/Content'
import Testimonial from './homeComponents/Testimonial'
const Home = () => {
  return (
    <div>
      <Hero/>
      <WhatWeDo/>
      <Banner/>
      <Content/>
      <Testimonial/>
    </div>
  )
}

export default Home