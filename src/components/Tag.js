import React, { useEffect, useState } from 'react'

import axios  from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

//   const [gif,setGif]=useState('');
//   const[loading,setLoading]=useState(false)
  const [tag,setTag]=useState('car');
  
//   async function fetchData(){

//     setLoading(true);
//     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` ;
    
//     const {data}= await axios.get(url);
    
//     const imageSource=data.data.images.downsized_large.url;
//     setGif(imageSource)
//     setLoading(false);
//     console.log(imageSource)


//   }
//   useEffect(()=>{
//     fetchData();
//   },[])
  

const {gif,loading,fetchData}=useGif(tag);

  function clickHandler(){
    fetchData('car');

  }

  function changeHandler(event){
      setTag(event.target.value);

  }

  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1
      className='text-2xl underline uppercase font-bold'
      >
         Random {tag} GIF
      </h1>
      {
loading?(<Spinner/>):( <img src={gif} alt="" width="450" />)

      }

      <input
      className='w-10/12 text-lg py-2 rounded-lg  mb-[3px] text-center'
      onChange={changeHandler}
      value={tag}
      />


      


      <button onClick={clickHandler}
      className='w-10/12 bg-yellow-200 text-lg py-2 rounded-lg  mb-[20px] '
      >Generate</button>
    </div>
  )
}

export default Tag
