import Button from "./components/button/Button";
import Message from "./components/message/Message";

function App() {
  return (
    <div className="w-full ">
      {/* <Message value={brazily} />
      <div className="flex gap-3 justify-center">
        <Button click={handleDecrease}>decrease</Button>
        <Button click={handleIncreament}>incremant</Button>
      </div> */}

      <input
        type="text"
        className="w-[90%] mt-10 mx-auto border bg-amber-500 p-5"
      />
    </div>
  );
}

export default App;
