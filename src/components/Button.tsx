import { MouseEvent, MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  background?: string;
  hoverColor?: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fontsize?: string;
  key?: string;
  padding?: string;
}

const Button = styled.button<{
  background?: string;
  hoverColor?: string;
  color?: string;
  fontsize?: string;
  padding?: string;
}>`
  padding: ${({padding}) => padding || "20px"};
  font-size: ${({fontsize}) => fontsize || "25px"};
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${({background}) => background || "darkgrey"};
  color: ${({color}) => color ?? "white" };

  /* Hover effect */
  &:hover {
    background-color: ${({hoverColor}) => hoverColor || "black"};
  }
`;

const StyledButton = ({
  onClick,
  background,
  hoverColor,
  color,
  fontsize,
  padding,
  children
}: PropsWithChildren<Props>) => {  return (
    <Button onClick={onClick} background={background} hoverColor={hoverColor} color={color} fontsize={fontsize} padding={padding}>
      {children}
    </Button>
  );
};

export default StyledButton;
