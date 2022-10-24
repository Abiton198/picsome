import React, {useContext, useState} from "react"
import { Context } from "../Context"
import CartItems from "../components/CartItems"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItems key={item.id} item={item}/>))
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString('en-US', {style:'currency', currency:'USD'})
    const [buttonText, setButtonText] = useState("Place Order")

//func to conditionally display text on button dependending on action done or happening
function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(()=>{
            emptyCart()
            setButtonText('Place Order')
        }, 3000)
    }

    //conditional rendering of text displayed message to improve user experience
    return (
        <main className="cart-page">
            
                <h1>Check out</h1>
               {cartItemElements}  
            <p className="total-cost">Total: {totalCostDisplay}</p>

            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div>
                :

                <h1>You need to place an order first</h1>
            }     
            
        </main>
    )
}

export default Cart

//funct Cart is bringing items selected in the main into the cart folder
//total cost calculated and displayed using the toLocaleString()