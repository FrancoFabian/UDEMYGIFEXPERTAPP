import React, {useState } from "react"
import PropTypes from 'prop-types'
export const AddCategory = ({onNewCategory}) => {
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
        
        <form onSubmit={(e) => onSubmit(e)} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValu}
                onChange={onInputChange}
            ></input>
        </form>
       
        
    )
}
AddCategory.proptTypes = {
    onNewCategory: PropTypes.func.isRequired,
}