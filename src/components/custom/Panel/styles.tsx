import styled, { css } from "styled-components";
import { DisplayType } from "./types";

const flexStyle = css`
  display: flex;
`;

const displayStyles = {
  flex: flexStyle,
};

const getDisplayStyle = (props: { display: DisplayType }) =>
  displayStyles[props.display];

const Container = styled.div`
  height: 100%;
  ${getDisplayStyle}
`;

export default Container;
