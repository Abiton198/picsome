import React, { useContext } from 'react'
import { Context } from '../Context'
import useHover from './hooks/useHover'
// import PropTypes from "prop-types"

  function Images({className, img}) {
   const [hovered, ref] = useHover()
    const {toggleFavorite, addCartImage, cartItems,removeFromCart} = useContext(Context)

    //conditional rendering of icons upon hovering and clicking the images
    function heartIcon() {
        if (img.isFavorite){
            return <i className="ri-heart-fill favorite" 
                    onClick={()=> removeFromCart(img.id)}>
                    </i>
        } else if(hovered){
            return <i className="ri-heart-line favorite" 
                    onClick={() => toggleFavorite(img.id)}>
                    </i>
        }
    }

    //function to make image change to cart image and added to the cart
    //some() === to indicate on selected items for cart
    function cartIcon(){
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" onClick={()=>removeFromCart(img.id)}></i>
        }else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={()=>addCartImage(img)}></i>
        }
    }

  return (
    <div className={`${className} image-container`}
            ref={ref}
    >
        <img src={img.url} className="image-grid"/>
        {heartIcon()}
        {cartIcon()}
    </div>
  )
}
//PropTypes === when changes are to be made to the code, a warning is given to avoid code breaking

// Images.propTypes = {
//     className: PropTypes.string,
//     img: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//         isFavorite: PropTypes.bool
//     })
// }
  
   export default Images
//the image is being loaded from the url we get from the API
//image container is the grid - styled container for our images 