"use client";
import React, {  useState } from 'react'
import OTPInput from 'react-otp-input'
import { onVerifyOTP } from '../dialog/login-dialog/actions';
import toast from 'react-hot-toast';

interface AuthResponse {
    success: boolean;
    accessToken: string;
    refreshToken: string;
    user: any;
    message: string;
  }
const OtpLogin = ({open,close, onNext,countryCode,mobileNumber}:{open:any,close:any, onNext:any,countryCode:any,mobileNumber:any}) => {
  const [otp, setOTP] = useState("");
  const condition = typeof window !== "undefined";



    const onOTPChange = (e: any) => {
        setOTP(e);
      };

      const onVerifyOTPBtn = async () => {
        if(otp !=='123456'){
          toast.error('Invalid OTP');
          return;
        }
        const payload: any = {
          countryCode: countryCode,
          phoneNumber: mobileNumber,
          otp: otp,
        };
    
        const { success, data, error } = await onVerifyOTP(payload);
        if (success) {
          let { accessToken, message }: AuthResponse = data;
          localStorage.setItem("LOGGED_IN", accessToken);
          close(false)

          onNext()
          if(condition){
            window.location.reload();
           }
          toast.success(message);
          return;
        }
        alert(error ?? "Error");
      };
  
  return (
    <div>
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
                    onClick={()=>close(false)}
                  >
                    x
                  </button>
                </div>
                <div className="modal-body">
                  <div className="login_input">
                  
                      <OTPInput
                        value={otp}
                        onChange={onOTPChange}
                        numInputs={6}
                        renderInput={(props) => <input {...props} />}
                        containerStyle="otp-container"
                        inputStyle="otp-input"
                        skipDefaultStyles
                      />
       
                  </div>
                  <div className="btn_otp">
                    <button onClick={()=>onVerifyOTPBtn()} >
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
    </div>
  )
}

export default OtpLogin