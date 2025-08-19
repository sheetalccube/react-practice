import { Component, type ChangeEvent } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { UserContext } from "@/store/user-context";

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface UserFinderState {
  filteredUsers: User[];
  searchTerm: string;
}

export default class UserFinder extends Component<object, UserFinderState> {
  // userList: User[] = [
  //   { id: 1, name: "Alice Johnson", age: 28, email: "alice.johnson@example.com" },
  //   { id: 2, name: "Bob Smith", age: 34, email: "bob.smith@example.com" },
  //   { id: 3, name: "Charlie Brown", age: 22, email: "charlie.brown@example.com" },
  //   { id: 4, name: "Diana Patel", age: 30, email: "diana.patel@example.com" },
  //   { id: 5, name: "Ethan Lee", age: 26, email: "ethan.lee@example.com" },
  //   { id: 6, name: "Fiona Adams", age: 29, email: "fiona.adams@example.com" },
  // ];

  constructor(props: object) {
    super(props);
    this.state = {
      // initially set hoga blank array of users
      filteredUsers: [],
      searchTerm: "",
    };
  }
  static contextType = UserContext;
  declare context: React.ContextType<typeof UserContext>;

  componentDidMount() {
    // Fetch users on component mount bcz api s data aaega so we can call api here
    // this.setState({ filteredUsers: this.userList });

    // getting the list from context
    this.setState({ filteredUsers: this.context });
  }

  searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  componentDidUpdate(prevProp: UserFinder, prevState: UserFinderState) {
    // Update filtered users when search term changes so that we can handle side effects
    if (prevState.searchTerm !== this.state.searchTerm) {
      const filtered = this.context.filter((user) =>
        user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );

      if (filtered.length === 0) {
        // Throwing error will be caught by ErrorBoundary
        throw new Error(`No users found matching "${this.state.searchTerm}"`);
      }

      this.setState({ filteredUsers: filtered });
    }
  }
  componentWillUnmount() {
    console.log("UserFinder unmounted");
  }

  render() {
    return (
      <>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              User Finder
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search users..."
              value={this.state.searchTerm}
              onChange={this.searchHandler}
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                input: { color: "black" },
              }}
            />
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Card elevation={3} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Users List
              </Typography>
              <List>
                {this.state.filteredUsers.length > 0 ? (
                  this.state.filteredUsers.map((user) => (
                    <ListItem key={user.id} divider>
                      <ListItemText
                        primary={user.name}
                        secondary={`${user.age} years old • ${user.email}`}
                      />
                    </ListItem>
                  ))
                ) : (
                  <Typography color="text.secondary">
                    No users found.
                  </Typography>
                )}
              </List>
            </CardContent>
          </Card>
        </Container>
      </>
    );
  }
}
