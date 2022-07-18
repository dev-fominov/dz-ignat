import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../h12/bll/hooks"
import Button from "./Button"
import Checkbox from "./Checkbox"
import { setSuccessTC } from "./request-reducer"

function Request() {


	const success = useAppSelector(state => state.success.success)
	const loading = useAppSelector(state => state.loading.loading)
	const [value, onChangeChecked] = useState<boolean>(success)
	const dispatch = useAppDispatch()

	console.log('Disabled: ' + loading)

	const requestHandle = () => {
		dispatch(setSuccessTC(value))
	}

	const onChangeHandler = (value: boolean) => {
		onChangeChecked(value)
	}

	return (
		<div>
			<Button callBack={requestHandle} name={'Button'} disabled={loading} />
			<Checkbox onChange={onChangeHandler} checked={value} />
		</div>
	)
}

export default Request