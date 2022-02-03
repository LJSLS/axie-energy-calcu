import React, {useState} from 'react';


function App(){
  const [count,setCount]=useState(3)
  const [Rcount,RsetCount]=useState(1)
  const Countundo = 0 
  function decCount(){
    if(count === 0){
      setCount(prevCount=>prevCount + 0)
    }else{
      setCount(prevCount=>prevCount - 1)
    }
  }
  function incCount(){
    if(count === 10){
      setCount(prevCount=>prevCount + 0)
    }else{
      setCount(prevCount=>prevCount + 1)
    }
    
  }
  function nextTurn(){
    setCount(prevCount=>prevCount + 2)
    RsetCount(RprevCount=>RprevCount + 1)
  }

  function reset(){
    setCount(prevCount=>3)
    RsetCount(RprevCount=>1)
  }

  function undo(){

    RsetCount(RprevCount=>RprevCount - 1)
  }

  return (
    <>
    <div class="demo-wrap">
      <div class="demo-content"> 
        <span><h1>Round {Rcount}</h1></span>
        <br></br>
        <div className='ECOUNT'>
          <span>{count}</span>
        </div>
        <br></br><br></br>
        <div className='EUSED'>
          <span>Energy Used</span><br></br>
        </div>
          <button className ="minusbutton" onClick={incCount}>-</button>
          <button onClick={decCount}>+</button>
        
        <br></br><br></br><br></br>
        <div className='EGAIN'>
          <span>Energy Gained</span><br></br>
        </div>
          <button className ="minusbutton" onClick={decCount}>-</button>
          <button onClick={incCount}>+</button>
       
        
        <br></br><br></br><br></br>

        <div className='EDEST'>
          <span>Energy Destroyed</span><br></br>
        </div>
          <button className ="minusbutton" onClick={incCount}>-</button>
          <button onClick={decCount}>+</button>
        
        <br></br><br></br>
        <br></br><br></br>

        <button className="Endturn" onClick={nextTurn}>End Turn</button>
        <br></br><br></br>
        <div className='bottom'>
          <button className="Reset" onClick={reset}>Reset</button>
        </div>
        
      </div>
    </div>
    </>
    
  )
}
export default App;
