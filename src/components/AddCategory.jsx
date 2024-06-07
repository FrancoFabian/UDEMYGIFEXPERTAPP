import { useState } from "react"

export const AddCatgory = ({setCategories}) => {
    const [inputValu, setInputValu] = useState('')
    const onInputChange = ({target}) => {
        setInputValu(target.value)
    }
    const onSubmit = (e) => {
       e.preventDefault();
       if(inputValu.trim().length <= 1)return;
       console.log(inputValu)
       setCategories(c => [inputValu,...c])
       setInputValu('');
    }
    return (
        
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValu}
                onChange={onInputChange}
            ></input>
        </form>
       
        
    )
}