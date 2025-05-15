import type { EpisodeType } from "@types"
import { ContentTitle, InfoCardStyles, ParagraphsStyles } from "@components";

export const Episode: React.FC<Pick<EpisodeType, 'name' | 'episode' | 'air_date'>> = ({ name, episode, air_date }) => {
	return (
		<InfoCardStyles>
			<ContentTitle as={'h3'} $color="#333">Name: {name}</ContentTitle>
			<ParagraphsStyles>Episode: {episode}</ParagraphsStyles>
			<ParagraphsStyles>Air date: {air_date}</ParagraphsStyles>
		</InfoCardStyles>
	)
}