
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./CartWidGet.css";

const CartWidGet = () => {
  return (
    <button className="cart">
      <ShoppingCartOutlinedIcon />
      <span className="numberCart">0</span>
    </button>
  );
};

export default CartWidGet;
