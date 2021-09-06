export interface IButtonProps {
  content: string;
  styleType: ButtonType;
  onClick: () => void;
}

export type ButtonType = "tweet" | "follow";
