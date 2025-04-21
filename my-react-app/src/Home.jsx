import { Navigate, useNavigate } from "react-router-dom";
import { useProducts } from "./ProductsContext";

export default function Home(){
    const {products} = useProducts();
    console.log(products);

    const navigate = useNavigate();

    return (
        <>
            <div className="grid">
            {products.map((p, i) => {
                return(
                    
                        <div className="card" key={p.id}>
                            <img  src={p.image}/>
                            <h3 >{p.title}</h3>
                            <h4 >{p.price}</h4>
                            <button onClick={() => navigate(`/details/${p.id}`)}>view details</button>
                        </div>
                    
                )
            })}

            </div>
           
        </>
    )
}