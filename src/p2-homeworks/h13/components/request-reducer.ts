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

export const successReduser = (state: InitialStateType = initialState, action: onChangeType): InitialStateType => {
	switch (action.type) {
		case 'ON-CHANGE':
			return { ...state, success: action.success }
		default:
			return { ...state }
	}
}

export type onChangeType = ReturnType<typeof onChangeAC>
export const onChangeAC = (success: boolean) => ({ type: 'ON-CHANGE', success } as const)

export const setSuccessTC = (success: boolean): AppThunk => (dispatch) => {
	dispatch(loadingAC(true))
	requestsAPI.requests(success)
		.then((res) => {
			dispatch(onChangeAC(res.data.yourBody.success))
			console.log(res.data.errorText);
			console.log('successTC: ' + res.data.yourBody.success);
		})
		.catch((error) => {
			console.log({ ...error });
			console.log(error.response ? error.response.data.errorText : error.message);
		})
		.finally(() => {
			dispatch(loadingAC(false))
		})
} 