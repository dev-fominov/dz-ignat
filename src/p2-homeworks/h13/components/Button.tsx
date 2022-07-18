import React from "react"
import './Button.css'

type ButtonType = {
	name: string
	callBack: () => void
	disabled: boolean
}

const Button = (props: ButtonType) => {

	const onClickHandler = () => {
		props.callBack()
	}

	return (
		<button className={'btn'} onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
	)
}

export default Button