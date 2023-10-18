import React from 'react'

export default function ChangeState({bg,color, changeState, state}) {

  return (
    <>
    <button style={{ backgroundColor: bg }} onClick={() => changeState(state + 1)}>Change++</button>
    <button style={{ color: color }} onClick={() => changeState(state - 1)}>Change--</button>
    </>
  )
}
