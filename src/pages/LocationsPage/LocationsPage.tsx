import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getLocations } from "@api";
import type { LocationsType } from "@types";
import { LocationItem } from "./Location/LocationItem";
import { ContentTitle, CustomImage, Flex, Pagination, SectionStyles } from "@components";
import failedImage from '@assets/images/failedImage.webp';

export const LocationsPage = () => {

	const [locations, setLocations] = useState<LocationsType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(0);
	const [error, setError] = useState<string | null>(null);

	const getAxiosLocations = useCallback(async () => {
		try {
			const { info, results } = await getLocations(currentPage);
			setLocations(results);
			setPages(prevPages => prevPages !== info.pages ? info.pages : prevPages);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 404) {
					setError("Failed to load locations.");
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
		getAxiosLocations();
	}, [getAxiosLocations])

	return (
		<>
			<ContentTitle $fontSize="28px" $marginBottom="20px" $maxWidth="200px">
				Locations
			</ContentTitle>
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
					<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 20px 0">
						{locations && locations
							.map(location =>
								<LocationItem key={location.id} name={location.name} dimension={location.dimension} type={location.type} />)}
					</Flex>
				</SectionStyles>
				<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
			</>
			)}
		</>
	)
}