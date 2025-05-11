import { Outlet } from "react-router";
import styled from "styled-components";
import { Footer, Header, Nav } from "@layouts";

const StyledMainContent = styled.div`
flex: 1 1 auto;
// height: 100%;
display: flex;
// flex-direction: column;
// justify-content: center
`;

export function MainLayout() {
	return (
		<>
			<Header />
			<Nav />
			<StyledMainContent>
				<Outlet />
			</StyledMainContent>
			<Footer />
		</>
	)
}