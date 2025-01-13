"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState<boolean>(false);

  useEffect(() => {
    const user = localStorage.getItem("isAuthenticated");
    if (user) {
      setLoggedUser(true);
    }
  }, []);
  const router = useRouter();

  useEffect(() => {
    if (loggedUser) {
      toast.warning("You are already logged in!", {
        position: "top-center",
      });
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    }
  }, [loggedUser, router]);

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "testpass123") {
      localStorage.setItem("isAuthenticated", "true");

      toast.success("Successfully Logged in!", {
        position: "top-center",
        autoClose: 2000,
        closeOnClick: true,
      });

      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    } else {
      toast.error("Invalid credentials!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <div className="flex flex-col gap-3">
          {" "}
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            className="mb-4"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            className="mb-6"
          />
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            className="bg-blue-500 hover:bg-blue-600"
          >
            Login
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
