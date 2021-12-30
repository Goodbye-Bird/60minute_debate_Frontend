import axios from 'axios';
import React from 'react'
import { useRecoilState } from 'recoil'
import Token from '../../lib/Token';
import config  from '../../config/config.json';
import { userInfo } from '../../store/userDataAtom'


export const getUserData = async() => {    
    const token = Token.getToken()
    try {
        const {data} = await axios.get(`${config.SERVER}/main`,{ headers:{'token':token}})
        return data
    } catch (error) {
        return error
    }
}
