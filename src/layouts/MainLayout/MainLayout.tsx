import { Outlet } from "react-router";
import styled from "styled-components";
import { Footer, Header, Nav } from "@layouts";
import { Flex } from "@components";

const StyledMainContentContainer = ({ className }: { className?: string }) => {
	return (
		<Flex
			className={className}
			$direction="column"
		>
			<Outlet />
		</Flex>
	);
};

const StyledMainContent = styled(StyledMainContentContainer)`
  flex: 1 1 auto;
`;

export const MainLayout = () => {
	return (
		<>
			<Header />
			<Nav />
			<StyledMainContent />
			<Footer />
		</>
	)
}