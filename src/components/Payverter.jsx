import React from 'react'
import image8 from '../assets/images/image8.png'

const Payverter = () => {
  return (
    <div className='container pay-container'>
         <div className='slider-1'>
            <h5>190% increase in test drive signups . </h5>
            <h5>88% increase in time on page . </h5>
            <h5>75% increase in car configuration stats . </h5>
        </div>
    <div className='pay-main'>
        <div className='pay-body'>
            <div className='btn-pay'>
              <button>Mobile App</button>
              <button>Website</button>
            </div>
            <div className='pay-text'>
                <h1>Payverter</h1>
                <p>Pay conveniently without <br /> hassle and cheaper</p>
            </div>
            </div>
            <div className='pay-img'>
                <img src={image8} />
            </div>
        </div>
    </div>
  )
}

export default Payverter