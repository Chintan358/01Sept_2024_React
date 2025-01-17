
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'
import { useRef } from 'react'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const data = useRef()

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const byAmountHandler = () => {
    dispatch(incrementByAmount(Number(data.current.value)))
    data.current.value = "  "
  }



  return <div className='container'>
    <button onClick={incrementHandler}>+</button>
    <p>Count : {count} </p>
    <button onClick={decrementHandler}>-</button>
    <br />
    <input type="text" ref={data} />
    <button onClick={byAmountHandler}>Add</button>
  </div>

}

export default App
