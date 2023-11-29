import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#fff',
		},
	},
	components: {
		MuiButtonGroup: {
			styleOverrides: {
				root: {
					margin: '0',
					listStyle: 'none',
					display: 'flex',
					gap: '1rem',
					height: '100%',
				},
			},
		},
	},
});
