import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className="articleItemContainer col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <header className="mt-5">
                <h2 className="hItem text-center">
                    {name}
                </h2>
            </header>
            <picture className='d-flex justify-content-center align-items-center'>
                <img src={img} alt={name} className="imgItem justify-content-center" />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='mb-3'>
                <Link to={`/item/${id}`}>
                <button>Ver detalle</button>
                </Link>
            </footer>
        </article>
    )
};

export default Item;