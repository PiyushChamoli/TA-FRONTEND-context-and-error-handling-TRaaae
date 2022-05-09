import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";

import { useContext } from "react";
import { UserContext } from "./UserContext";

function Main() {
  let mode = useContext(UserContext);

  return (
    <>
      {/* <UserContext.Provider value={mode}> */}
      <Title text="Text Component" />
      <Paragraph />
      <Title text="Card Component" />
      <Cards />
      <Title text="Banner Component" />
      <Banner />
      {/* </UserContext.Provider> */}
    </>
  );
}

export default Main;
