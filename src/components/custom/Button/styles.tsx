import styled, { css } from "styled-components";
import { ButtonType } from "./types";

const tweetButtonStyle = css`
  background: rgb(133, 133, 224);
  color: #fff;
`;

const followButtonStyle = css`
  text-align: center;
  border: 1px solid rgb(129, 129, 255);
  color: rgb(129, 129, 255);
  border-radius: 15px;
  background: transparent;
`;

const buttonStyles = {
  tweet: tweetButtonStyle,
  follow: followButtonStyle,
};
const getButtonTypeStyles = (props: { styleType: ButtonType }) =>
  buttonStyles[props.styleType];

const Container = styled.button`
  display: block;
  padding: 10px 20px;
  text-align: center;
  font-size: 15px;
  border-radius: 25px;
  transition: 0.2s all ease-in-out;
  ${getButtonTypeStyles}
`;

export default Container;
