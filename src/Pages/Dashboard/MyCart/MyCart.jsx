import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart()
    console.log(cart)
    return (
        <div>
            <Helmet><title>Selected Classes  | ArtOne</title></Helmet>
            <h2>Total Selected Classes: {cart.length}</h2>
        </div>
    );
};

export default MyCart;