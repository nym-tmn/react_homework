import { Route, Routes } from "react-router"
import styled from "styled-components"
import { EmptyLayout, MainLayout } from "@layouts"
import { CharactersPage, EpisodesPage, HomePage, LocationsPage } from "@pages"
import { Flex } from "@components"

const AppContainer = styled.div`
max-width: 1280px;
width: 100%;
margin: 0 auto;
background-color: white;
`;

const App = () => {
	return (
		<AppContainer>
			<Flex $minHeight="100vh" $direction="column">
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="characters" element={<CharactersPage />} />
						<Route path="locations" element={<LocationsPage />} />
						<Route path="episodes" element={<EpisodesPage />} />
						<Route path="*" element={<EmptyLayout />}></Route>
					</Route>
				</Routes>
			</Flex>
		</AppContainer>
	)
}

export default App
