function ListGroup() {
  let items = ["New York", "London", "Paris", "San Francisco", "Tokyo"];
  items = [];

  return (
    //shortcut fragment
    <>
      <h1>LIST</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
