import { useCallback, useEffect, useState } from "react"
import { getCharacters } from "@api"
import { ContentTitle, Flex, Modal, Pagination, SectionStyles } from "@components"
import { Character } from "./Character/Character";
import type { CharactersType, CharacterType } from "@types";

export const CharactersPage = () => {

	const [characters, setCharacters] = useState<CharactersType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(0);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedCharacter, setSelectedCharacter] = useState<CharacterType | null>(null);

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

	const handleSetCharacterClick = useCallback((character: CharacterType | null) => {
		setSelectedCharacter(character);
		setIsOpenModal(prev => !prev);
	}, []);

	useEffect(() => {
		getAxiosCharacters();
	}, [getAxiosCharacters])

	return (
		<>
			<ContentTitle $fontSize="28px" $marginBottom="20px" $maxWidth="200px">
				Characters
			</ContentTitle>
			<SectionStyles>
				<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 10px 0">
					{characters && characters
						.map(character =>
							<Character
								key={character.id}
								name={character.name}
								image={character.image}
								onClick={() => handleSetCharacterClick(character)}
							/>
						)}
				</Flex>
			</SectionStyles>
			<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
			{selectedCharacter && (
				<Modal
					character={selectedCharacter}
					isOpenModal={isOpenModal}
					onClick={() => handleSetCharacterClick(null)}
				/>
			)}
		</>
	)
}