import styled from "styled-components"
import failedImage from '@assets/images/failedImage.webp'
import { ContentTitle, CustomImage, Flex } from "@components"

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
			<CustomImage>
				<img src={failedImage} alt="Page not found" />
			</CustomImage>
		</Flex>
	);
};

export const EmptyPage = styled(EmptyPageContainer)`
  flex: 1 1 auto;

	p {
	font-size: 28px;
	}
`;