import React from 'react';
import '../Gallery/Gallery.scss';
import g1 from '../img/g1.svg';
import g2 from '../img/g2.svg';
import g3 from '../img/g3.svg';
import g4 from '../img/g4.svg';
import g5 from '../img/g5.svg';
import g6 from '../img/g6.svg';
import g7 from '../img/g7.svg';
import g8 from '../img/g8.svg';
import g9 from '../img/g9.svg';


function Gallery() {
  return (
    <div className="intro">
        <h1>A Captivating Photo Gallery</h1>
    <div className="container-gallery">
        <div className="row">
            <div className="col">
                <img src={g3} />
                <img src={g4} />
            </div>

            <div className="col">
                <img src={g5} />
   
                <img src={g7} />
            </div>

            <div className="col">
                <img src={g9} />
                <img src={g4} />
            </div>

            <div class="col">
                <img src={g5} />
                <img src={g7} />
            </div>
        </div>
    </div>
</div>
  )
}



export default Gallery

