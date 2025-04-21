import { createContext, useContext, useEffect, useState } from "react";

const productsContext = createContext();

export function ProductsProvider({children}){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));
    }, []);

    return (
        <productsContext.Provider value={{products}}>
            {children}
        </productsContext.Provider>
    )
}

export const useProducts = () => useContext(productsContext)