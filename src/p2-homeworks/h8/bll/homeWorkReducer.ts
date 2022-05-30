import { UserType } from "../HW8"

type actionType = { type: 'sort', payload: 'up' | 'down'} | { type: 'check', payload: number }

export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b) => {
                if(a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter( a => a.age >= action.payload)
        }
        default: return state
    }
}

// export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => { // need to fix any
//     switch (action.type) {
//         case 'sort': {
//             if (action.payload === 'up') {
//                 return [...state.sort((a, b) => a.age - b.age)]
//             }
//             if (action.payload === 'down') {
//                 return [...state.sort((a, b) => b.age - a.age)]
//             }
//             return state
//         }
//         case 'check': {
//             if (action.payload >= 18) {
//                 return [...state.filter( a => a.age >= 18)]
//             }
//             return state
//         }
//         default:
//             return state
//     }
// }