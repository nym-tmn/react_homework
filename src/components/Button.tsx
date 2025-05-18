import { css, styled } from "styled-components";
import type { ButtonProps } from "@types";

const reset = css`
  display: block;
	justify-content: flex-start;
  padding: 0;
	max-width: none;
	line-height: normal;
	border-radius: 15px;
	background-color: transparent;
	color: inherit;
	font-size: 18px;
	transition: none;

	&:hover {
    background-color: transparent;
  }
`;

const StyledButton = styled.button<ButtonProps>`
	display: inline-flex;
	justify-content: center;
  padding: 0 16px;
  max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
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

  ${({ $isActive }) => $isActive && css`
    background-color: #4fbaf0;
    &:hover {
      background-color: #4fbaf0;
    }
  `}

  ${({ $isCharacter }) => $isCharacter && css`
		${reset}
		transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.75);
    z-index: 1;
    }
  `}
`;

export const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {

	return (
		<StyledButton onClick={onClick} {...props}>
			{props.prefix && <span>{props.prefix}</span>}
			{children}
		</StyledButton>
	)
}