import React, { useState } from 'react'
import "./Testimonial.css"
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { setSelectionRange } from '@testing-library/user-event/dist/utils'



const Testimonial = () => {

    const[selected,setSelected]=useState(0);
    const tLenght =testimonialsData.lenght;
  return (
    <div className='Testimonials'>
    <div className='left-t'>
    <span >Testimonials</span>
    <span className='stroke-text'>What they</span>
    <span>Say about us </span>

    <span>  {testimonialsData[selected].review}</span>
    <span>
    <span style={{color: 'var(--orange)'}}>
    { testimonialsData[selected].name}
    </span>{""}
    -{testimonialsData[selected].status}
    </span>
    </div>
    <div className='right-t'>
    <div className='rahul'></div> <div className='raaj'></div>
    <img src ={testimonialsData[selected].image} alt=''/>

    <div className ="arrows">
    

    <img

    onClick={()=>{
        selected===0
        ?setSelected(tLenght -1)
        :setSelected((prev)=>prev -1);
} } 
    src={leftArrow} alt=""/>
    <img 
    onClick={()=>{
        selected === tLenght-1
        ? setSelected(0)
        :setSelected((prev) =>prev+1);
    }
    
    }
    
    src={rightArrow} alt=""/>
    </div>
    </div>
      
    </div>
  )
}

export default Testimonial
