import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount, reset } from '../Redux/counterSlice'



function Counter() {

  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counterSlice.count)
  const [amount,setAmount]=useState(0)
  const handleIncrement=()=>{
 if(amount>0){
  dispatch(incrementbyAmount(+amount))
  setAmount("")
 }else{
  alert("Enter valid Amount")
 }
  }

  return (
    <div className='mt-5 a1 container '>
<div>
  <h1 className='text-white text-center mt-5'>Counter App</h1>
  <h1 className='text-white text-center mt-4 '>{count}</h1>
</div>

<div className='row text-center mt-2'>
  <div className='mt-5 col-4'>
    <button onClick={()=>dispatch(increment())} >Increment</button>
  </div>
  <div className='mt-5 col-4 '>
    <button onClick={()=>dispatch(decrement())} >Decrement</button>
  </div>
  <div className='mt-5 col-4'>
    <button onClick={()=>dispatch(reset())} >Reset</button>
  </div>
  <div className='d-flex justify-content-between mt-5 w-100'>
  <input onChange={e=>setAmount(e.target.value)} value={amount||""} type="text" className='form-control mb-5' placeholder='Enter the amount to be Incremented!!!' />
  <button onClick={handleIncrement} className='btn btn-primary ms-3 mb-5'>Incremented by Amount</button>
</div>
</div>

</div>
  )
}

export default Counter