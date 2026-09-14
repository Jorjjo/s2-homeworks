import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange = ({ value, onChange }: SliderProps) => {
    return (
        <Slider
            color='secondary'
            disableSwap={true}
            sx={{ width: '400px' }}
            value={value}
            onChange={onChange}
        />
    );
};
export default SuperRange;
