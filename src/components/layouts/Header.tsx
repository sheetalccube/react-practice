import { AppBar, Toolbar, Link, Box, Button } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Header() {
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
            <Button variant="outlined" color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button variant="outlined" color="inherit" onClick={() => navigate("/login")}>
  Login
              </Button>
              <Button variant="outlined" color="inherit" onClick={() => navigate("/signup")}>
  Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
