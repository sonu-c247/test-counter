import { StyleButton } from "./Button.style";

import {
  BorderProps,
  ColorProps,
  LayoutProps,
  PaddingProps,
  FlexboxProps,
  TypographyProps,
} from "styled-system";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

interface ButtonProps
  extends ColorProps,
    FlexboxProps,
    LayoutProps,
    TypographyProps,
    BorderProps,
    PaddingProps {}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <StyleButton
      fontFamily="Inter, sans-serif"
      bg="#fff"
      fontSize="24px"
      fontWeight="700"
      width="160px"
      borderRadius={50}
      padding="12px"
      onClick={onClick}
    >
      {children}
    </StyleButton>
  );
};

export default Button;
