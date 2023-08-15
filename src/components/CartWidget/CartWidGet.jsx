import './CartWidGet.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import cart from "../../assets/cart.png";


const CartWidGet = () => {
  const {totalQuantity} = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}} >
      <img className='cart' src={cart} alt='cart-widget'/>
    </Link>
    
  );
};

export default CartWidGet;
