import styled from "styled-components"
import pageNotFound from '@assets/images/page_not_found_image.webp'
import { ContentTitle, Flex } from "@components"

const EmptyPageContainer = ({ className }: { className?: string }) => {
	return (
		<Flex
			className={className}
			$direction="column"
			$justify="center"
			$align="center"
		>
			<ContentTitle>404</ContentTitle>
			<p>It seems that such a page does not exist</p>
			<img src={pageNotFound} alt="Page not found" />
		</Flex>
	);
};

export const EmptyPage = styled(EmptyPageContainer)`
  flex: 1 1 auto;
`;