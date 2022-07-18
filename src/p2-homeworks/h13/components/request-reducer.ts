import { loadingAC } from "../../h10/bll/loadingReducer"
import { AppThunk } from "../../h10/bll/store"
import { requestsAPI } from "../api/RequestsAPI"


export type InitialStateType = {
	success: boolean
	loading: boolean
}

const initialState: InitialStateType = {
	success: true,
	loading: false
}

export const successReduser = (state: InitialStateType = initialState, action: setSuccessType): InitialStateType => {
	switch (action.type) {
		case 'POST-SUCCESS':
			return { ...state, success: action.success }
		default:
			return { ...state }
	}
}

export type setSuccessType = ReturnType<typeof setSuccessAC>
export const setSuccessAC = (success: boolean) => ({ type: 'POST-SUCCESS', success } as const)

export const setSuccessTC = (success: boolean): AppThunk => (dispatch) => {
	dispatch(loadingAC(true))
	requestsAPI.requests(success)
		.then((res) => {
			dispatch(setSuccessAC(res.data.yourBody.success))
			console.log(res.data.errorText);
			console.log('success: ' + res.data.yourBody.success);
		})
		.catch((error) => {
			console.log({ ...error });
			console.log(error.response ? error.response.data.errorText : error.message);
		})
		.finally(() => {
			dispatch(loadingAC(false))
		})
} 