import React from 'react'
import image7 from '../assets/images/image7.png'

const Work = () => {
  return (
    <div className='container work-container'>
        <div className='work-title'>
            <h1>Our Work</h1>
            <p>Some of the effort we can <br /> brag about</p>
        </div>
        <div className='work-body'> 
        <div className='slider'>
            <h5>190% increase in test drive signups . </h5>
            <h5>88% increase in time on page . </h5>
            <h5>75% increase in car configuration stats . </h5>
        </div>
        <div className='main-body'>
          <div className='main-body-img'>
            <img src={image7}/>
          </div>
          <div className='main-body-text'>
            <div className='text-1'>
              <button>User Research</button>
              <button>Product Design</button>
              <button>Goto market strategy</button>
            </div>  
            <div className='text-2'>
              <h1>Dr Cloud</h1>
              <p>Everybody needs quality health access</p>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Work