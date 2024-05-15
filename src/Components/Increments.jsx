import React from 'react'
import { useDispatch } from 'react-redux'
import { Increment } from '../redux/action/index'
function Increments() {
  const Dispatch = useDispatch()

  return (
    <>
      <button onClick={() => { Dispatch(Increment()) }}>+</button>
    </>
  )
}

export default Increments