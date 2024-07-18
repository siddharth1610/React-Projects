import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [principal,setPrincupal]=useState()
  const [rate,setRate]=useState()
  const [time,setTime]=useState()
  const [simple,setSimple]=useState()

  let simpleR = (e)=>{
    e.preventDefault()

    if(principal===0 || rate===0|| time===0){
      alert("Please fill all details")
    }else{
      let simple = (parseInt(principal)*parseInt(rate)*parseInt(time)) /100
      setSimple(parseInt(simple))
    }
  }
  const handleClick = (e) => {
    setSimple(0);
    window.location.reload();
 
  }
 
  

  return (
    <>
    <div className="card bg-base-100 w-auto shadow-xl">
  <h1 className='text-2xl'>Simple Interest Calculator</h1>
  <div className="card-body">
    <form onSubmit={simpleR} >
      <div className="card-title p-5 space-x-1">
      <label className='' htmlFor="principal">Principal :</label>
      <input type="number"
      placeholder='principal amount'
      value={principal}
      onChange={(e)=>{
        setPrincupal(e.target.value)
      }} />
</div>
      <div className="card-title p-5 space-x-10">
      <label htmlFor="time">Time :</label>
      <input type="number"
      placeholder='Time'
      value={time}
      onChange={(e)=>{
        setTime(e.target.value)
      }} />
</div>
      <div className="card-title p-5 space-x-10">
      <label htmlFor="Rate">Rate : </label>
      <input type="number"
      placeholder='Rate'
      value={rate}
      onChange={(e)=>{
        setRate(e.target.value)
      }} />
</div> 
<span className='card-title p-5 space-x-10'>Simple Interest : {simple}</span>  
    <div className="card-actions justify-end">
      <button type='submit' className="btn btn-primary">Calculate</button>
      
      <button className="btn btn-primary " onClick={handleClick}>Reset</button>
    </div></form  >
  </div>
</div>
      
    </>
  )
}

export default App
