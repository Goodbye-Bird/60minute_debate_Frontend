import React from 'react'
import axios from 'axios'
import config from "../../config/config.json"

const Api  = axios.create({
    baseURL: config.SERVER,
    params: {},
})

