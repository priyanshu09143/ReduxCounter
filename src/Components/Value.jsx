import React from 'react'
import { useSelector} from 'react-redux'
function Value() {
  const State = useSelector(state => state.ChangeNumber)

  return (
    <>
        <h2>{State}</h2>
    </>
  )
}

export default Value