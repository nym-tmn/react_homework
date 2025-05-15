import { useCallback, useEffect, useState } from "react";
import { getLocations } from "@api";
import type { LocationsType } from "@types";
import { LocationItem } from "./Location/LocationItem";
import { ContentTitle, Flex, Pagination, SectionStyles } from "@components";

export const LocationsPage = () => {

	const [locations, setLocations] = useState<LocationsType | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState(0);

	const getAxiosLocations = useCallback(async () => {
		try {
			const { info, results } = await getLocations(currentPage);
			setLocations(results);
			setPages(prevPages => prevPages !== info.pages ? info.pages : prevPages);
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
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
			<SectionStyles>
				<Flex $justify="center" $wrap="wrap" $gap="20px" $margin="0 0 20px 0">
					{locations && locations
						.map(location =>
							<LocationItem key={location.id} name={location.name} dimension={location.dimension} type={location.type} />)}
				</Flex>
			</SectionStyles>
			<Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
		</>
	)
}