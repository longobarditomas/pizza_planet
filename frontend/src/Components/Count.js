import * as React from 'react'
import {useCount} from '../count-context'

function CountDisplay() {
  const {
    state: {count},
  } = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function CounterDecrement() {
    const {dispatch} = useCount()
    return (
      <button onClick={() => dispatch({type: 'decrement'})}>
        Decrement count
      </button>
    )
}

function Counter() {
  const {dispatch} = useCount()
  return (
    <button onClick={() => dispatch({type: 'increment'})}>
      Increment count
    </button>
  )
}

export {CountDisplay, CounterDecrement, Counter}
