import React from 'react'
const Context = React.createContext()
import {useState, useEffect} from 'react'

function ContextProvider({children}){
const [allPhotos, setAllPhotos] = useState([])
const [isFavorite, setIsFavorite] = useState(false)
const [cartItems, setCartItems] = useState([])

const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data => setAllPhotos(data))
    
},[])

//func to add new image into the cart 
function addCartImage(newItem){
    setCartItems(prevItems => [...prevItems, newItem])
}

//func to remove item from cart
function removeFromCart(id){
    setCartItems(prevItems => prevItems.filter(item => item.id !==id))
}
console.log(addCartImage)
//setting up func to make if an image is selected according to _id is added to favorite
function toggleFavorite(id) {
    const updatedArr = allPhotos.map( photo =>{
         if(photo.id === id){
            console.log(id)
            console.log(photo.id)
            return {
                ...photo, isFavorite: !isFavorite
            }
        }
        return photo

     } )
     setAllPhotos(updatedArr)
}

//function to set cart at empty or remove all items in the cart
function emptyCart(){
    setCartItems([])
}

    return (
        <Context.Provider value={{allPhotos, 
                                toggleFavorite, 
                                cartItems, 
                                addCartImage, 
                                removeFromCart,
                                emptyCart}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}