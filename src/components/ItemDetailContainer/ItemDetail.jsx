import './ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useContext, useState } from 'react'


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    function handleAddToCart () {
        alert(`agregaste ${name} al carrito`)
    }
    
    const [quantityAdded, setQuantityAdded] = useState (0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
    <article className='cardItem container'>
        <header className='header'>
            <h2>
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt='{name}' className='itemImg'/>
        </picture>
        <section>
            <p className='info'>
                Categoria: {category}
            </p>
            <p className='info'>
                Descripción: {description}
            </p>
            <p className='info'>
                Precio: {price}
            </p>
        </section>
        <footer className='itemFooter'>
            <ItemCount onAddToCart={handleAddToCart} initial={1} stock={10} onAdd={handleOnAdd} />

        </footer>

    </article>
  )
}

export default ItemDetail