import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    { 
        onChangeRange, value,
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    // const onChangeCallback1 = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onchange(e) // сохраняем старую функциональность

    //     onChangeRange && onChangeRange(+e.currentTarget.value)
    // }
    // const onChangeCallback2 = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onchange(e) // сохраняем старую функциональность

    //     onChangeRange && onChangeRange(+e.currentTarget.value)
    // }

    return (
        <>
            {/* <input
                type={'range'}
                onChange={onChangeCallback1}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <input
                type={'range'}
                onChange={onChangeCallback2}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            /> */}
        </>
    )
}

export default SuperDoubleRange
