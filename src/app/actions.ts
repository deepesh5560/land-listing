 'use server';

import axiosExtInstance from "@/lib/axios-service";
import axios from "axios";

const baseURL = "16.171.173.51:3000/v1/"

export async function getCategories() {
  try {
     const response = await axiosExtInstance.get('home/categories');


    return { success: true, data: response.data, error: null };
  } catch (error: any) {
    console.error(error.message,"error in get categories")
    return { success: false, error: error.message, data: null };
  }
}

export const verifyVerificationOTP = async (country: string, mobile: string, otp: string) => {
  try {
    const response = await axiosExtInstance.post<any>(
      `register/verify-otp`,
      { mobile_number: `${country}${mobile}`, otp: parseInt(otp, 10) },
      { headers: { skipJWT: 'Y' } }
    );
    return { success: true, data: response.data, error: null };
  } catch (error: any) {
    return { success: false, error: error.message, data: null };
  }
};

