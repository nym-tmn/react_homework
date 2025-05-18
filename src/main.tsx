import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import { GlobalStyles } from '@assets/styles/globalStyles.ts'
import { ThemeProvider } from '@providers'

createRoot(document.getElementById('root')!).render(
	<>
		<BrowserRouter>
			<GlobalStyles />
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</>
)
