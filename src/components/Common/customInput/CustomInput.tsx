import React from 'react'
import { CustomInputProps } from '../../../Interface/custom/customInputInterface'
import { useRecoilState } from "recoil";
import { userInfo } from "../../../store/userDataAtom";


const CustomInput = ({
    placeholder,
    type,
    value,
    name,
    style,
    maxLength,
    onClick,
    className,
}: CustomInputProps) => {
  const [userData,setUserData] = useRecoilState(userInfo)
    return (
        <input
            type={type}
            className={className ? `${className} customInput`: 'customInput'}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={(e)=>{
                setUserData((prev)=>({...prev,name:e.target.value}))
            }}
        />
    )
}

export default CustomInput
