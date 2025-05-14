import styled from "styled-components"
import type { LocationType } from "@types"

const StyledLocationItem = styled.article`
max-width: 400px;
border: 2px solid #4fbaf0;
border-radius: 8px;
padding: 16px;
flex: 1 1 300px;
background-color: #98fa8c;
`;

const LocationInfo = styled.p`
  margin: 4px 0;
  color: #333;
  
  &:first-child {
    font-weight: bold;
  }
`;

export const LocationItem: React.FC<Pick<LocationType, 'name' | 'dimension' | 'type'>> = ({ name, dimension, type }) => {
	return (
		<StyledLocationItem>
			<LocationInfo>Name: {name}</LocationInfo>
			<LocationInfo>Dimension: {dimension}</LocationInfo>
			<LocationInfo>Type: {type}</LocationInfo>
		</StyledLocationItem>
	)
}