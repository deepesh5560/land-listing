'use server'
import { cookies } from 'next/headers'

export const logout =async ()=>{
    cookies().delete('AUTH_TOKEN')
}

export const setRole = async (val:string)=>{
    cookies().set("role",val)
}





