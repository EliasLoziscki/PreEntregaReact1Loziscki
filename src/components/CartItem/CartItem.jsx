

const CartItem = ({ id, name, price, quantify }) => {
    return (
        <div className='cart-item'>
            <h4>{name}</h4>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantify}</p>
            <p>Total: ${price * quantify}</p>
        </div>
    );
}

export default CartItem;
