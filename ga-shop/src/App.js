import './App.css';
import Navbar from './components/NavBar';
import Banner from "./components/Banner";
import Products from './components/Products';
import {useState, useEffect} from 'react';

function App() {
  const [product,getProduct]=useState([]);
const FAKE_API='https://fakestoreapi.com/products/';

  //  const getUser= async()=>{
  //      const response=await fetch(FAKE_API);
  //      const data= await response.json();
  //      getProduct(data);
       
  //  }

   useEffect(()=>{
    const getUser= async()=>{
      const response=await fetch(FAKE_API);
      const data= await response.json();
      getProduct(data);
      
  }
    
       getUser()
   },[])
  return (
    <div>
       <Navbar/>
       <Banner/>
       <div className='container' >
       <Products product={product}/>
       </div>
    </div>
  );
}

export default App;
