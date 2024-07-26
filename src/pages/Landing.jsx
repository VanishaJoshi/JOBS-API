import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage';
// import LOGO from '../assets/images/LOGO.png'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom';
//import { Logo } from '../components/Logo.jsx';
// const StyledBtn=styled.button`
//   font-size:1.5em;
//   background:red;
//   color:white;

// `;
// .styledBtn{}


export const Landing = () => {
  return (
    
    <Wrapper>
      <nav>
  <img src={LOGO} alt="jobster" className="logo"/>
     //<Logo />
      </nav>
  
      <div className="content"></div>
    
    <div className="containerpage">
      <div className='info'>
      <img src={main} width="100" height="100"/>
        <h1>
          job <span>tracking</span>
        </h1>
       
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas rem iure asperiores. Consequuntur alias, excepturi blanditiis suscipit, nemo quaerat eveniet autem fugiat aliquam accusamus possimus illo ad eaque magnam unde?</p>
        <Link to='\register' className='btn register link'>Register</Link>
        <Link to='\login' className='btn'>login</Link>
      </div>
    </div>
    </Wrapper>
     
    
    
  
  )
}
