import { createContext, useContext, useState } from "react";

const ShoppingCardContext = createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCardContext)
}

export function ShoppingCartProvider({children}) {
    const [cartItems,setCartItems] = useState([])

    function getItemQuantity(id){
        return cartItems.find(item=>item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id){
        setCartItems(currItems=>{
            if (cartItems.find(item=>item.id===id)==null){
                return [...currItems,{id, quantity:1}]
            } else {
                return currItems.map(item=>{
                    if (item.id ===id){
                        return {...item, quantity: item.quantity + 1}
                    } else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id){
        setCartItems(currItems=>{
            if (cartItems.find(item=>item.id===id)?.quantity === 1){
                return currItems.filter(item=>item.id !== id)
            } else {
                return currItems.map(item=>{
                    if (item.id ===id){
                        return {...item, quantity: item.quantity - 1}
                    } else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id){
        setCartItems(currItems=>{
           return currItems.filter(item=>item.id !== id)})
    }


    return <ShoppingCardContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity,removeFromCart,cartItems,setCartItems}}>
        {children}
    </ShoppingCardContext.Provider>
}