import { useState } from "react";

interface Props {
  name: string;
  category: string;
}

function Item({ name, category }: Props) {
  const [inCart, setInCart] = useState(false);
  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  function handleCart() {
    setInCart((inCart) => !inCart);
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
