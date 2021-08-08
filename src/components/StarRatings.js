import React, { useState } from 'react'
import {Rating} from 'react-simple-star-rating'



export default function StarRatings() {
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
    console.log(`Your rate is: ${rate}`)
  }

  return (
      <div className="rating-container">
      <div><h1>Rating Group Number</h1></div>
      <div>
      <Rating
          onClick={handleRating}
          ratingValue={rating}
          transition
          size={28}
          stars={10}
        >
          <svg fill="currentColor" width={40} height={30} viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </Rating>  
        </div>    
      </div>
  )
}
