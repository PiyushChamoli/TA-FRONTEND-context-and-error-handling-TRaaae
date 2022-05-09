import Card from "./Card";

import { useContext } from "react";
import { UserContext } from "./UserContext";

function Cards() {
  let mode = useContext(UserContext);
  return (
    <div className="cards_wrap">
      <UserContext.Provider value={mode}>
        <Card />
        <Card />
        <Card />
      </UserContext.Provider>
    </div>
  );
}

export default Cards;
