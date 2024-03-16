"use client";
import { redirect } from "next/navigation";


const Page = () => {
  const condition = typeof window !== 'undefined' 
  const isLoggedIn = condition && localStorage.getItem("LOGGED_IN");

  if (isLoggedIn) {
    redirect("/user/profile");
  }
  redirect("/");
};

export default Page;
