import { MouseEvent, MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  background?: string;
  hovercolor?: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fontsize?: string;
  key?: string;
  padding?: string;
  margin?: string;
}

export const Button = styled.button<{
  background?: string;
  hovercolor?: string;
  color?: string;
  fontsize?: string;
  padding?: string;
  margin?: string;
}>`
  padding: ${({padding}) => padding || "20px"};
  font-size: ${({fontsize}) => fontsize || "25px"};
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${({background}) => background || "darkgrey"};
  color: ${({color}) => color || "white" };
  margin: ${({margin}) => margin || "0px"};

  &:hover {
    background-color: ${({hovercolor}) => hovercolor || "black"};
  }
`;

const StyledButton = ({
  onClick,
  background,
  hovercolor,
  color,
  fontsize,
  padding,
  children
}: PropsWithChildren<Props>) => {  
  return (
    <Button onClick={onClick} background={background} hovercolor={hovercolor} color={color} fontsize={fontsize} padding={padding}>
      {children}
    </Button>
  );
};

export default StyledButton;
