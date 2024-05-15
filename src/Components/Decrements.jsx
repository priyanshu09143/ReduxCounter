import React from 'react'
import { useDispatch } from 'react-redux'
import { Decrement } from '../redux/action/index'

function Decrements() {
    const Dispatch = useDispatch()
    return (
        <>
            <button onClick={() => { Dispatch(Decrement()) }}>-</button>
        </>
    )
}

export default Decrements