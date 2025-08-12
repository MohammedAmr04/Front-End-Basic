import Card from "./Card";
const items = [
  {
    title: "sama",
    price: 20,
  },
  {
    title: "omar",
    price: 50,
  },
  {
    title: "sama",
    price: 20,
  },
  {
    title: "sama",
    price: 20,
  },
  {
    title: "sama",
    price: 20,
  },
  {
    title: "sama",
    price: 20,
  },
];
function App() {
  return (
    <div className="flex gap-4 bg-teal-300 ">
      {items.map((item, index) => (
        //block of code
        <>
          <p>{index}</p>
          <Card item={item} />
        </>
      ))}
    </div>
  );
}

export default App;
