"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { onSendOTP, onVerifyOTP } from "./actions";
import OTPInput from "react-otp-input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CountryList from "country-list-with-dial-code-and-flag";

const mobileRegex = /^\d{0,10}$/;
const otpRegex = /^\d{0,6}$/;

interface User {
  _id: string;
  countryCode: string;
  phoneNumber: string;
  otp: string;
  status: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface AuthResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: User;
  message: string;
}

const list = CountryList.getAll();

const countryCodes = [
  {
    id: 0,
    title: "+91 IN",
    value: "+91",
  },
  {
    id: 1,
    title: "+27 SA",
    value: "+27",
  },
];

const LoginDialog = ({}: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState(list[0].countryCode);
  const [otp, setOTP] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<string | null>("");

  const toggle = () => {
    if (!!isLoggedIn) {
      router.push("/user/profile");
      return;
    }

    if (open) {
      setOtpSent(false);
      setOTP("");
    }
    setOpen(!open);
  };

  const onVerifyOTPBtn = async (e: any) => {
    const payload: any = {
      countryCode: countryCode,
      phoneNumber: mobileNumber,
      otp: otp,
    };

    const { success, data, error } = await onVerifyOTP(payload);
    if (success) {
      let { accessToken, message }: AuthResponse = data;
      localStorage.setItem("LOGGED_IN", accessToken);
      setIsLoggedIn(accessToken);
      toggle();
      toast.success(message);
      return;
    }
    alert(error ?? "Error");
  };

  const onSendOTPBtn = async (e: any) => {
    if (!mobileNumber.length) {
      return;
    }
    const payload: any = {
      countryCode: countryCode,
      phoneNumber: mobileNumber,
      role: "user",
    };

    const { data, error, success } = await onSendOTP(payload);

    if (success) {
      setOtpSent(true);
      toast.success("OTP Sent");
    } else {
      console.error(error, "error");
    }
  };

  const onMobileNumberChange = (e: any) => {
    const val: string = e.target.value;
    if (mobileRegex.test(val)) {
      setMobileNumber(val);
    }
  };

  const onOTPChange = (e: any) => {
    setOTP(e);
  };

  useEffect(() => {
    console.log("token", localStorage.getItem("LOGGED_IN"));
    setIsLoggedIn(localStorage.getItem("LOGGED_IN"));
  }, []);

  return (
    <>
      <li className="nav-item">
        <button
          onClick={toggle}
          className="btn_login"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          {isLoggedIn ? "Profile" : "Login / sign Up"}
        </button>
      </li>
      {open && (
        <div className="dialog-container">
          <dialog open={open} className="custom-dialog  modal_login ">
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Welcome
                  </h5>
                  <p>Login for seamless Experience</p>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={toggle}
                  >
                    x
                  </button>
                </div>
                <div className="modal-body">
                  <div className="login_input">
                    {otpSent ? (
                      <OTPInput
                        value={otp}
                        onChange={onOTPChange}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                        containerStyle="otp-container"
                        inputStyle="otp-input"
                        skipDefaultStyles
                      />
                    ) : (
                      // <input
                      //   type="text"
                      //   placeholder="Enter OTP"
                      //   value={otp}
                      //   onChange={onOTPChange}
                      // />
                      <div className="login_input-business">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                        >
                          {list.map((item, index) => {
                            return (
                              <option
                                value={item.countryCode}
                                key={index}
                                className=""
                              >
                                <p>{item.code + " " + item.countryCode}</p>
                              </option>
                            );
                          })}
                        </select>
                        <input
                          type="text"
                          style={{ borderWidth: 0 }}
                          placeholder="Enter Mobile Number"
                          value={mobileNumber}
                          onChange={onMobileNumberChange}
                        />
                      </div>
                    )}

                    {/* <button
                      className="btn_submit"
                      onClick={otpSent ? onVerifyOTPBtn : onSendOTPBtn}
                    >
                      {otpSent ? "Verify" : "Submit"}
                    </button> */}
                  </div>
                  <div className="btn_otp">
                    <button onClick={otpSent ? onVerifyOTPBtn : onSendOTPBtn}>
                      {otpSent ? "Login with OTP" : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

interface Props {}

export default LoginDialog;