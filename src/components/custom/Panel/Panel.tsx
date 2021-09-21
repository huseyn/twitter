import React from "react";
import { IPanelTypes } from "./types";
import Container from "./styles";

const Panel = ({ display, children, ...props }: IPanelTypes) => (
  <Container {...props} display={display}>
    {children}
  </Container>
);

export default Panel;
