import { useDispatch, useSelector } from "react-redux"
import { setTheme, THEME_NAMES } from "../../../redux/app-reducer"
import { getTheme } from "../../../redux/app-selectors"
import { FaRegLightbulb, FaRegMoon } from 'react-icons/fa'
import { ButtonStyled } from "./ThemeChangeButton.styled"

export const ThemeChangeButton = () => {
	const themeIsLight = useSelector(getTheme) === THEME_NAMES.light

	const dispatch = useDispatch()

	const onChangeTheme = () => {
		const newTheme = themeIsLight ? THEME_NAMES.dark : THEME_NAMES.light
		dispatch(setTheme(newTheme))
	}

	return (
		<ButtonStyled onClick={onChangeTheme}>
			{(themeIsLight) ? <FaRegMoon /> : <FaRegLightbulb />}
		</ButtonStyled>
	)
}