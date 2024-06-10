import { useState } from "react";
import { AddCatgory, GifGrid } from "./components";


export const GifExpertApp = () => {
        const [categories, setCategories] = useState([]);
        const onAddCategory = ( newCategory ) => {
            if(categories.includes(newCategory))return;
            setCategories([newCategory,...categories])
        }
        return (
        <>
        <AddCatgory 
          onNewCategory={ e => onAddCategory(e)}
        />
      
        {
            categories.map((category)=>
                (
                    <GifGrid
                     key={ category } 
                     category={ category }/>
                )
            )
        }
        </>
    );
}