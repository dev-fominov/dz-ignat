import React from "react"
import { useAppDispatch, useAppSelector } from "../../h12/bll/hooks"
import Button from "./Button"
import Checkbox from "./Checkbox"
import { onChangeAC, setSuccessTC } from "./request-reducer"

const Request = () => {

	const success = useAppSelector(state => state.success.success)
	const loading = useAppSelector(state => state.loading.loading)
	const dispatch = useAppDispatch()

	console.log('checked: ' + success)

	const requestHandle = () => {
		dispatch(setSuccessTC(success))
	}

	const onChangeHandler = (success: boolean) => {
		dispatch(onChangeAC(success))
	}

	return (
		<div>
			<Button callBack={requestHandle} name={'Button'} disabled={loading} />
			<Checkbox onChange={onChangeHandler} checked={success} />
		</div>
	)
}

export default Request