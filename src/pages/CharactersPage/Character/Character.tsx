import styled from "styled-components"
import { ContentTitle, CustomImage } from "@components"
import type { CharacterType } from "@types"

const StyedCharacter = styled.div`
max-width: 200px;
`;

export const Character: React.FC<Pick<CharacterType, 'name' | 'image'>> = ({name, image}) => {
	return (
		<StyedCharacter>
				<CustomImage $borderRadius="15px" $maxWidth="200px">
					<img src={image} alt="Character image" />
				</CustomImage>
			<ContentTitle $fontSize="18px" $marginTop="5px" $textAlign="center">
				{name}
			</ContentTitle>
		</StyedCharacter>
	)
}