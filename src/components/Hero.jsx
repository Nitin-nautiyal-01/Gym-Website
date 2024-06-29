import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from '../Images/hero_image.png'
import hero_image_back from '../Images/hero_image_back.png'
import heart from '../Images/heart.png'
import Calories from '../Images/calories.png'
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
import { type } from '@testing-library/user-event/dist/type'
export default function Hero() {
  const transition = {type: 'spring', duration : 3};
  const mobile = window.innerWidth<=768 ? true : false;   
  return (
    <div className='hero' id="Home">
      <div className="blur hero-blur"></div>
      <div className="left-hero">
       <Header/>
 {/* the best ad */}
       <div className="the-best-ad">
        <motion.div
             initial = {{left: mobile? "178px" : "238px"}}
             whileInView = {{left:'8px'}}
             transition={{...transition, type : 'tween'}}>
        </motion.div>
        <span>The best fitness club in the town</span>
       </div>

       {/* Hero Heading */}
       <div className="hero-text">
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>
        <div >
          <span>IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST</span>
        </div>
       </div>

       {/* Figures */}
       <div className="figures">
        <div>
          <span>
            <NumberCounter end = {140} start = {90} delay = '3' preFix = "+"/>
          </span>
          <span>Expert Coaches</span>
        </div>

        <div>
          <span>
          <NumberCounter end = {978} start = {928} delay = '4' preFix = "+"/>
          </span>
          <span>Members joined</span>
        </div>

        <div>
          <span>
          <NumberCounter end = {50} start = {10} delay = '1' preFix = "+"/>
          </span>
          <span>Fitness Program</span>
        </div>
       </div>
       {/* Button */}
       <div className='hero-buttons'> 
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
       </div>
      </div>

      <div className="right-hero">
        <button className='btn'>Join Now</button>
         <motion.div 
         initial = {{right: "-1rem"}}
         whileInView = {{right: "4rem"}}
         transition={transition}
         className="heart-rate">
          <img src={heart} alt=""/>
          <span>Heart Rate</span><span>116 bpm</span>
          </motion.div> 
          <img src={hero_image} alt="" className='hero-image'/>
          <motion.img 
            initial = {{right: '100px'}}
            whileInView={{right:'300px'}}
            transition={transition}
          src={hero_image_back} className='hero-image-back'/>

          <motion.div
          initial = {{right:'37rem'}}
          whileInView={{right: "28rem"}}
          transition={transition}
          className="calories">
            <img src={Calories}/>
            <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
            </div>
          </motion.div>
      </div>
    </div>
  )
}
