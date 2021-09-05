import styled, { css } from "styled-components";

const TweetButton = css`
  background: rgb(133, 133, 224);
  color: #fff;
`;

const FollowButton = css`
  text-align: center;
  border: 1px solid rgb(129, 129, 255);
  color: rgb(129, 129, 255);
  border-radius: 15px;
  background: transparent;
`;

type ButtonType = "tweet" | "follow";
const getButtonTypeStyles = (props: { styleType: ButtonType }) => {
  if (props.styleType === "tweet") return TweetButton;
  return FollowButton;
};

export const StyledButton = styled.button`
  display: block;
  padding: 10px 20px;
  text-align: center;
  font-size: 15px;
  border-radius: 25px;
  transition: 0.2s all ease-in-out;
  ${getButtonTypeStyles}
`;
