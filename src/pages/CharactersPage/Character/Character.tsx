import styled from "styled-components"
import { ContentTitle, CustomImage } from "@components"
import type { CharacterType } from "@types"

const StyedCharacter = styled.div`
max-width: 150px;
`

export const Character: React.FC<Pick<CharacterType, 'name' | 'image'>> = ({...props}) => {
	return (
		<StyedCharacter>
				<CustomImage $borderRadius="15px" $maxWidth="150px">
					<img src={props.image} alt="Character image" />
				</CustomImage>
			<ContentTitle $fontSize="18px" $marginTop="5px" $textAlign="center">
				{props.name}
			</ContentTitle>
		</StyedCharacter>
	)
}