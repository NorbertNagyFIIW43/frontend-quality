import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.tsx';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './assets/mui/defaultTheme.tsx';
import { StyledEngineProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<StyledEngineProvider injectFirst>
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>
			</StyledEngineProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
