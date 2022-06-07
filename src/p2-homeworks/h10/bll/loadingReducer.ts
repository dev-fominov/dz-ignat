
type initStateType = {
    loading: boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state:initStateType = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOAD': {
            return {...state, loading: action.loading}
        }
        default: return state
    }
}


type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => {
    return {
		type: 'CHANGE_LOAD',
		loading
	} as const
} // fix any