import React from "react";
import { useDispatch } from "react-redux";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { useAppSelector } from "./bll/hooks";
import { changeThemeC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {

    //    debugger
    const theme = useAppSelector(state => state.theme.theme); // useSelector

    const dispatch = useDispatch();

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>

            <hr />
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.radioClass}>
                <SuperRadio
                    name={'theme'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr />
        </div>
    );
}

export default HW12;
