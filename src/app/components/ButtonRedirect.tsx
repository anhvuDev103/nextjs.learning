"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ButtonRedirect = () => {
  const router = useRouter();

  const navigate = () => {
    router.push("/login");
  };
  return <button onClick={navigate}>Chuyển sang trang Login</button>;
};

export default ButtonRedirect;
