import { useCallback, useEffect, useMemo, useState } from "react"
import { getCharacters } from "@api"
import { Button, ContentTitle, Flex, Modal, Pagination, SectionStyles } from "@components"
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

	const charactersList = useMemo(() => {
		if (!characters) return null;
		return characters.map(character => 
			<Button
				key={character.id}
				$isCharacter={true}
				onClick={() => handleSetCharacterClick(character)}>
				<Character
					name={character.name}
					image={character.image}
				/>
			</Button>
		)
	}, [characters, handleSetCharacterClick])

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
					{charactersList}
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