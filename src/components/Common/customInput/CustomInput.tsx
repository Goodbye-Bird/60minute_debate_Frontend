import React from 'react'
import { CustomInputProps } from '../../../Interface/custom/customInputInterface'

const CustomInput = ({
    placeholder,
    type,
    value,
    style,
    maxLength,
    onClick,
    className,
}: CustomInputProps) => {
    return (
        <input
            type={type}
            className={className}
            value={value}
            onChange={(e)=>{
                
            }}

        />
    )
}

export default CustomInput
