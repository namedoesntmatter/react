import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// using usestate  to change the state or update the variables it returns an array where first element is the variable
// and 2 nd element is a function which manipulates the value of the variable
  let [counter,setCounter] =useState(0)
 // let counter = 5
  
 const addValue =  () =>{
  if(counter < 20){
    setCounter(counter + 1)   
    console.log("clicked" , counter)
  }
}

const removeValue =  () =>{
   if(counter > 0){
     setCounter(counter - 1)      
     console.log("clicked" , counter)
   }
}
  return (
    <>
      
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Increase Value</button>
      <br/>
      <button
      onClick={removeValue}
      >Decrease Value</button>
      
     
    </>
  )
}

export default App
