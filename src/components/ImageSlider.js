import React, { useState,useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useHistory,useParams } from 'react-router-dom';
import { ENTERTHEGROUP, ENTERTHENAME } from '../redux store/Action';
import {useDispatch} from 'react-redux'
import { storage } from '../firebase';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const [url,seturl] = useState([]);

  dispatch(ENTERTHENAME(params.name))
  dispatch(ENTERTHEGROUP(params.id))

useEffect(() => {
  async function asynccall(){
    
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
console.log(length)

const nextSlide = (e) => {
    e.preventDefault();  
    if(current<=length-2){
      setCurrent(current + 1);  
    }else{
      history.push(`/Rating/${params.id}&${params.name}`);
    }
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(url) || url.length <= 0) {
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
              <img src={slide} alt={'travel'} className='image' />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />


    </section>
  );
};

export default ImageSlider;
