import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <>
            <div className="nav"> 
                <NavLink to='/'><h2>Home</h2></NavLink>
                <NavLink to='/cart'><h2>Cart</h2></NavLink>
            </div>
        </>
    )
}