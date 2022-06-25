
import './sty.css'

import React,{ useState } from 'react';





function App() {
  const [count, setCount] = useState (0)

  function Decrease(){
    setCount(count - 1)
   }
   function Increase(){
    setCount(count + 1)
   }
  return (
   
  <div>
    <button onClick={Decrease}>-</button>
    <h1> {count} </h1>
    <button onClick={Increase}> +</button>
  </div>
  
    
  );

}

export default App;