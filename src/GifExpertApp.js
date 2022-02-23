import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ["one punch", "samurai X ", "dragon ball"];
    const [categories,setcategories] = useState(["batman"]);
   



  return (
    <>
        <h2> GifExpertApp</h2>
        <AddCategory setCategories={setcategories}/>
        <hr/>
       
        <ol>
            {categories.map((category) =>{
                return  <GifGrid key = {category} category = {category} />
            })}
        </ol>
        


        </>
  )
}
