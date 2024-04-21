"use client"

import React, { useEffect, useState }  from "react";
import LoginDialog from "../dialog/login-dialog";
import Link from "next/link";
import { logout } from "@/lib/serverActions";
import LoginPop from "../dialog/loginPop/loginPop";
const Header = () => {
  const condition = typeof window !== "undefined";
  const logs = condition &&  localStorage.getItem('LOGGED_IN')
  const [Logs,setLogs]=useState<any>('')
  useEffect(()=>{
   
     setLogs(logs?true:false)
    
  },[logs])

  const LogoutMe =()=>{
    localStorage.clear()

    logout()
   
    window.location.href ="/"
  }

  return (
    <>
      <header className="custom_header header1 ">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/">
              <img src="/images/logo.png" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
           
              {!Logs ?  <li className="nav-item">
                  <a
                    className="nav-link me-3"
                    aria-current="page"
                    href="/business-listing"
                  >
                    <img
                      className="me-3"
                      src="images/ic_baseline-business.png"
                      alt=""
                    />
                    Free Business Listing{" "}
                  </a>
                </li>:""}
               <LoginDialog />
              

                {Logs ?  <li className="nav-item">
                <button
          className="btn_login"
          onClick={()=>LogoutMe()}
        >
          Logout
        </button>
                </li>:""}
            

              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
