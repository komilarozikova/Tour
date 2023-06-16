import React from 'react'
import '../Swiper/Swiper.scss'
import swiper1 from '../img/swiper1.svg'

function Swiper() {

    return (
        <div className="swiper-container">
            <div className="swiper-top">
                <h1>The most popular tours for everyone</h1>
                <p>We are dedicated to curating exceptional travel experiences that allow you to discover the true essence of this captivating city. With our carefully crafted selection of popular tours, you can immerse yourself in the vibrant culture, explore historical marvels, and create unforgettable memories.</p>
            </div>
            <div className="swiper">
                <div class="container">
                    <div class="text-box">
                        <h2>Historical Tour</h2>
                        <p>A tour of Istanbul can take you through the city's magnificent landmarks, such as the Blue Mosque, and the Topkapi Palace, which provide a glimpse into Istanbul's grandeur and history. <br />
                            <br />
                            You can also explore Istanbul's diverse neighborhoods, each with its own character and charm, from the bohemian Beyoglu to the historic Sultanahmet.</p>
                        <button>Read More</button>
                    </div>
                    <img src={swiper1} alt="Your Image" />
                </div>

            </div>
        </div>
    );
}



export default Swiper
