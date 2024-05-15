import React from 'react'
import "./App.css"
import Value from './Components/Value'
import Increments from './Components/Increments'
import Decrements from './Components/Decrements'
function App() {

  return (
    <>
    <h1>Counter Using Redux</h1>
    <div className='container'>
      <Decrements />
      <Value />
      <Increments />
    </div>
    </>
  )
}

export default App