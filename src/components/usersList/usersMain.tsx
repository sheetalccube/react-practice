import Users from "./users";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

function UsersMain() {
  const navigate = useNavigate();

  const userList: User[] = [
    { id: 1, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
    { id: 2, name: "Bob Smith", age: 34, email: "bob.smith@example.com" },
    { id: 3, name: "Charlie Brown", age: 22, email: "charlie.brown@example.com" },
    { id: 4, name: "Diana Patel", age: 30, email: "diana.patel@example.com" },
    { id: 5, name: "Ethan Lee", age: 26, email: "ethan.lee@example.com" },
    { id: 6, name: "Diana Patel", age: 30, email: "diana.patel@example.com" },

  ];

  return (
    <Box sx={{ p: 2 }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        Go Back
      </Button>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {userList.map((item) => (
          <Users key={item.id} data={item} />
        ))}
      </Box>
    </Box>
  );
}

export default UsersMain;
