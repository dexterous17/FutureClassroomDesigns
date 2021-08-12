import React, { useEffect, useState } from 'react'
import { useHistory,useParams } from 'react-router-dom';
import {Rating} from 'react-simple-star-rating'
import { db,storage } from '../firebase';



export default function StarRatings() {
  const [rating, setRating] = useState(0);
  const history = useHistory();
  const params = useParams();
  const [comment,setComment] = useState('');
  const [prefixesLength,setprefixesLength] = useState(0);

  const handleRating = (rate) => {
    setRating(rate)
    async function sleep (){return await new Promise(r => setTimeout(r, 5000));}
    sleep();
    var database = db.collection('Groups')
    database.add({
      id:params.id,
      name:params.name,
      rating:rate,
      comment:comment
    }).catch(error=>console.log(error))



    if(prefixesLength-params.id===0){
      return window.open('https://www.supertecture.com/')
    }else{
      return (history.push(`/Images/${parseInt(params.id, 10)+1}&${params.name}`));
    }

    
  }

  useEffect(()=>{
    async function hello(){
      var path = await storage.ref().child('').listAll().then((res)=>{
        return setprefixesLength(res.prefixes.length);
      }).catch(error=>console.log(error))
      return path;
    }
    hello()
  },[])

  function type(val){
    setComment(val.target.value)
  }

  return (
      <div className="rating-container">
        <div><h1>Rating Group Number {params.id}</h1></div>
        <textarea rows="10" cols="35" placeholder="" onChange={type}></textarea>  
          <div>
            <Rating onClick={handleRating} ratingValue={rating} transition size={28} stars={10}>
              <svg fill="currentColor" width={40} height={30} viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </Rating>  
          </div>  
      </div>
  )
}
