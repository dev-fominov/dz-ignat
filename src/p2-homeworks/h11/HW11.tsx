import React, { useCallback, useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeRange = useCallback((newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0])
            setValue2(newValue[1])
        }
    }, [setValue1, setValue2])

    return (
        <div>
            <hr />
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.flex}>
                <span className={s.span}>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    value={[value1, value2]}
                />
                <span>{value2}</span>
            </div>

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr />
        </div>
    )
}

export default HW11
