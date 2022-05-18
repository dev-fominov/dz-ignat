import React, { useState } from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

const arr: Array<string> = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState<string>(arr[0])

    return (
        <div>
            <hr />
            homeworks 7

            {/*should work (должно работать)*/}
            <div className={s.selectClass}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={s.radioClass}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr />
        </div>
    )
}

export default HW7
