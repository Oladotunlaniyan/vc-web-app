import React from 'react'

import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'

const Sponsor = () => {
  return (
<div className='sponsor-container'>
    <p>
        101Labs team not only designed a great product for us but also guided<br />
        us through the entire venture-building process. The expertise, dedication,<br />
        and seamless collaboration we experienced were invaluable. We couldn't<br /> 
        have asked for a better partner.
    </p>
    <h5>Ibrahim Lukman, CEO Halal Bank</h5>
    <div className='s-imgs'>
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image4}/>
        <img src={image5}/>
        <img src={image6}/>
    </div>
</div>
  )
}

export default Sponsor