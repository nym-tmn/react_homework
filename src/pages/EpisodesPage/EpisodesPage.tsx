import { useCallback, useEffect, useState } from "react";
import { getEpisodes } from "@api";
import { ContentTitle, Flex, Pagination, SectionStyles } from "@components";
import type { EpisodesType } from "@types";
import { Episode } from "./Episode/Episode";

export const EpisodesPage = () => {

	const [episodes, setEpisodes] = useState<EpisodesType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(0);

	const getAxiosEpisodes = useCallback(async () => {
		try {
			const { info, results } = await getEpisodes(currentPage);
			setEpisodes(results);
			setPages(prevPages => prevPages !== info.pages ? info.pages : prevPages);
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
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
			<SectionStyles>
				<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 20px 0">
					{episodes && episodes
						.map(episode =>
							<Episode key={episode.id} name={episode.name} episode={episode.episode} air_date={episode.air_date} />)}
				</Flex>
			</SectionStyles>
			<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</>
	)
}