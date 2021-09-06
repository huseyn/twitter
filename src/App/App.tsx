import React from "react";
import Button from "@custom/Button";

import Container from "./styles";

const App = () => {
  return (
    <>
      <Container />
      <Button
        content='Tweet'
        buttonType='tweet'
        onClick={() => console.log("Tweeted")}
      />
    </>
  );
};

export default App;
