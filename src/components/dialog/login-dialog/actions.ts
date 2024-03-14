"use server"

import { networkInstance } from "@/lib/network-instance";
import { cookies } from "next/headers";

export const onVerifyOTP = async (payload: any) => {
    "use server";
    const { data, error, success } = await networkInstance(
      "POST",
      "auth/verify-otp",
      payload
    );

    if (success) {
      cookies().set("AUTH_TOKEN", data.accessToken, { httpOnly: true });
      return { data, error, success } 
    } else {
       return { data, error, success } 
    }
  };


export  const onSendOTP = async (payload: any) => {
  
    const { data, error, success } = await networkInstance(
      "POST",
      "auth/request-otp",
      payload
    );

    return { data, error, success }

    }