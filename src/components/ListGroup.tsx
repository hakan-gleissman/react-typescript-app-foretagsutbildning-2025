import { useState } from "react";
type Props = {
  items: string[];
};
function ListGroup({ items }: Props) {
  //let items = ["Stockholm", "Paris", "Tokyo"];
  //items = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");
  return (
    <>
      <h1>List header</h1>
      <p>{name}</p>
      {items.length == 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              setName(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
