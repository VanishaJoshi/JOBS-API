import React from 'react'
import {Link} from "react-router-dom"
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

export const Register = () => {
  return (
    // <>data displaying more than one tag fragment
    <Wrapper>
      <form className='form'>
        <Logo/>
         
        <h4>Register</h4>
        <FormRow labelText="FirstName" defaultValue="KJ" type="text" name="fname"/>
        <FormRow labelText="LastName" defaultValue="AJ" type="text" name="lname"/>
        <FormRow labelText="Email" defaultValue="karan@gmail.com" type="email" name="email"/>
        <FormRow labelText="Password" defaultValue="secret@123" type="password" name="password"/>
        <FormRow labelText="Location" defaultValue="" type="text" name="location"/>
        <button type="submit" className='btn btn-block'>
          submit
        </button>
        <p>Already a member</p>
        <Link to='/login' className='member-btn'>Login</Link>
      </form>
    </Wrapper>
  
  );
}
