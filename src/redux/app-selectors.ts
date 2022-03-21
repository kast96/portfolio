import { AppStateType } from "./redux-store";

export const getTheme = (state: AppStateType) => {
	return state.app.theme;
}