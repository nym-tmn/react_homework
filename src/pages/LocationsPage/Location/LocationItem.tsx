import type { LocationType } from "@types"
import { ContentTitle, InfoCardStyles, ParagraphsStyles } from "@components";

export const LocationItem: React.FC<Pick<LocationType, 'name' | 'dimension' | 'type'>> = ({ name, dimension, type }) => {
	return (
		<InfoCardStyles>
			<ContentTitle as={'h3'} $color="#333">Name: {name}</ContentTitle>
			<ParagraphsStyles>Dimension: {dimension}</ParagraphsStyles>
			<ParagraphsStyles>Type: {type}</ParagraphsStyles>
		</InfoCardStyles>
	)
}