import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
export const FormRow = ({labelText,defaultValue,type,name}) => {
  return (

        <div className="form-row">
          <label htmlFor={name} className='form-label'>
          {labelText||name}
          </label>
          <input
          type={type}
          name={name}
          id={name}
          className='form-input'
          defaultValue={defaultValue||" "}
          required/>
        </div>
       
  
  )
}
