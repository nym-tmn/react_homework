import type { PropsWithChildren } from "react";
import { styled } from "styled-components";

interface ButtonProps {
	prefix?: string;
}

export const StyledButton = styled.button`
  padding: 0 16px 0 12px;
	line-height: 2.3;
  border: none;
  border-radius: 6px;
  background-color: #4fb342;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #35782c;
  }
`;

export function Button({ children, ...props }: PropsWithChildren & ButtonProps) {
	return (
		<StyledButton>
			{props.prefix && <span>{props.prefix}</span>}
			{children}
		</StyledButton>
	)
}