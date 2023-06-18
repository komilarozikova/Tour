import React from 'react'
import '../Visit/Visit.scss'
import i1 from '../img/i1.svg'
import i2 from '../img/i2.svg'
import i3 from '../img/i3.svg'
import i4 from '../img/i4.svg'
import i5 from '../img/i5.svg'
import i6 from '../img/i6.svg'

function Visit() {
  return (
    <div className="visit-container">
    <div className="visit-top">
              <h1>Must-Visit Places in Istanbul</h1>
              <p>Istanbul, a mesmerizing blend of East and West, is a city that beckons with its rich history, vibrant culture, and stunning architecture. As you wander through its bustling streets, there are certain places that simply cannot be missed.</p>
          </div>
          <div className="img-gallery">
    <img src={i1} />
    <img src={i2} />
    <img src={i3} />
    <img src={i4} />
    <img src={i5} />
    <img src={i6} />
  </div>
 </div>
  )
}



export default Visit

