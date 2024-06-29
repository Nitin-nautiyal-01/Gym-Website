import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../data/testimonialsData.js';
import leftArrow from '../Images/leftArrow.png';
import rightArrow from '../Images/rightArrow.png'
import {motion} from  'framer-motion'
export default function Testimonials() {
  const transition = {type: "spring" , duration : 3}
  const [select,setSelect] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className='testimonials'>
      <div className='left-t'>
       <span>Testimonials</span>
       <span className='stroke-text'>What they</span>
       <span>say about us</span>
       <motion.span
        key = {select}
        initial = {{opacity : 0, x : -100}}
        animate = {{opacity : 1 , x:0}}
        exit = {{opacity : 1, x : 100}}
        transition={transition}
       >
       {testimonialsData[select].review}
       </motion.span>
       <span>
       <span style = {{color : 'var(--orange)'}}>
        {testimonialsData[select].name}
       </span>
       - {testimonialsData[select].status}
       </span>
      </div>

      <div className='right-t'>
        <motion.div
        initial = {{opacity:0 , x:-100}}
        transition={{...transition, duration : 2}}
        whileInView={{opacity:1, x : 0}}
        >

        </motion.div>
        <motion.div 
        initial = {{opacity:0 , x:100}}
        transition={{...transition, duration : 2}}
        whileInView={{opacity:1, x : 0}}
        >

        </motion.div>
       <motion.img
       key = {select}
       initial = {{opacity : 0, x : 100}}
       animate = {{opacity : 1 , x:0}}
       exit = {{opacity : 1, x : -100}}
       transition={transition}
       src= {testimonialsData[select].image}/>
       <div className="arrows">
       <img src={leftArrow}
       onClick={() => {
        select === 0 
        ?
        setSelect(tLength-1)
        :
        setSelect((prev) => prev-1);
       }}
       />
       <img src={rightArrow}
       onClick={() => {
       select === tLength-1
       ?
       setSelect(0)
       :
       setSelect((prev)=>prev+1);
   
       }}/>
       </div>
       
      </div>
    </div>
  )
}
