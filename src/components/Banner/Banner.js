import React, { useState } from 'react'
import './Banner.css';
import {useEffect} from 'react';
import axios from '../axios'
import {apikey,bannerimage} from '../../constants/Constant'


function Banner() {
const [movie, setmovie] = useState()
    
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${apikey}&language=en-US`).then((response)=>{
          console.log(response.data);
   
        
  let counter=0;
  setInterval(()=>{
      if(counter<20){
          counter=counter+1;
      }
      else{counter=0}
      setmovie(response.data.results[counter])
  },2000)


      })

        
    }, [])


    return (
        <div
        
        style={{backgroundImage:`url(${movie?bannerimage+movie.backdrop_path:"" })`}} className='banner'>
            
            <div className='content'>

                 <h1 className='title'>{movie?movie.title:"" }</h1>
            <div className='bannerbuttons'>
                <button className='button'>play</button>
                <button className='button'>my list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
            </div>
    <div className='fade'></div>
  
    
        
    
    

</div>

            
      
    )
}

export default Banner
