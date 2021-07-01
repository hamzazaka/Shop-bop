import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav>
            <ul className='left'>
                <li><Link to="/">GA Shop</Link></li>
            </ul>
            <ul className='left' >
                <li><Link to="/About">About</Link></li>
            </ul>
            <ul className='left' >
                <li><Link to="/Contact">Contact Us
                </Link></li>
            </ul>
            <ul className='right'>
                <li><Link to='/cart'>
                    <span className="shoppingCart"><i class="fas fa-shopping-cart"></i>
                    <span className='cartCount'>0</span>
                    </span>
                    </Link></li>
            </ul>
        </nav>
    )
}