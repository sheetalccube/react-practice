import {
  Alert,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styles from "./todo.module.css";

function Todos() {
  interface TodoItem {
    id: number;
    name: string;
    description: string;
  }
  const [todName, setName] = useState("");
  const [todDescription, setDescription] = useState("");

  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      name: "Buy groceries",
      description: "Milk, Bread, Eggs, Fruits",
    },
    {
      id: 2,
      name: "Workout",
      description: "Morning gym session at 7 AM",
    },
    {
      id: 3,
      name: "Meeting with client",
      description: "Project update call at 11 AM",
    },
    {
      id: 4,
      name: "Read a book",
      description: 'Read 30 pages of "Atomic Habits"',
    },
    {
      id: 5,
      name: "Call plumber",
      description: "Fix the kitchen sink leakage",
    },
  ]);
  const [error, setError] = useState("");

  function handleSubmit() {
    if (!todName.trim() || !todDescription.trim()) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    const newTodo: TodoItem = {
      id: todos.length + 1,
      name: todName.trim(),
      description: todDescription.trim(),
    };
    setTodos([...todos, newTodo]);
    setName("");
    setDescription("");
  }
  function handleDelete(id: number) {
    console.log(id, "---");
  }

  function handleEdit(todo: TodoItem) {
    console.log(todo, "111");
  }

  return (
    <div className={styles.todo_body}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <h3 className={styles.page_heading}>Todo Managment</h3>
      <TextField
        onChange={(event) => setName(event.target.value)}
        required
        value={todName}
        margin="dense"
        label="Name"
        placeholder="Enter name"
        fullWidth
        variant="outlined"
        size="medium"
        name="itemName"
      />
      <br />
      <TextField
        onChange={(event) => setDescription(event.target.value)}
        value={todDescription}
        required
        margin="dense"
        label="Description"
        placeholder="Enter Description"
        fullWidth
        variant="outlined"
        size="medium"
        name="description"
      />
      <br />
      <Button
        sx={{
          display: "block",
          margin: "10px auto 0 auto",
          width: "180px",
        }}
        disabled={!todName.trim() || !todDescription.trim()}
        variant="contained"
        type="submit"
        size="large"
        onClick={handleSubmit}
      >
        Submit
      </Button>

      {todos.length > 0 && (
        <div style={{ marginTop: "50px" }}>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "#3982e1ff" }}>
                <TableRow>
                  <TableCell>
                    <strong>ID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Description</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Action</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todos.map((item, index) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      backgroundColor: index % 2 !== 0 ? "#f9f9f9" : "white",
                    }}
                  >
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      {todos.length === 0 && (
        <p style={{ color: "#777" }}>No todos added yet. Add one above.</p>
      )}
    </div>
  );
}
export default Todos;
