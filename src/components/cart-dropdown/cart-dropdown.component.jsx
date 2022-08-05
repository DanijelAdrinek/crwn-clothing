import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.components";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutPage = () => {
        navigate("/checkout");
    }

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {   cartItems.map(item => {
                        return <CartItem key={item.id} cartItem={item} />
                    })
                }
            </div>
            <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
        </div>
    );
}

export default CartDropdown;