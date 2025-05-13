import { getCharacters } from "@api"
import { ContentTitle, Flex } from "@components"
import type { CharactersType } from "@types";
import { useEffect, useState } from "react"
import { Character } from "./Character/Character";

export const CharactersPage = () => {

	const [characters, setCharacters] = useState<CharactersType | null>(null);

	const getAxiosCharacters = async () => {
		try {
			const characters = await getCharacters();
			setCharacters(characters);
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
			}
		}
	}

	useEffect(() => {
		getAxiosCharacters();
	}, [])

	return (
		<Flex $direction="column" $align="center" $margin="0 20px 10px 20px">
			<ContentTitle $fontSize="28px" $marginBottom="20px" $maxWidth="200px">
				Characters
			</ContentTitle>
			<Flex $justify="center" $wrap="wrap" $gap="20px">
				{characters && characters.map(character => <Character key={character.id} name={character.name} image={character.image} />)}
			</Flex>
		</Flex>
	)
}

// useCallback