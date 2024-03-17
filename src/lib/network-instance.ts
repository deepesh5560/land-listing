"use server"
import { cookies } from "next/headers";

type methodType = "GET" |  "POST"

export const getAuthToken = () => {
  return cookies().get("AUTH_TOKEN")?.value;
}

export const clearAuthToken = () => {
  cookies().delete("AUTH_TOKEN");
}

export async function networkInstance(method:methodType,url:string,payload?:any) {
  const authToken =  getAuthToken();

    try {

      const customHeaders: HeadersInit = { 'Content-Type': 'application/json',}
      if(!!authToken?.length){
        customHeaders['Authorization'] = authToken
      }

       const response = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL+url,{
        method:method,
        body:JSON.stringify(payload),
        cache:"no-store",
        headers: customHeaders,
    }).then(res=>res.json());

      if(!response.success){
        throw Error(response.message);
      }

      return { success: true, data: response, error: null };
    } catch (error: any) {
      return { success: false, error: error.message, data: null };
    }
  }