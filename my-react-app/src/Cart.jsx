import { useCart } from "./CartContext";

export default function Cart(){
    const {cart, addToCart, removeFromCart, checkPresentOrNot} = useCart();

    console.log(cart);
    if(cart.length == 0){
        return(
            <>
                <h4>No items in the cart</h4>
            </>
        );
    }
    let totalPrice = 0;
    cart.forEach(p => totalPrice+=p.price);

    return(
        <>
            <div className="grid">
            {cart.map((p, i) => {
                return(
                    
                        <div className="card" key={p.id}>
                            <img  src={p.image}/>
                            <h3 >{p.title}</h3>
                            <h4 >${p.price}</h4>
                            <button onClick={() => removeFromCart(p.id)}>remove</button>
                        </div>
                    
                )
            })}

            </div>
            <div className="checkout">
                <h4>Total Price: ${totalPrice}</h4>
                <button>checkout</button>
            </div>
         
            
        </>
    )

}