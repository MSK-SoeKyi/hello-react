export default function Item({ item, del, toggle }) {
  return (
    <li>
      <button type="button" onClick={() => toggle(item.id)}>
        {item.done ? "Undo" : "Check"}
      </button>{" "}
      {item.name}{" "}
      <button type="button" onClick={() => del(item.id)}>
        Delete
      </button>
    </li>
  );
}
