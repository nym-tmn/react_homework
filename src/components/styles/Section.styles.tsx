import { styled } from "styled-components";

export const SectionStyles = styled.section<{$display?: string}>`
flex: 1 1 auto;
display: ${({ $display }) => $display || 'block'};
`;