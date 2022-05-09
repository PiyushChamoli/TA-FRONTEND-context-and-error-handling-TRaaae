import { useContext } from "react";
import { UserContext } from "./UserContext";

function Title({ text }) {
  let mode = useContext(UserContext);
  return (
    <h2
      className={`heading ${mode ? "sub-heading-dark" : "sub-heading-light"}`}
    >
      {text}
    </h2>
  );
}

export default Title;
