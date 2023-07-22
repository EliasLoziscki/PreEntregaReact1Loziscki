import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantify, setQuantify] = useState (initial)

    const increment = () => {
        if(quantify < stock) {
            setQuantify(quantify+1)
        }
    }

    const decrement = () => {
        if(quantify > !stock) {
            setQuantify(quantify - 1)
        }
    }

    return(
            <div className='counter'>
                <div className='controls'>
                    <button className='button' onClick={decrement}>-</button>
                    <h4 className='number'>{quantify}</h4>
                    <button className='button' onClick={increment}>+</button>
                </div>
                <div>
                    <button className='button' onClick={() => onAdd(quantify)} disabled={!stock}>Agregar al carrito</button>
                </div>
            </div>
    )
}

export default ItemCount