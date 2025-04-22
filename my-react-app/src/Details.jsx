import { useParams } from "react-router-dom"
import { useProducts } from "./ProductsContext";
import { useCart } from "./CartContext";


export function Details(){
    let {id} = useParams();

    const {products} = useProducts();

    const {cart, addToCart, removeFromCart, checkPresentOrNot} = useCart();



    let p = products.filter(p => p.id === +id);

    return(
        <>
            <div className="detail">
            <div className="card detailCard">
                <img src={p[0].image}/>
                <h3>{p[0].title}</h3>
                <h4>${p[0].price}</h4>
                <p>{p[0].description}</p>
                <h4>Rating: {p[0].rating.rate}</h4>
                <button disabled={checkPresentOrNot(p[0].id) ? true: false} onClick={() => addToCart(p[0].id)}>{checkPresentOrNot(p[0].id) ? 'Present in Cart' : 'Add to Cart'}</button>
            </div>
            </div>
        </>
    )
}