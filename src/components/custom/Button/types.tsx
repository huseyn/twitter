export interface IButtonProps {
  content: string;
  buttonType: ButtonType;
  onClick: () => void;
}

export type ButtonType = "tweet" | "follow";
