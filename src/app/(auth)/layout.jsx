"use client";
import React from "react";

import Loader from "@/components/Loader";
import { useAppSelector } from "@/redux/hook";

import "./style.scss";

const RootLayout = ({ children }) => {
  const { loading } = useAppSelector((state) => state.user);

  return loading ? (
    <Loader />
  ) : (
    <div className="auth_container">
      <div className="auth_sub_container">
        {children}
      </div>
    </div>
  )
}

export default RootLayout;