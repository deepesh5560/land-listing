"use server"
import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";


export async function multiPartInstance(method:string,url:string,payload?:any) {
  const authToken =  cookies().get("AUTH_TOKEN")?.value || "";
  const config: AxiosRequestConfig<any> = {
    method: method,
    url: process.env.NEXT_PUBLIC_BASE_API_URL+url,
    headers: {
      'Authorization':  authToken
    },
    data:payload
  }

    try {
   console.log("here")
   
   const response =   await axios(config);
   console.log(response)
   if (response.status == 200)  {
  return { success: true, data: response?.data, error: null };
    
   }else{
  return { success: false, data: null, error: null };

   }

      

// const boundary = `----${Date.now().toString(16)}`

  }
  catch (err) {}}