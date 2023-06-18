import React from 'react'
import '../Blog/Blog.scss'



function Blog() {
  return (
    <div className="blog-container">
    <div className="blog-top">
              <h1>Let’s read our fascinating blog </h1>
              <button>View All</button>
          </div>
         <div className="card-container">
            <div className="card">
                <div className="card-image1"><img/></div>
                         <div className="box">
                         <h2>Hidden Istanbul Gems</h2>
                            <p>Step off the beaten path and immerse yourself in the enchanting secrets of this ancient city.</p>
                            <a href="#">Read more</a>
                         </div>
            </div>
            <div className="card">
                <div className="card-image2"><img /></div>
                <div className="box">
                         <h2>Vibrant Neighborhoods</h2>
                            <p>Istanbul, a city of vibrant neighborhoods, each with its unique charm.</p>
                            <a href="#">Read more</a>
                         </div>
            </div>
            <div className="card">
                <div className="card-image3"><img /></div>
                <div className="box">
                         <h2>Turkish Hospitality</h2>
                            <p>Turkish hospitality is a timeless tradition deeply rooted in the culture.</p>
                            <a href="#">Read more</a>
                         </div>
            </div>
         </div>
 </div>
  )
}



export default Blog

