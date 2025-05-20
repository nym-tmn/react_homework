import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { getEpisodes } from "@api";
import { ContentTitle, CustomImage, Flex, Pagination, SectionStyles } from "@components";
import type { EpisodesType } from "@types";
import { Episode } from "./Episode/Episode";
import failedImage from '@assets/images/failedImage.webp';
import loadingImage from '@assets/images/loading.webp';

const EpisodesPageContainer = ({ className }: { className?: string }) => {

	const [episodes, setEpisodes] = useState<EpisodesType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const getAxiosEpisodes = useCallback(async () => {
		try {
			setIsLoading(prevIsLoading => !prevIsLoading);
			const { info, results } = await getEpisodes(currentPage);
			setEpisodes(results);
			setPages(prevPages => prevPages !== info.pages ? info.pages : prevPages);
			setIsLoading(prevIsLoading => !prevIsLoading);
		} catch (error) {
			setIsLoading(prevIsLoading => !prevIsLoading);
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 404) {
					setError("Failed to load episodes.");
				}
			} else if (error instanceof Error) {
				console.error(error.message);
				setError("An unexpected error occurred");
			} else {
				console.error('Unknown error:', error);
				setError("Something went wrong");
			}
		}
	}, [currentPage])

	useEffect(() => {
		getAxiosEpisodes();
	}, [getAxiosEpisodes])

	return (
		<>
			<ContentTitle $fontSize="28px" $marginBottom="20px" $maxWidth="200px">
				Episodes
			</ContentTitle>
			<Flex
				className={className}
				$direction="column"
				$justify="center"
				$align="center"
			>
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
							<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 20px 0">
								{episodes && episodes
									.map(episode =>
										<Episode key={episode.id} name={episode.name} episode={episode.episode} air_date={episode.air_date} />)}
							</Flex>
						</SectionStyles>
					</>
				)}
				<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
			</Flex>
		</>
	);
};

export const EpisodesPage = styled(EpisodesPageContainer)`
  flex: 1 1 auto;
`;