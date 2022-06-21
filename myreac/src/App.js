
import { useState } from 'react';
import './App.css'
import  {Rend}  from './components/rend';



function App() {
  const [value0, value1] = useState(false);
  return (
    <div className="App">
<button onClick={() => value1(!value0)}>Labas mo baho mo tanga</button>
  {value0 && <Rend />}
    </div>

    
  );
  
}

export default App;