import React, { useState } from 'react'

const FormInput = (props) => {
    const[focused, setFocused] = useState(false);
    const {label, onChange, errorMessage, id, ...inputProps} = props;
    
    const onBlur = (e) => setFocused(true);
  return (
    <div className="flex flex-col w-[90%] m-auto justify-center px-[1rem]  space-y-2 ">
      <label className=" text-[0.9rem] ">{label}</label>
      <input
        className="outline-none w-full py-2 px-[10px] invalid:block mx-[10px]"
        {...inputProps}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={() =>
          inputProps.name === "confirmPassword" ? setFocused(true) : null
        }
        focused={focused.toString()}
      />
      <span className='text-[.65rem] font-sans text-orange hidden invalid:block'>{errorMessage} </span>
    </div>
  );
}

export default FormInput