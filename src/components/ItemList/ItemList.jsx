import Item from '../Item/Item';
import "./ItemList.css";

const ItemList = ({products}) => {
  return (
    <div  className="row mx-auto m-sm-5 g-3">
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  ) 
}

export default ItemList;