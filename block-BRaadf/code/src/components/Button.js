import React from "react";

import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function SwitchButton({ changeMode }) {
  let mode = useContext(UserContext);

  return (
    <button
      className={`btn ${mode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
