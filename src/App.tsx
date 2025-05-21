import { Route, Routes } from "react-router"
import styled from "styled-components"
import { MainLayout } from "@layouts"
import { CharactersPage, EmptyPage, EpisodesPage, ExtraPage, HomePage, LocationsPage } from "@pages"
import { Flex } from "@components"
import { useTheme } from "@hooks"

const StyledAppContainer = ({ className }: { className?: string }) => {

	return (
		<Flex
			className={className}
			$direction="column"
			$minHeight="100vh"
		>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="characters" element={<CharactersPage />} />
					<Route path="locations" element={<LocationsPage />} />
					<Route path="episodes" element={<EpisodesPage />} />
					<Route path="extraPage" element={<ExtraPage />} />
					<Route path="*" element={<EmptyPage />}></Route>
				</Route>
			</Routes>
		</Flex>
	);
};

const StyledApp = styled(StyledAppContainer) <{ $darkTheme?: boolean }>`
  max-width: 1280px;
	width: 100%;
	margin: 0 auto;
	background-color: ${() => {
		const { darkTheme } = useTheme();
		return darkTheme ? 'gray' : 'white';
	}};
`;

const App = () => {

	return (
		<StyledApp />
	)
}

export default App
