import './ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
            <ItemCount initial={1} stock={10} onAdd={(quantify) => console.log('cantidad agregada ', quantify)} />

        </footer>

    </article>
  )
}

export default ItemDetail