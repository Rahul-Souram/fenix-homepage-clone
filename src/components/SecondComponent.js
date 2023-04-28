import React from 'react'
import secondImage from '../images/secondImage.png'

const SecondComponent = () => {
  return (
    <div className='second'>
        <div className='second-bg'>
        </div>
        <div className='second-img'>
            <img src={secondImage} alt="second" />
        </div>
    </div>
  )
}

export default SecondComponent