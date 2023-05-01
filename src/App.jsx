import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react';
import { getProducts } from './redux/productSlice';

function App() {
   useSelector((state)=>console.log(state));
   const dispatch =  useDispatch();
   useEffect(()=>{
    dispatch(getProducts());
   },[])
  return (
    <div>
      HELLO
    </div>
  )
}

export default App
