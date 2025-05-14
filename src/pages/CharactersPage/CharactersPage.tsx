import { useCallback, useEffect, useState } from "react"
import styled from "styled-components";
import { getCharacters } from "@api"
import { ContentTitle, Flex, Pagination } from "@components"
import type { CharactersType } from "@types";
import { Character } from "./Character/Character";

const StyledCharactersContainer = styled.div`
flex: 1 1 auto;
`

export const CharactersPage = () => {

	const [characters, setCharacters] = useState<CharactersType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(0);

	const getAxiosCharacters = useCallback(async () => {
		try {
			const { info, results } = await getCharacters(currentPage);
			setCharacters(results);
			setPages(prevPages => prevPages !== info.pages ? info.pages : prevPages);
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
			}
		}
	}, [currentPage])

	useEffect(() => {
		getAxiosCharacters();
	}, [getAxiosCharacters])

	return (
		<>
			<ContentTitle $fontSize="28px" $marginBottom="20px" $maxWidth="200px">
				Characters
			</ContentTitle>
			<StyledCharactersContainer>
				<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 10px 0">
					{characters && characters
						.map(character =>
							<Character key={character.id} name={character.name} image={character.image} />)}
				</Flex>
			</StyledCharactersContainer>
			<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</>
	)
}