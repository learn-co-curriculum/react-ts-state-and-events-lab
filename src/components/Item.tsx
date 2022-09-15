interface Props {
  name: string;
  category: string;
}

function Item({ name, category }: Props) {
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
