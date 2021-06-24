import React from 'react'
import './rowpost.css'
import { bannerimage,apikey} from '../../constants/Constant'
import {useState,useEffect} from 'react';
import axios from '../axios';
import YouTube from 'react-youtube';


function Rowpost(props) {
    const [movies, setmovies] = useState([])
    const [urlid,seturlid]=useState([])

    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
        //   https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },}


    
    useEffect(() => {
       axios.get(props.url).then(response=>{
           console.log(response.data.results);
           setmovies(response.data.results)
       })
        
    }, [])
    const handlemovie=(id)=>{
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${apikey}&language=en-US`).then(response=>{
            console.log(response.data)
            if (response.data.results.lenght!==0){
                seturlid(response.data.results[0])
            }
            else{console.log("no trailer available")}
        })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="poster">
                {movies.map((obj)=>
                    <img onClick={()=>handlemovie(obj.id)} className={props.ifsmall? 'smallposter': 'posterpic'}alt='loading' src= {`${bannerimage+obj.backdrop_path}`}/>
                )}
                
                
            </div>
            <div>
                
              {urlid && <YouTube videoId={urlid.key} opts={opts}  />}
              </div>
        </div>
    )
}

export default Rowpost


