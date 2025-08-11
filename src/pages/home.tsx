import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Link, Box, Button } from "@mui/material";

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

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
          <Link component={RouterLink} to="/todos" underline="none" color="inherit">
            Todos
          </Link>
          <Link component={RouterLink} to="/about" underline="none" color="inherit">
            About
          </Link>
          <Link component={RouterLink} to="/user-list" underline="none" color="inherit">
            Users
          </Link>
          <Link component={RouterLink} to="/counter" underline="none" color="inherit">
            Counter
          </Link>
          <Link component={RouterLink} to="/tutorial" underline="none" color="inherit">
            Tutorials
          </Link>
          <Link component={RouterLink} to="/form" underline="none" color="inherit">
            Form
          </Link>


          <Box flexGrow={1} /> {/* Spacer */}

          {isLoggedIn ? (
            <Button color="error" variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button
              color="secondary"
              variant="contained"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
}

export default Home;
