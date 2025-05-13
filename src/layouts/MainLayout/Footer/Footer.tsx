import styled from "styled-components"
import { Flex } from "@components"

const StyledFooter = styled.div`
background-color: black;
color: white;
font-size: 14px;
`;

const FooterLink = styled.a`
  text-decoration: underline;
  text-transform: uppercase;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Footer = () => {

	const baseURL: string = import.meta.env.VITE_API_BASE_URL;

	return (
		<StyledFooter>
			<Flex $height="50px" $justify="space-between" $align="center" $margin="0 370px">
				<FooterLink href={`${baseURL}/character`} target="_blank" rel="noopener noreferrer">
					characters 826
				</FooterLink>
				<FooterLink href={`${baseURL}/location`} target="_blank" rel="noopener noreferrer">
					locations 126
				</FooterLink>
				<FooterLink href={`${baseURL}/episode`} target="_blank" rel="noopener noreferrer">
					episodes 51
				</FooterLink>
			</Flex>
		</StyledFooter>
	)
}