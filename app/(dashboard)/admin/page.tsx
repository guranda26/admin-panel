"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import UserManagement from "../../components/UserManagement";
import UserModal from "../../components/UserModal";
import { User } from "@/app/interfaces/UserInterface";
import { toast } from "react-toastify";

const Admin = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("isAuthenticated");
    if (!user) {
      toast.warn("You are not authenticated!", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
  }, [router]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAddOrEditUser = (user: User) => {
    if (isEditMode && selectedUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center overflow-hidden">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 transition duration-300"
        onClick={() => router.push("/")}
      >
        Return Back
      </button>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <UserManagement
          users={users}
          onEdit={(user) => {
            setSelectedUser(user);
            setEditMode(true);
            setModalOpen(true);
          }}
          onDelete={handleDeleteUser}
          onAdd={() => {
            setSelectedUser(null);
            setEditMode(false);
            setModalOpen(true);
          }}
        />
      </div>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddOrEditUser}
        user={selectedUser}
      />
    </div>
  );
};

export default Admin;
