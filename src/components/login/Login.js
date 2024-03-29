import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faCircleUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import image from "../../assest/seff_logo_black.jpg"
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
import { setOnline } from "../redux/reducers/userSlice.";


const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userid, setuserid] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const Navigate = useNavigate()
  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const users = useSelector(state=>state.users)
  const dispatch = useDispatch()
  const setdata = (e) => {
    console.log(users);
    e.preventDefault();
    const foundUser = users.find(user => user.email === userid && user.password === userpassword);

    
    if (foundUser) {
      dispatch(setOnline(foundUser));
      console.log(foundUser)
      setTimeout(() => {
        Navigate("/");
      }, 1000);
    } else {
      window.alert('Invalid password');
    }
    }

  return (
    <div className="sign-login-form position-absolute  top-0 start-0 end-0 bg-dark  bottom-0 " style={{zIndex:'5454654654654',height:'100vh'}}>
      <div className="container">
        <div className="row align-items-center ">
          <div className="form-parent">
            <div className="form-container position-relative">
              <div className="form-img position-absolute">
                <img src={image} />
              </div>
              <div className="form-content">
                <form>
                  <div className="container  mt-5">
                    <div className="row mt-1">
                      <div className="col-12">
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <FontAwesomeIcon
                              icon={faCircleUser}
                              className="user-icon"
                            />
                          </span>
                          <input
                            onChange={(e) => {
                              setuserid(e.target.value);
                            }}
                            type="text"
                            className="form-control text-white"
                            placeholder="User ID"
                            value={userid}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group position-relative mb-3">
                          <span className="input-group-text">
                            <FontAwesomeIcon
                              icon={faLock}
                              className="lock-icon"
                            />
                          </span>
                          <input
                            onChange={(e) => {
                              setuserpassword(e.target.value);
                            }}
                            type={showPassword ? "text" : "password"}
                            className="form-control text-white"
                            placeholder="Password"
                            value={userpassword}
                          />
                          <span
                            className="input-group-text"
                            onClick={togglePassword}
                          >
                            {showPassword ? (
                              <FontAwesomeIcon
                                icon={faEye}
                                className="eye-icon position-absolute"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faEyeSlash}
                                className="eye-icon eye-slash position-absolute"
                              />
                            )}
                          </span>
                        </div>
                        <div className="forget-password d-flex justify-content-end">
                          <p>Forget your password?</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="submit-btn d-flex justify-content-center mt-3 mb-3">
                          <button
                            onClick={setdata}
                            type="submit"
                            className="btn login-btn text-uppercase text-white"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginComponent;
