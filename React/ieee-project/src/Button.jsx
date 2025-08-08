import { Fragment, useEffect } from "react";
import "../src/button.css";

function Button() {
  useEffect(function () {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);
  return <Fragment>test</Fragment>;
}
export default Button;
