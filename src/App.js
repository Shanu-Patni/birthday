import Data from "./Data"
import './App.css'
import { useState } from "react"

function App(){
  const [data,setData]=useState(Data);
  return(
    <div className="App">
      <section>
        <main>
             <p>Today BirthDay{data.length}😊</p>
             
              {data.map((x)=>{
                return(
                  <div className="cards" key={x.image}>
                    <img src={x.image} alt=""  height={'50px'} width={'50px'}></img>
                    <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>

                  </div>
                )
              })}
              <button onClick={()=>setData([])}>clear</button>
          </main>
      </section>
    </div>
  )
}

export default App