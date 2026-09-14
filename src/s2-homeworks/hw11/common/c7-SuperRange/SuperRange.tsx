import React from 'react';
import { Slider, SliderProps } from '@mui/material';

// const SuperRange = ({ value, onChange }: SliderProps) => {
//     return <Slider color="secondary" disableSwap={true} sx={{}} value={value} onChange={onChange} />;
// };

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            color='secondary'
            // disableSwap={true}
            sx={{
                width: '400px', // стили для слайдера // пишет студент
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    );
};
export default SuperRange;
