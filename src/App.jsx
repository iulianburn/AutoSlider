import React from 'react'
import Carousel from './Carousel'
import Slick from './Slick'
const App = () => {
  return (<main>
 {/* manual way: */}
    <Carousel/>

    {/* with  react slider */}
    <Slick/>
  </main>
  )
}

export default App