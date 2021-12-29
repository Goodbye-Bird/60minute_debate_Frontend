import axios from "axios";
import { FC } from "react";
import config from "../../config/config.json";
import { useRecoilState } from "recoil";
import { userInfo } from "../../store/userDataAtom";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";

const Register: FC = () => {
  const [userData, setUserData] = useRecoilState(userInfo);
  const history = useHistory();

  const postData = () => {
    console.log(userData.checkPw, userData.pw);
    if (userData.pw == userData.checkPw) {
      emailData();
      axios
        .post(`${config.SERVER}/auth/join`, {
          email: userData.email,
          name: userData.name,
          password: userData.pw,
          password2: userData.checkPw,
        })
        .then(() => {
          swal("회원가입 성공!", "버튼을 클릭하세요!", "success").then(() => {
            history.push("/");
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      swal("비밀번호가 다릅니다");
    }
  };

  const emailData = () => {
    axios
      .post(`${config.SERVER}/auth/join/mailCheck`, {
        email: userData.email,
      })
      .then(() => {
        console.log("pass");
      });
  };
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "90vh",
        }}
      >
        <div className="row" style={{ width: "100vw" }}>
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
                      onChange={(e: any) => {
                        setUserData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                      }}
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
                      onChange={(e: any) => {
                        setUserData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }));
                      }}
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
                      onChange={(e: any) => {
                        setUserData((prev) => ({
                          ...prev,
                          pw: e.target.value,
                        }));
                      }}
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
                      onChange={(e: any) => {
                        setUserData((prev) => ({
                          ...prev,
                          checkPw: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="btn btn-primary float-end"
                      type="button"
                      onClick={postData}
                      value="Sign Up"
                    />
                  </div>
                </div>
              </form>
              <p className="text-center mt-3 text-secondary">
                이미 가입하셨나요? <Link to="/">로그인 하기</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
