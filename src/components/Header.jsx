import React, {useContext} from "react"
import {Link} from 'react-router-dom'
import {Context} from '../Context'

function Header() {
    const {cartItems} = useContext(Context)
    const className = cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"
    return (
        <header>
            <Link to='/'><h2>Pic Some</h2></Link>
            <Link to='/Cart'><i className={className}></i></Link>
        </header>
    )
}

export default Header

// Link is a replacement of <a> tag
//className ---a conditional display of the cart, if items ar in or if empty