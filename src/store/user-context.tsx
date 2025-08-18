import { createContext } from "react";

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const userList: User[] = [
  { id: 1, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", age: 34, email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Brown", age: 22, email: "charlie.brown@example.com" },
  { id: 4, name: "Diana Patel", age: 30, email: "diana.patel@example.com" },
  { id: 5, name: "Ethan Lee", age: 26, email: "ethan.lee@example.com" },
  { id: 6, name: "Fiona Adams", age: 29, email: "fiona.adams@example.com" },
];

export const UserContext = createContext(userList);
