import React, { ChangeEvent } from "react";

type CheckboxType = {
	checked: boolean
	onChange: (checked: boolean) => void
}

const Checkbox = (props: CheckboxType) => {

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange(e.currentTarget.checked)
	}

	return (
		<input
			type="checkbox"
			onChange={onChangeHandler}
			checked={props.checked}
		/>
	)
}

export default Checkbox