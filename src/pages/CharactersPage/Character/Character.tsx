import styled from "styled-components"
import { CustomImage } from "@components"
import type { CharacterProps } from "@types"
import React from "react";

const StyedCharacter = styled.article`
max-width: 200px;
`;

const StyledFigcaption = styled.figcaption`
font-size: 18px;
font-weight: 600;
margin-top: 5px;
margin-bottom: 5px;
text-align: center;
overflow-wrap: break-word;
`;

export const Character: React.FC<CharacterProps> = React.memo(({
	name,
	image,
}) => {

	return (
				<StyedCharacter>
					<CustomImage $borderRadius="15px" $maxWidth="200px">
						<img src={image} alt="Character image" />
						<StyledFigcaption>
							{name}
						</StyledFigcaption>
					</CustomImage>
				</StyedCharacter>
	)
})