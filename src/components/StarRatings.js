import React, { useEffect, useState } from 'react'
import { useHistory,useParams } from 'react-router-dom';
import {Rating} from 'react-simple-star-rating'
import { db,storage } from '../firebase';
import ReactPaginate  from 'react-paginate';



export default function StarRatings() {
  const [rating, setRating] = useState(null);
  const history = useHistory();
  const params = useParams();
  const [comment,setComment] = useState('');
  const [prefixesLength,setprefixesLength] = useState(0);
  const [message,setMessage]= useState('');

  
  const handleRating = (rate) => {
    //Setting the rate
    setRating(rate)
  }

  async function Submit(){
   
    if(rating===null){
      //message if no rateing is found
      setMessage('Please select rating!')
      return 
    }
   
    //If rating if found then will send to database
    var database = await db.collection('Groups').doc('Jury').collection(params.name)
    database.add({id:params.id,rating:rating,
      comment:comment}).catch(error=>console.log(error))

    //if statement for sending the user to other website or next slide.
    if(prefixesLength-params.id===0){
       window.location.assign('https://www.supertecture.com');
    }else{
      return (history.push(`/Images/${parseInt(params.id, 10)+1}&${params.name}`));
    }

  }

  useEffect(()=>{

    if(parseInt(params.id)<1||parseInt(params.id)>71){
      history.push(`/`)
    }

    //Code to get the list of all the folder from the bucket.
    async function hello(){
      var path = await storage.ref().child('').listAll().then((res)=>{
        return setprefixesLength(res.prefixes.length);
      }).catch(error=>console.log(error))
      return path;
    }
    hello()
  },[])

  function type(val){
    //Code for inputing the value.
    setComment(val.target.value)
  }

  function handlePageClick(event){
     //if statement for sending the user to other website or next slide.
     console.log(event.selected+1)
     history.push(`/Images/${event.selected+1}&${params.name}`)

  } 



  return (
      <div className="rating-container">
          <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              forcePage={parseInt(params.id, 10)-1}
              pageCount={prefixesLength}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={'pagination'}
              activeClassName={'active'}
        />
        <div><h1>Rating Group Number {params.id}</h1></div>
        <textarea rows="10" cols="35" placeholder="Post your comment here..." onChange={type}></textarea>  
          <div>
            <Rating onClick={handleRating} ratingValue={rating} transition size={28} stars={10}>
              <svg fill="currentColor" width={40} height={30} viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </Rating>  
          </div>  
          <div style={{color:'red'}}>
            {message}
          </div>
          <button onClick={Submit}>Submit</button>
      </div>
  )
}
