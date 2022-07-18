const initState = {
    theme: 'dark'
} as initStateType

type initStateType = {
    theme: string
}
export const themeReducer = (state: initStateType = initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case "EDIT_THEME": {            
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => ({ type: "EDIT_THEME", theme } as const) // fix any