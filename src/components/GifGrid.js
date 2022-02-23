import React, { useState,useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/GetGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({category}) => {
   const {data: images,loading}=  useFetchGifs(category);
  
  
  return (
      <>
      
      <h3 className='animate__backInUp'>{category}</h3>
      {loading && <p className='animate__fadeInLeftBig'>Loading...</p>}
     
    <div className='card-grid'>
        
        
            
                {
                images.map( img => (
                    <GifGridItems key={img.id} {...img} />
                ))
              
            }
            
            
        
        </div>
        </>
        
  )
}
