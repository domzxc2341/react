import React,{Fragment} from 'react'
import './Navbars.css';

 function Navbar() {
  return (
    <React.Fragment>
    <div className='navbar'>
      
    <h1><a className='a1' href="./home"> Home </a></h1>
    <h1><a className='a1' href="./home"> About </a></h1>
    <h1><a className='a1' href="./home"> Contact </a></h1>

    </div>
    
    </React.Fragment>
  )
}

export default Navbar;