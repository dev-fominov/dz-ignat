import React, { ChangeEvent } from 'react'
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number | number[]) => void
    value: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value
    }
) => {

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        if (onChangeRange) {
            onChangeRange(newValue as number[]);
        }
    };

    const val = value ? value[0] : 0
    const val2 = value ? value[1] : 0

    return (
        <>
            <Box sx={{ width: 300 }}>
                <Slider
                    value={[val, val2]}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100}
                    step={1}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange