import React from 'react'
import Hero from './homeComponents/Hero'
import WhatWeDo from './homeComponents/WhatWeDo'
import Banner from './homeComponents/Banner'
import Content from './homeComponents/Content'
import Testimonial from './homeComponents/Testimonial'
import Space from './homeComponents/Space'
const Home = () => {
  return (
    <div>
      <Hero/>
      <WhatWeDo/>
      <Banner/>
      <Content/>
      <Testimonial/>
      <Space/>
    </div>
  )
}

export default Home