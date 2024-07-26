import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import {Link} from 'react-router-dom'
import { FormRow,Logo } from '../components'
export const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="karan@gmail.com"/>
        <FormRow type="password" name="password" defaultValue=""/>
        <button type="submit" className='btn btn-block'>Login</button>
        <button type="button" className='btn btn-block'>Explore</button>
        <p>Not a member
        <Link to="/register" className='btn-member'>
          Register
        </Link>
        </p>
      </form>
    </Wrapper>

  )
}
