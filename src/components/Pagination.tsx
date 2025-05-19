import { useEffect, useMemo, useState } from "react";
import { Button, Flex } from "@components"
import type { PaginationProps } from "@types";

export const Pagination: React.FC<PaginationProps> = ({ pages, currentPage, setCurrentPage }) => {

	const [portionCount, setPortionCount] = useState(1);

	const { pagesCount, totalPortion, prevPagesPortion, nextPagesPortion } = useMemo(() => {
		const pagesCount: number[] = [];
		if (pages) {
			for (let i = 1; i <= pages; i++) {
				pagesCount.push(i);
			}
		}

		const pagesPortion = 5;
		const totalPortion = Math.ceil(pages / pagesPortion);
		const prevPagesPortion = (portionCount * pagesPortion) - pagesPortion + 1;
		const nextPagesPortion = portionCount * pagesPortion;

		return { pagesCount, totalPortion, prevPagesPortion, nextPagesPortion };
	}, [pages, portionCount]);

	useEffect(() => {
		if (currentPage === 1) {
			setPortionCount(1);
		}
	}, [currentPage])

	return (
		<Flex as={'nav'} $margin="0 0 18px 0" $gap="5px">
			{pages > 0 &&
				<>
					{portionCount > 1 &&
						<>
							<Button
								$maxWidth="40px"
								prefix="<<"
								onClick={() => setPortionCount(1)}></Button>
							<Button
								$maxWidth="40px"
								prefix="<"
								onClick={() =>
									setPortionCount(prevPortionCount => prevPortionCount - 1)}></Button>
						</>}
					<>
						{pagesCount.filter(page => prevPagesPortion <= page && page <= nextPagesPortion)
							.map(page => <Button
								key={page}
								$isActive={currentPage === page}
								onClick={() => setCurrentPage(page)}
								$maxWidth="40px"
							>
								{page}
							</Button>)}
					</>
					{portionCount < totalPortion &&
						<>
							<Button
								$maxWidth="40px"
								prefix=">"
								onClick={() => setPortionCount(prevPortionCount => prevPortionCount + 1)}></Button>
							<Button
								$maxWidth="40px"
								prefix=">>"
								onClick={() => setPortionCount(totalPortion)}></Button>
						</>}
				</>}
		</Flex>
	)
}