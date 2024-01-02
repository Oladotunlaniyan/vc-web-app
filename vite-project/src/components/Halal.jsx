import React from 'react'
import image10 from '../assets/images/image10.png'


const Halal = () => {
  return (
    <div className='container halal-container'>
        <div className='slider'>
            <h5>190% increase in test drive signups . </h5>
            <h5>88% increase in time on page . </h5>
            <h5>75% increase in car configuration stats . </h5>
        </div>
    <div className='halal-main'>
        <div className='halal-img'>
            <img src={image10}/>
        </div>
        <div className='halal-body'>
            <div className='btn-halal'>
              <button>Mobile App</button>
              <button>Website</button>
            </div>
            <div className='halal-text'>
                <h1>Halal</h1>
                <p>Interest-free banking & <br /> finance for everyone</p>
            </div>
        </div>
    </div>
   </div> 
  )
}

export default Halal