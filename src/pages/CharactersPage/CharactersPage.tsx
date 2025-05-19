import { useCallback, useEffect, useMemo, useState, type ChangeEvent } from "react"
import axios from "axios";
import { getCharacters, getFiltredCharacters } from "@api"
import { Button, ContentTitle, CustomImage, CustomnInput, Flex, Modal, Pagination, SectionStyles } from "@components"
import { Character } from "./Character/Character";
import type { CharactersType, CharacterType } from "@types";
import failedImage from '@assets/images/failedImage.webp';

export const CharactersPage = () => {

	const [characters, setCharacters] = useState<CharactersType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(0);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedCharacter, setSelectedCharacter] = useState<CharacterType | null>(null);
	const [searchInputValue, setsearchInputValue] = useState('');
	const [error, setError] = useState<string | null>(null);

	const getAxiosCharacters = useCallback(async () => {
		try {
			setError(null);
			const pageToFetch = searchInputValue ? 1 : currentPage;
			const { info, results } = searchInputValue
				? await getFiltredCharacters(pageToFetch, searchInputValue)
				: await getCharacters(pageToFetch);

			setCharacters(results);
			setPages(info.pages);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 404) {
					setError(searchInputValue
						? `No characters found for "${searchInputValue}"`
						: "Failed to load characters.");
				}
			} else if (error instanceof Error) {
				console.error(error.message);
				setError("An unexpected error occurred");
			} else {
				console.error('Unknown error:', error);
				setError("Something went wrong");
			}
		}
	}, [currentPage, searchInputValue])

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

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setCurrentPage(1);
		setsearchInputValue(event.target.value);
	}

	useEffect(() => {
		getAxiosCharacters();
	}, [getAxiosCharacters])

	return (
		<>
			<ContentTitle $fontSize="28px" $marginBottom="10px" $maxWidth="200px">
				Characters
			</ContentTitle>
			<CustomnInput $alignSelf="flex-start" $marginBottom="10px">
				<Flex $gap="10px">
					<label htmlFor="searchByName">
						Search by name:
					</label>
					<input
						id="searchByName"
						type="text"
						value={searchInputValue}
						onChange={handleInputChange}
					/>
				</Flex>
			</CustomnInput>

			{error ? (
				<SectionStyles>
					<Flex $direction="column" $justify="center" $align="center" $minHeight="200px">
						<ContentTitle $fontSize="32px">{error}</ContentTitle>
						<CustomImage>
							<img src={failedImage} alt="Unsuccessful request" />
						</CustomImage>
					</Flex>
				</SectionStyles>
			) : (
				<>
					<SectionStyles>
						<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 10px 0">
							{charactersList}
						</Flex>
					</SectionStyles>
					<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
				</>
			)}
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