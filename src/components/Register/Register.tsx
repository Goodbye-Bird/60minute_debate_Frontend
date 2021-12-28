import React, { FC,useState } from "react";
import { useRecoilState } from "recoil";
import { userInfo } from "../../store/userDataAtom";
import CustomInput from "../Common/customInput"

const Register: FC = () => {
  
  const [userData,setUserData ] = useRecoilState(userInfo)

  const postData = ()=>{
    
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="signup-form">
              <form action="" className="mt-5 border p-4 bg-light shadow">
                <h4 className="mb-5 text-secondary">회원가입</h4>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label>
                      이메일 <span className="text-danger">*</span>
                    </label>
                    <CustomInput
                      type="text"
                      name="fname"  
                      className="form-control"
                      placeholder="Enter Email"
                      onChange={(e:any)=>{
                        setUserData((prev)=>({...prev,email:e.target.value}))
                      }}
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label>
                      이름 <span className="text-danger">*</span>
                    </label>
                    <CustomInput
                      type="text"
                      name="Lname"
                      className="form-control"
                      placeholder="Enter Name"
                      onChange={(e:any)=>{
                        setUserData((prev)=>({...prev,name:e.target.value}))
                      }}
                    />
                  </div>

                  <div className="mb-3 col-md-12">
                    <label>
                      비밀번호 <span className="text-danger">*</span>
                    </label>
                    <CustomInput
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={(e:any)=>{
                        setUserData((prev)=>({...prev,pw:e.target.value}))
                      }}
                    />
                  </div>

                  <div className="mb-3 col-md-12">
                    <label>
                      비밀번호 확인 <span className="text-danger">*</span>
                    </label>
                    <CustomInput
                      type="password"
                      name="confirmpassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={(e:any)=>{
                        setUserData((prev)=>({...prev,checkPw:e.target.value}))
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <CustomInput className="btn btn-primary float-end" type="button" onClick={postData}/>
                    
                  </div>
                </div>
              </form>
              <p className="text-center mt-3 text-secondary">
                If you have account, Please <a href="#">Login Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
