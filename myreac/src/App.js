

import Navbar from './components/Navbar';
import logo1 from './deliver.jpg';
import React, { Fragment } from 'react';
import './components/image1.css';
/*import React,{ useState } from 'react';
*/




function App() {
  
  return (
    <React.Fragment>
    <Navbar />
<div>
  <h1 className='text'>Next Time Nalang</h1>
<img className='image' src={logo1} /> 
<h1 className='text1 typewriter'>BIGLANG DELIVER BY RON LIKO</h1>
</div>
</React.Fragment>
  );

}

export default App;