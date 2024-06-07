import { useState } from "react"

export const AddCatgory = ({onNewCategory}) => {
    const [inputValu, setInputValu] = useState('')
    const onInputChange = ({target}) => {
        setInputValu(target.value)
    }
    const onSubmit = (e) => {
       e.preventDefault();
       const elTrim = inputValu.trim();
       if(elTrim.length <= 1)return;
       setInputValu('');
       onNewCategory(elTrim)
      // setCategories(c => [inputValu,...c])

       
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