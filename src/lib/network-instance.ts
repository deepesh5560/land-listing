"use server"
import { cookies } from "next/headers";

type methodType = "GET" |  "POST"

export async function networkInstance(method:methodType,url:string,payload?:any) {
  const authToken =  cookies().get("AUTH_TOKEN")?.value;

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
      console.log(response,"response")
      return { success: true, data: response, error: null };
    } catch (error: any) {
      console.log(error.message,"error in get categories")
      return { success: false, error: error.message, data: null };
    }
  }