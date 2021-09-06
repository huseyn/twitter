import React from "react";
import Button from "@custom/Button";

import GlobalStyle from "./styles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Button
        content='Tweet'
        buttonType='tweet'
        onClick={() => console.log("Tweeted")}
      />
    </>
  );
};

export default App;
