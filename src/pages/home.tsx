import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  Button,
  Typography,
  Container,
  Paper,
} from "@mui/material";

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ gap: 3 }}>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            color="inherit"
            sx={{ fontWeight: 500 }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/todos"
            underline="none"
            color="inherit"
          >
            Todos
          </Link>
          <Link
            component={RouterLink}
            to="/about"
            underline="none"
            color="inherit"
          >
            About
          </Link>
          <Link
            component={RouterLink}
            to="/user-list"
            underline="none"
            color="inherit"
          >
            Users
          </Link>
          <Link
            component={RouterLink}
            to="/counter"
            underline="none"
            color="inherit"
          >
            Counter
          </Link>
          <Link
            component={RouterLink}
            to="/tutorial"
            underline="none"
            color="inherit"
          >
            Tutorials
          </Link>
          {/* <Link
            component={RouterLink}
            to="/form"
            underline="none"
            color="inherit"
          >
            Form
          </Link> */}
          <Box flexGrow={1} />
          {isLoggedIn ? (
            <Button color="error" variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => navigate("/signup")}
              >
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom color="primary">
            Welcome to the Home Page
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
            This is the main landing page of our React application. Use the
            navigation bar above to explore different sections like Todos,
            Users, Forms, and more.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {isLoggedIn
              ? "You are currently logged in. Enjoy browsing your content!"
              : "You are not logged in. Please log in to access protected pages."}
          </Typography>
        </Paper>

        {/* This is where child routes will render */}
        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Home;
