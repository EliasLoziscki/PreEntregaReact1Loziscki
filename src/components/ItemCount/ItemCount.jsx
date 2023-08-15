import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd, onAddToCart}) => {
    const [quantify, setQuantify] = useState (initial)

    const increment = () => {
        if(quantify < stock) {
            setQuantify(quantify+1)
        }
    }

    const decrement = () => {
        if (quantify > 0) {
            setQuantify(quantify - 1);
        }
    };
    

    const handleAddToCart = () => {
        if (stock > 0 && quantify > 0) {
          onAdd(quantify);
          onAddToCart();
        }
      };

    return(
            <div className='counter'>
                <div className='controls'>
                    <button className='button' onClick={decrement}>-</button>
                    <h4 className='number'>{quantify}</h4>
                    <button className='button' onClick={increment}>+</button>
                </div>
                <div>
                    <button className='button' onClick={handleAddToCart} disabled={!stock}>Agregar al carrito</button>
                </div>
            </div>
    )
}

export default ItemCount