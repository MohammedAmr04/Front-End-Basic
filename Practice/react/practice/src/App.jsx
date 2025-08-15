import { useEffect, useRef, useState } from "react";
import Button from "./components/button/Button";
import Message from "./components/message/Message";

function App() {
  const [brazily, setBrazily] = useState(0);
  function handleDecrease() {
    setBrazily(brazily - 1);
  }
  function handleIncreament() {
    setBrazily(brazily + 1);
  }
  const ref = useRef();
  useEffect(function () {
    ref.current.focus();
  }, []);
  return (
    <div className="w-full ">
      {/* <Message value={brazily} />
      <div className="flex gap-3 justify-center">
        <Button click={handleDecrease}>decrease</Button>
        <Button click={handleIncreament}>incremant</Button>
      </div> */}

      <input
        ref={ref}
        type="text"
        className="w-[90%] mt-10 mx-auto border bg-amber-500 p-5"
      />
    </div>
  );
}

export default App;
