import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import { GlobalStyles } from '@assets/styles/globalStyles.ts'

createRoot(document.getElementById('root')!).render(
	<>
		<BrowserRouter>
			<GlobalStyles />
			<App />
		</BrowserRouter>
	</>
)
