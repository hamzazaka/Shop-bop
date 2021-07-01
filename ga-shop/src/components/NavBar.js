export default function Navbar(){
    return(
        <nav>
            <ul className='left'>
                <li><a href="">GA Shop</a></li>
            </ul>
            <ul className='right'>
                <li><a href=''>
                    <span className="shoppingCart"><i class="fas fa-shopping-cart"></i>
                    <span className='cartCount'>0</span>
                    </span>
                    </a></li>
            </ul>
        </nav>
    )
}