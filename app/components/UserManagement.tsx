import React from "react";
import {
  Button,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { User } from "../interfaces/UserInterface";

const UserManagement: React.FC<{
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}> = ({ users, onEdit, onDelete, onAdd }) => (
  <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
    <Button variant="contained" onClick={onAdd} sx={{ mb: 2 }}>
      Add User
    </Button>
    <Table sx={{ display: { xs: "none", md: "table" }, width: "100%" }}>
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

    <Grid
      container
      spacing={2}
      sx={{
        display: { xs: "flex", md: "none" },
        flexDirection: "column",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      {users.map((user) => (
        <Grid
          key={user.id}
          sx={{
            border: "1px solid #ddd",
            borderRadius: 1,
            p: 2,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography>Age: {user.age}</Typography>
          <Typography>
            Status: {user.isActive ? "Active" : "Inactive"}
          </Typography>
          <div style={{ marginTop: "8px" }}>
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
          </div>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default UserManagement;
