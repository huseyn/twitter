import React from "react";
import { IPanelTypes } from "./types";
import Container from "./styles";

const Panel = ({ display, ...props }: IPanelTypes) => (
  <Container {...props} display={display}></Container>
);

export default Panel;
