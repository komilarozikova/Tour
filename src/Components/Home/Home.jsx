import React from 'react'
import '../Home/Home.scss'
import samarqand from '../img/samarqand.svg'

function Home() {
  return (
    <div className='home-container'>
       <img src={samarqand} alt="" />
       <h1>The most popular tours</h1>
    </div>
  )
}



export default Home

