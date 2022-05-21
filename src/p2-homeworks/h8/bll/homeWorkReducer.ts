import { UserType } from "../HW8"

type actionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | 18
}

export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.age - b.age)]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => b.age - a.age)]
            }
        }
        case 'check': {
            if (action.payload >= 18) {
                return [...state.filter( a => a.age >= 18)]
            }
        }
        default:
            return state
    }
}