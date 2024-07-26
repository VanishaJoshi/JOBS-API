import {Link, useRouteError} from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import notFound1 from '../assets/images/notFound1.svg'
export const Error = () => {
  const error=useRouteError();
  if(error.status ===404)
  {
    return(
      <Wrapper>
        <div>
          <img src="" alt="not found" />
          <h3>oh page not found</h3>
          <p>we cant seemt o find the page lookin for</p>
        <h1>Error Page</h1>
        <p>{error.data}</p>
        <img src={notFound1} />
        <Link to="login">back home</Link>
        </div>
       
      </Wrapper>
    )
  }
  console.log(error)
  return (
    <>
     <h1>Error Page!!</h1>
     <p>{error.data}</p>
    <Link to='/'>back home</Link>
    </>
   
  )
}
