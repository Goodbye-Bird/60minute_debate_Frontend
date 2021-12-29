import axios from 'axios'
import React, { useState } from 'react'
import config from '../../config/config.json'
import { useRecoilState } from "recoil";
import { userInfo } from "../../store/userDataAtom";
import { useHistory } from 'react-router-dom';
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";


const Login = () => {

    const [userData,setUserData ] = useRecoilState(userInfo)
    const history = useHistory()


    const signIn = () =>{
        console.log("hi")
        axios.post(`${config.SERVER}/auth/login`,{
            email:userData.email,
            password:userData.pw
        }).then((e)=>{
            const token = e.data.token
            localStorage.setItem("access-token",token)
            history.push('/main');
        })
    }

    return (
        <body className="text-center" style={{display:"flex",justifyContent:"center",width:"100vw",height:"90vh",alignItems:"center"}}>
    
        <main className="form-signin" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"60vw"}}>
          <div style={{width:"60%"}}>
            <img className="mb-4" src={logo} width="200" />
            {/* <img src={logo} alt="" /> */}
            {/* <h1 className="h3 mb-3 fw-normal">로그인</h1> */}
        
            <div className="form-floating" style={{marginTop:"30px"}}>
              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{
                  setUserData((perv)=>({...perv,email:e.target.value}))
              }}/>
              <label >Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>{
                  setUserData((prev)=>({...prev,pw:e.target.value}))
              }}/>
              <label>Password</label>
            </div>
        
            {/* <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div> */}
            <button className="w-100 btn btn-lg btn-primary" onClick={signIn} style={{marginTop:"20px"}}>Sign In</button>
            <p className="mt-5 mb-3 text-muted">60분토론이 처음이신가요?   <Link to="/signUp"> 회원가입 하기</Link></p>
          </div>
        </main>
        
        </body> 
    )
}

export default Login
