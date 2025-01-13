import React, { useState, useEffect } from "react";
import { User } from "../interfaces/UserInterface";

const UserModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
  user: User | null;
}> = ({ isOpen, onClose, onSave, user }) => {
  const [formData, setFormData] = useState<User>(
    user || {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      isActive: true,
    }
  );

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const handleChange = (
    field: keyof User,
    value: string | number | boolean
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">User Form</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-2 border rounded"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-2 border rounded"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            className="w-full p-2 border rounded"
            value={formData.age}
            onChange={(e) => handleChange("age", +e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button
            className="bg-gray-400 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
