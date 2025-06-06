import { useCallback, useEffect, useMemo, useState, type ChangeEvent } from "react"
import axios from "axios";
import { getCharacters, getFiltredCharacters } from "@api"
import { Button, ContentTitle, CustomImage, CustomnInput, Flex, Modal, Pagination, SectionStyles } from "@components"
import { Character } from "./Character/Character";
import type { CharactersType, CharacterType } from "@types";
import failedImage from '@assets/images/failedImage.webp';
import loadingImage from '@assets/images/loading.webp';
import { useDebounce } from "@hooks";

export const CharactersPage = () => {

	const [characters, setCharacters] = useState<CharactersType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(0);
	const [portionCount, setPortionCount] = useState(1);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedCharacter, setSelectedCharacter] = useState<CharacterType | null>(null);
	const [searchInputValue, setsearchInputValue] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const debouncedSearchValue = useDebounce(searchInputValue, 500);

	const getAxiosCharacters = useCallback(async () => {
		try {
			setIsLoading(prevIsLoading => !prevIsLoading);
			setError(null);
			const { info, results } = debouncedSearchValue
				? await getFiltredCharacters(currentPage, debouncedSearchValue)
				: await getCharacters(currentPage);

			setCharacters(results);
			setPages(info.pages);
			setIsLoading(prevIsLoading => !prevIsLoading);
		} catch (error) {
			setIsLoading(prevIsLoading => !prevIsLoading);
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 404) {
					setError(debouncedSearchValue
						? `No characters found for "${debouncedSearchValue}"`
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
	}, [currentPage, debouncedSearchValue])

	const handleSetCharacterClick = useCallback((character: CharacterType | null) => {
		setSelectedCharacter(character);
		setIsOpenModal(prev => !prev);
	}, []);

	const charactersList = useMemo(() => {
		if (!characters) return null;
		return characters.map(character =>
			<Button
				key={character.id}
				$isAnimate={true}
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
			<CustomnInput $alignSelf="flex-start" $margin="0 0 10px 0">
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

				{isLoading ? (
					<SectionStyles $display="flex">
						<Flex $direction="column" $justify="center" $align="center">
							<ContentTitle as={'h3'} $marginBottom="40px" $fontSize="22px">Loading...</ContentTitle>
							<CustomImage>
								<img src={loadingImage} alt="Loading image" />
							</CustomImage>
						</Flex>
					</SectionStyles>
				) : error ? (
					<SectionStyles $display="flex">
						<Flex $direction="column" $justify="center" $align="center">
							<ContentTitle as={'h3'} $fontSize="32px">{error}</ContentTitle>
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
						<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} portionCount={portionCount} setPortionCount={setPortionCount}/>
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
	);
};