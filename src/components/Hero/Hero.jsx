import React from 'react';
import './Hero.css';
import '../../index.css';
import anime from 'animejs/lib/anime.es.js';

const Hero = ( {color} ) => {





  return (
    <section>

      <div className = "hero"> 
          <div className = "container">

              <div className = "main-text">
                  <h1 className = {`text ${color}`}>hi, i'm ethan luc</h1>
                  <h2 className = {`text sub ${color}`}>math student @ uw</h2>
              </div>

          </div>
          
      </div>




    </section>

     
      

  )
}

export default Hero
