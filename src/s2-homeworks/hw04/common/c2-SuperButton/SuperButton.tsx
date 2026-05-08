import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './SuperButton.module.css';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string;
};

function getBaseClassName() {
    return s.button;
}

function getColorClassName(xType: string | undefined) {
    if (xType === 'red') return s.red;
    if (xType === 'secondary') return s.secondary;

    return s.default;
}
function getDisabledClassName(disabled: boolean | undefined) {
    if (disabled) return s.disabled;

    return '';
}

const SuperButton: React.FC<SuperButtonPropsType> = ({
    xType,
    className,
    disabled,
    ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
    // const finalClassName =
    //     s.button +
    //     // + (disabled
    //     //         ? ...
    //     //         : xType === 'red'
    //     //             ? ...
    //     (className ? ' ' + className : ''); // задачка на смешивание классов

    const finalClassName = `
    ${getBaseClassName()}
    ${getColorClassName(xType)}
    ${getDisabledClassName(disabled)}
    `;

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
};

export default SuperButton;
