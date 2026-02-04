import { useState } from 'react'
import './App.css'

function App() {

  const [count,setCount]=useState<number|0>(0)
 

  return (
    <>
     <p>COUNTER:{count}</p>
     <div className="buttons">
      <button onClick={()=>setCount(count+1)}>Increement</button>
         <button onClick={()=>setCount(count-1)}>Decreement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
     </div>
    </>
  )
}

export default App
