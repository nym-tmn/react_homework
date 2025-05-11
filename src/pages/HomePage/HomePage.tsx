import styled from 'styled-components'
import homePageImage from '@assets/images/home_page_image.webp'
import { ContentTitle, Flex } from '@components'

const StyledHomePageContainer = ({ className }: { className?: string }) => {
	return (
		<Flex
			className={className}
			$direction="column"
		$justify="center"
		$align="center"
		>
			<ContentTitle $fontSize='44px' $marginBottom='30px'>Wubba Lubba Dub Dub</ContentTitle>
			<img src={homePageImage} alt="Home page main image" />
		</Flex>
	);
};

const StyledHomePage = styled(StyledHomePageContainer)`
flex: 1 1 auto;
`;

export const HomePage = () => {
	return (
		<StyledHomePage />
	)
}