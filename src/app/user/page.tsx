"use client";
import { redirect } from "next/navigation";

const Page = () => {
  const isLoggedIn = localStorage.getItem("LOGGED_IN");

  if (isLoggedIn) {
    redirect("/user/profile");
  }
  redirect("/");
};

export default Page;
