import styled from "styled-components";
import {
  color,
  flexbox,
  layout,
  border,
  space,
  typography,
  BorderProps,
  ColorProps,
  LayoutProps,
  PaddingProps,
  FlexboxProps,
  TypographyProps,
} from "styled-system";

interface ButtonProps
  extends ColorProps,
    FlexboxProps,
    LayoutProps,
    TypographyProps,
    BorderProps,
    PaddingProps {}

export const StyleButton = styled.button<ButtonProps>`
  ${typography}
  ${color}
  ${flexbox}
    ${layout}
    ${border}
    ${space}
  cursor: pointer;
  :hover {
    color: #fff;
    background: #004761;
    border: solid 2px #fff;
  }

`;
