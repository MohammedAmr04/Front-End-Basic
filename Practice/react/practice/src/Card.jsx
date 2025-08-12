function Card({ item }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>{item.title}</h1>
        <p>{item.price > 20 ? "great" : item.price}$</p>
      </div>
    </>
  );
}

export default Card;
