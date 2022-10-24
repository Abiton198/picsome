import React, {useContext} from 'react'
import { Context } from '../Context'
import useHover from './hooks/useHover'
// import PropTypes from 'prop-types'

export default function CartItems({item}) {
    const {removeFromCart, CartItems} = useContext(Context)
    const [hovered,ref] = useHover()
    const deleteIconDisplay = hovered ? "ri-delete-bin-fill": "ri-delete-bin-line"

  return (

    <div className="cart-item">

        <i className={deleteIconDisplay} 
            onClick={()=>removeFromCart(item.id)}
            ref={ref}>
        </i>

        <img src={item.url} width="130px" />
        <p>$5.99</p>
    </div>

  )
}

//useRef hook - helps keep values of properties for entire function

// CartItem.propTypes = {
//     item: PropTypes.shape({
//         url: PropTypes.string.isRequired
//     })
// }