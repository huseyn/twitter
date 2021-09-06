import { createGlobalStyle } from "styled-components";

const Container = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    text-decoration: none;
    list-style: none;
  }

  *:focus {
    outline: none;
  }
`;

export default Container;