"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const LogOutButton = () => {
  const [loggedUser, setLoggedUser] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("isAuthenticated");
    if (user) {
      setLoggedUser(true);
    }
  }, []);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");

    toast.info("You have been logged out.", {
      position: "top-center",
      autoClose: 3000,
      closeOnClick: true,
    });

    setLoggedUser(false);

    router.push("/login");
  };

  return (
    <>
      <ToastContainer />
      <button
        onClick={loggedUser ? handleLogout : handleLogin}
        className={`mt-4 py-2 px-6 ${loggedUser ? "bg-red-600" : "bg-blue-600"} text-white rounded-lg hover:bg-blue-700`}
      >
        {loggedUser ? "Log Out" : "Log In"}{" "}
      </button>
    </>
  );
};

export default LogOutButton;
