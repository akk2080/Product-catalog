import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "./ProductsContext";

const cartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState([]);
    const {products} = useProducts();


    useEffect(()=>{
       let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
       if(cartItems.length != 0)
        setCart(cartItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(id){
        if(checkPresentOrNot(id))
            return;
        let item = products.filter((p)=> p.id === id);
        //console.log(item);
        let cartItems = [];
        cartItems.push(item[0], ...cart);
        
       setCart(cartItems);
    }

    function removeFromCart(id){
       
        let temp = cart.filter(p => p.id !== id);
        setCart(temp);
        
        
    }

  

    function checkPresentOrNot(id){
        let present = false;
        if(cart.length > 0){
            cart.forEach(p => {
                if(p.id === id)
                    present = true;
            });
    
        }
        
        return present;
    }


    return (
        <cartContext.Provider value={{cart, addToCart, removeFromCart, checkPresentOrNot}}>
            {children}
        </cartContext.Provider>
    )

}

export const useCart = ()=> useContext(cartContext);
