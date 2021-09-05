import React from "react";
import Button from "@custom/Button";

import { StyledApp } from "./StyledApp";

const App = () => {
  return (
    <>
      <StyledApp />
      <Button content='Tweet' onClick={() => console.log("Tweeted")} />
    </>
  );
};

export default App;
