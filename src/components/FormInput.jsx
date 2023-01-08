import React, { useState } from 'react'

const FormInput = (props) => {
    const[focused, setFocused] = useState(false);
    const {label, onChange, errorMessage, id, ...inputProps} = props;
    
    const onBlur = (e) => setFocused(true);
  return (
    <div>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={onBlur} onFocus={() => inputProps.name === "confirmPassword" ? setFocused(true) : null} focused={focused.toString()} />
        <span>{errorMessage} </span>
    </div>
  )
}

export default FormInput