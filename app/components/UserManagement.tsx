import React from "react";
import {
  Button,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
import { User } from "../interfaces/UserInterface";

const UserManagement: React.FC<{
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}> = ({ users, onEdit, onDelete, onAdd }) => (
  <div>
    <Button variant="contained" onClick={onAdd}>
      Add User
    </Button>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              {user.firstName} {user.lastName}
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.isActive ? "Active" : "Inactive"}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none", marginRight: "8px" }}
                onClick={() => onEdit(user)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ textTransform: "none" }}
                onClick={() => onDelete(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default UserManagement;
