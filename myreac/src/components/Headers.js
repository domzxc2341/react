import React,{Fragment} from 'react'
import './Header.css'
import Pota from './gray.jpg';


const Headers = () => (
    <React.Fragment>
        
    <div className='Head'>
        <img src={Pota} alt='OO' className='Img' /> 
        <h1 className='type1'>Hello,  I'm  Dominique  Simbillo</h1>
        <h1 className='type2'>And I'm </h1>
        <h1 className='pl1'>Web Developer</h1>
        </div>
        
  
  
    </React.Fragment>
)

export default Headers