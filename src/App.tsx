import { Provider, useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import store from './redux/redux-store';
import { getTheme } from './redux/app-selectors';
import { loadTheme, THEMES } from './redux/app-reducer';
import { ThemeProvider } from "styled-components";
import { AppStyled } from './App.styled';
import { HomePage } from './components/pages/HomePage/HomePage';
import { AboutPage } from './components/pages/AboutPage/AboutPage';
import { PortfolioPage } from './components/pages/PortfolioPage/PortfolioPage';
import { ContactsPage } from './components/pages/ContactsPage/ContactsPage';
import { useEffect } from 'react';

const App = () => {
	const themeName = useSelector(getTheme)
	const theme = THEMES[themeName]
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadTheme())
	}, [dispatch])

	return (
		<ThemeProvider theme={theme}>
			<AppStyled>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about/" element={<AboutPage />} />
						<Route path="/portfolio/" element={<PortfolioPage />} />
						<Route path="/contacts/" element={<ContactsPage />} />
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
