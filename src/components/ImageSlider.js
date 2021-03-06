import React, { useState,useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useHistory,useParams } from 'react-router-dom';

import { storage } from '../firebase';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const history = useHistory();
  const params = useParams();
  const [url,seturl] = useState([]);


useEffect(() => {

  if(parseInt(params.id)<1||parseInt(params.id)>71){
      history.push(`/`)
  }

  async function asynccall(){
    //async function will request  images from the storage buckets.
      var path = await storage.ref().child(`${params.id}`).listAll().then((res)=>{
        res.items.forEach((item)=>{
            item.getDownloadURL().then((url)=>{
              seturl(arr=>[...arr,url])
            })
            
        })
      }).catch(error=>console.log(error))
    return path;
  }
  asynccall();
}, [])

const length = url.length;

const nextSlide = (e) => {
  // function will call next slide.
    e.preventDefault();  
    if(current<=length-2){
      setCurrent(current + 1);  
    }else{
      history.push(`/Rating/${params.id}&${params.name}`);
    }
  };

  const prevSlide = (e) => {
    // function will call previous slide.
    e.preventDefault();
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(url) || url.length <= 0) {
    //if statement will check wether the array is empty.
    return null;
  }

  return (

    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      {url.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt={'Slides'} className='image' />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />


    </section>
  );
};

export default ImageSlider;
