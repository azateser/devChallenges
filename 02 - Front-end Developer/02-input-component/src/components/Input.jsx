import classNames from 'classnames';
import { useState } from 'react';
import './Input.css';

const Input = ({ title, helperText, error, disabled, size = 'md', fullWidth, multiline, row, value, startIcon, endIcon }) => {
    const [inputFocus, setInputFocus] = useState(false);
    const [inputHover, setInputHover] = useState(false);

    return (
        <div
            className={classNames({
                'w-max': !fullWidth,
                '!w-full': fullWidth,
            })}
        >
            {title && (
                <div
                    className={classNames({
                        'mb-1 text-xs transition-all': true,
                        'text-[#2962FF]': inputFocus,
                        '!text-[#D32F2F]': error,
                        '!text-[#828282]': inputHover && error,
                        '!text-[#333333]': disabled,
                        '!text-[10px]': size === 'sm',
                        '!text-sm': size === 'lg',
                        '!text-base': size === 'xl',
                    })}
                >
                    {title}
                </div>
            )}

            {!multiline && (
                <div className="relative">
                    {startIcon && (
                        <div
                            className={classNames({
                                'absolute left-2 top-4 text-lg  text-[#828282] transition-all': true,
                                'text-[#2962FF]': inputFocus,
                                'text-[#D32F2F]': error,
                                '!text-[#828282]': inputHover && error,
                            })}
                        >
                            {startIcon}
                        </div>
                    )}

                    <input
                        value={value}
                        disabled={disabled}
                        onMouseEnter={() => setInputHover(true)}
                        onMouseLeave={() => setInputHover(false)}
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                        className={classNames({
                            'w-52 rounded-lg border border-[#828282] px-2 py-3 text-sm font-medium text-[#828282] outline-none transition-all focus:border-[#2962FF]': true,
                            'border-[#333333]': inputHover,
                            '!border-[#D32F2F]': error,
                            '!border-[#828282]': inputHover && error,
                            'select-none !border-[#E0E0E0] !bg-[#F2F2F2] !text-[#E0E0E0]': disabled,
                            '!px-1 !py-2 !text-[10px]': size === 'sm',
                            '!px-3 !py-4 !text-sm': size === 'lg',
                            '!px-4 !py-5 !text-sm': size === 'xl',
                            '!w-full': fullWidth,
                            'pl-8': startIcon,
                            'pr-8': endIcon,
                        })}
                        placeholder="Placeholder"
                        type="text"
                    />

                    {endIcon && (
                        <div
                            className={classNames({
                                'absolute right-2 top-4 text-lg  text-[#828282] transition-all': true,
                                'text-[#2962FF]': inputFocus,
                                'text-[#D32F2F]': error,
                                '!text-[#828282]': inputHover && error,
                            })}
                        >
                            {endIcon}
                        </div>
                    )}
                </div>
            )}

            {multiline && (
                <div className="relative">
                    <textarea
                        rows={row}
                        value={value}
                        disabled={disabled}
                        onMouseEnter={() => setInputHover(true)}
                        onMouseLeave={() => setInputHover(false)}
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                        className={classNames({
                            'w-52 rounded-lg border border-[#828282] px-2 py-3 text-sm font-medium text-[#828282] outline-none transition-all focus:border-[#2962FF]': true,
                            'border-[#333333]': inputHover,
                            '!border-[#D32F2F]': error,
                            '!border-[#828282]': inputHover && error,
                            'select-none !border-[#E0E0E0] !bg-[#F2F2F2] !text-[#E0E0E0]': disabled,
                            '!px-1 !py-2 !text-[10px]': size === 'sm',
                            '!px-3 !py-4 !text-sm': size === 'lg',
                            '!px-4 !py-5 !text-sm': size === 'xl',
                            '!w-full': fullWidth,
                            'pl-8': startIcon,
                            'pr-8': endIcon,
                        })}
                        placeholder="Placeholder"
                        type="text"
                    />
                </div>
            )}
            {helperText && (
                <div
                    className={classNames({
                        'mt-1 text-[10px] text-[#828282] transition-all': true,
                        '!text-[#D32F2F]': error,
                        '!text-[#828282]': inputHover && error,
                        '!text-[#333333]': disabled,
                        '!text-[8px]': size === 'sm',
                        '!text-xs': size === 'lg',
                        '!text-sm': size === 'xl',
                    })}
                >
                    {helperText}
                </div>
            )}
        </div>
    );
};

export default Input;
