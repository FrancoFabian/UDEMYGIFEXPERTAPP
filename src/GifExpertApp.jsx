import { useState } from "react";
import { AddCatgory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Maxma','Goku','Naruto']);
    
        return (
        <>
        <AddCatgory setCategories={setCategories}/>
        <ol>
            {
                categories.map((catgory,id)=>{
                   return <li key={id}>{catgory}</li>
                })
            }
        </ol>
        </>
    );
}