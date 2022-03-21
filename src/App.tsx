import { Provider, useSelector } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import store from './redux/redux-store';
import { getTheme } from './redux/app-selectors';
import { THEMES } from './redux/app-reducer';
import { ThemeProvider } from "styled-components";
import { AppStyled } from './App.styled';

const App = () => {
	const themeName = useSelector(getTheme)
	const theme = THEMES[themeName]

	return (
		<ThemeProvider theme={theme}>
			<AppStyled>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Header />
					<Routes>
						<Route path="/" element={<div>home</div>} />
						<Route path="/about/" element={<div>about</div>} />
						<Route path="/portfolio/" element={<div>portfolio</div>} />
						<Route path="/contacts/" element={<div>contacts</div>} />
						<Route path="*" element={<div>404</div>} />
					</Routes>
				</BrowserRouter>
			</AppStyled>
		</ThemeProvider>
	)
}

const AppContainer = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

export default AppContainer;
