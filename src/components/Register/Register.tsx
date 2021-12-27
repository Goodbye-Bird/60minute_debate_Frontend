import React, { FC,useState } from "react";
import { useRecoilState } from "recoil";
import { userInfo } from "../../store/userDataAtom";
import {CustomInput} from "../Common/customInput/CustomInput"
const Register: FC = () => {
  
  const [userData,setUserData ] = useRecoilState(userInfo)

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
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label>
                      이름 <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="Lname"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="mb-3 col-md-12">
                    <label>
                      비밀번호 <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>

                  <div className="mb-3 col-md-12">
                    <label>
                      비밀번호 확인 <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-primary float-end">
                      Signup Now
                    </button>
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
