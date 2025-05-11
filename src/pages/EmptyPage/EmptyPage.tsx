import styled from "styled-components"
import pageNotFoundImage from '@assets/images/page_not_found_image.webp'
import { ContentTitle, Flex } from "@components"

const EmptyPageContainer = ({ className }: { className?: string }) => {
	return (
		<Flex
			className={className}
			$direction="column"
			$justify="center"
			$align="center"
		>
			<ContentTitle $fontSize="44px" $marginBottom="20px">404</ContentTitle>
			<p>It seems that such a page does not exist</p>
			<img src={pageNotFoundImage} alt="Page not found" />
		</Flex>
	);
};

export const EmptyPage = styled(EmptyPageContainer)`
  flex: 1 1 auto;

	p {
	font-size: 28px;
	}
`;