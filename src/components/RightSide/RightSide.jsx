import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <Updates/>
        </div>
        <div>Customer Review</div>
        <CustomerReview/>
    </div>
  )
}

export default RightSide