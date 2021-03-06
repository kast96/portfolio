import { BaseThunkType, InferActionsType } from "./redux-store";

const SET_THEME = 'portfolio/app/SET-THEME'

export const THEMES = {
  light: {
    mainColor: "#72b626",
    textColor: '#444',
    textBtnHoverColor: '#fff',
    bgColor: '#fff',
    bgBtnColor: '#ddd',
  },
  dark: {
    mainColor: "#ffb400",
    textColor: '#fff',
    textBtnHoverColor: '#fff',
    bgColor: '#000',
    bgBtnColor: '#666',
  }
}

export const THEME_NAMES: ThemeNameType = Object.keys(THEMES).reduce((a, v) => ({ ...a, [v]: v }), {});

let initialState = {
  theme: THEME_NAMES.light as ThemeType
};

export type InitialStateType = typeof initialState;

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme
      };

    default:
      return state;
  }
}


export const actions = {
  setTheme: (theme: ThemeType) => ({ type: SET_THEME, theme }) as const
}

export const setTheme = (theme: ThemeType): ThunkType => async (dispatch) => {
  await dispatch(actions.setTheme(theme))
  localStorage.setItem('theme', theme)
}

export const loadTheme = (): ThunkType => async (dispatch) => {
  const theme = localStorage.getItem('theme') 
  if (theme && Object.keys(THEMES).includes(theme)) {
    //@ts-ignore
    dispatch(actions.setTheme(theme))
  }
}

type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export type ThemeType = keyof typeof THEMES
type ThemeNameType = { [key: string]: ThemeType }