import { Link } from "react-router-dom"
export default function Cart(){
    return(
        <Link to='/cart'>
        <div className='container' >
            <div className='cart-container' >
                <h2>Shopping Cart</h2>
            </div>
        </div>
        </Link>
    )
}