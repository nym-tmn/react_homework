import { ContentTitle, CustomImage, Flex } from "@components"
import type { CharacterType } from "@types"
import styled from "styled-components"

const StyedCharacter = styled.div`
max-width: 160px;
`

export const Character: React.FC<Pick<CharacterType, 'name' | 'image'>> = ({...props}) => {
	return (
		<StyedCharacter>
			<Flex $direction="column">
				<CustomImage $borderRadius="15px" $maxWidth="160px">
					<img src={props.image} alt="Character image" />
				</CustomImage>
				<ContentTitle $fontSize="18px" $marginTop="5px" $textAlign="center">{props.name}</ContentTitle>
			</Flex>
		</StyedCharacter>
	)
}