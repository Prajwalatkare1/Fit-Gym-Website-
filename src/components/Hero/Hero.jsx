import React from 'react'
import Header from "../Header/Header"
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition ={type:'spring' , duration:3}
  const mobile = window.innerWidth<=768 ? true:false ;
  return (
    <div className="hero">

    <div className='blur hero-blur'></div>
    <div className="left-h">

    <Header/>

    {/* the best ad */}

    <div className="the-best-ad">
             <motion.div
          
             initial={{left:mobile?"178px":'238px'}}
              whileInView={{left : '8px'}}
              transition={{...transition ,type:'tween'}}
            
            
             ></motion.div>
    
    <span>The best fitness club in the town</span>
    </div>
    

    {/*Hero Heading */}

    <div className='hero-text'>
     <div><span className='stroke-text'>Shape</span> <span>Your</span></div>
     <div><span>Ideal Body</span></div>
     <div className='span'>
       <span> 
       In Here We Will Help You to Shape and Build your Ideal Body And Live Up your Life 
     To fullest best and virtually be 
     </span>
      </div>
    </div>
    

    {/* figurs */}

    <div className='figures'>

    
    <div><span>
    <NumberCounter end ={140} start={100} delay='6' preFix="+"/> </span> <span>Expert Coaches</span>  </div>
    <div><span><NumberCounter end ={1800} start={100} delay='4' preFix="+"/></span> <span>member joined</span></div>
    <div><span><NumberCounter end ={150} start={50} delay='4' preFix="+"/></span> <span>Programs</span></div>
    </div>
   

    {/*hero button */}
    <div className='hero-buttons'>
    <button className='btn'>Get Started</button>
    <button className='btn'>Learn More</button>
    
    </div>
    </div>
  
    <div className="right-h">
     <button className='btn'>Join Now</button>




     <motion.div
     initial={{right:"-1rem"}}
     whileInView={{right:"4rem"}}
     transition={transition}
     className='heart-rate'>
     <img src={Heart} alt="" />
     <span>Heart Rate</span>
     <span>116 bpm</span>
     </motion.div>

     {/*hero images */}
   
     <img src={hero_image} alt='' className='hero-image'/>
     <img src={hero_image_back} alt='' className='hero-image-back'/>
      {/*calories*/}
      <motion.div
      
      initial ={{right:"37rem"}}
      whileInView={{right:"28rem"}}
      transition={{transition}}
      className='calories'>
      <img src={Calories} alt=""/>
      <div>
      <span>Calories  Burned</span>
      <span>220 kcal</span>
      </div>
     
      
      </motion.div>
      </div>
    </div>
    
  )
}

export default Hero
