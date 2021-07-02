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
    // props.product.map((hello)=>{
    //     console.log(hello.price)
    // })

    // product.map((hello)=>{
    //     return(
    //         <li>{hello.price}</li>
    //     )
    // })

//   const [product,getProduct]=useState();
// const FAKE_API='https://fakestoreapi.com/products/';

//    const getUser= async()=>{
//        const response=await fetch(FAKE_API);
//        const data= await response.json();
//        getProduct(data);

//    }

//    useEffect(()=>{
//        getUser()
//    },[])

    return(
        <>
         <div className="container">
            <header>
               <div className='headerText'>
                   <h1>Best GA Prodcuts on Sale</h1>
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



        // <h1>hello</h1>
        // <h1>{product.map((hello)=>{
        //     return(
        //         <>
        //         <h2>hello</h2>
        //     <li>{hello.price}</li>
        //     </>
        //     )
        // })}</h1>
        // <h1>hello</h1>
    )
}