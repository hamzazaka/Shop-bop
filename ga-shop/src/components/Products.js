import {useState, useEffect} from 'react';
// import Banner from "../components/Banner";
export default function Products(props){
    const [product,getProduct]=useState([]);
    // const FAKE_API='https://fakestoreapi.com/products/';
    
       const getUser= async()=>{
           const response=await fetch('https://fakestoreapi.com/products/');
           const data= await response.json();
           getProduct(data);
           
       }
    
       useEffect(()=>{
        
           getUser()
       },[])
    console.log(product);

    return(
        <>
         <div className="container">
            <header>
               <div className='headerText'>
                   <h1>Get 25% Off on Woman's Jacket</h1>
                   <div className='button1div'>
                   <button className='button1' >Shop Now</button>
                   </div>
               </div>
            </header>
        </div>
        <h1> Best Selling Products</h1>
        <div className="products">{product.map((hello)=>{
            return(
            <div className='product' key={hello.id} >
             <div className='product-image'>
                 <img src={hello.image} alt='not found'/>
             </div>
             <div className='product-details'>
                 <div className='product-name'>
                  {hello.title}
                     </div>
                     <div className='product-price'>
                       ${hello.price}
                     </div>
             </div>
             <div className="add-to-cart" >Add to Cart</div>
            </div> 
            )
        })}</div>
       </>
    )
}