import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = [
    { label: "Home", path: "/", end: true },
    { label: "Todos", path: "/todos" },
    { label: "About", path: "/about" },
    { label: "Users", path: "/user-list" },
    { label: "Counter", path: "/counter" },
    { label: "Tutorials", path: "/tutorial" },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ gap: 3 }}>
        {navItems.map(({ label, path, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            style={({ isActive }) => ({
              color: "inherit",
              textDecoration: "none",
              fontWeight: isActive ? 700 : 500,
              borderBottom: isActive ? "2px solid yellow" : "none",
              paddingBottom: "2px",
            })}
          >
            {label}
          </NavLink>
        ))}

        <Box flexGrow={1} />

        {isLoggedIn ? (
          <Button variant="outlined" color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate("/signup")}
            >
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
