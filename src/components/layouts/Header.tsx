import { AppBar, Toolbar, Box, Button, IconButton, Badge } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Services/Reducers";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const cartCount = useSelector(
    (state: RootState) => state.cartItemReducer.cartData.length
  );

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
    { label: "Mix", path: "/mix" },
    { label: "Context", path: "/context" },
    { label: "Api", path: "/api" },
    { label: "Hoc", path: "/hoc" },
    { label: "Marketplace", path: "/marketplace" },
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

        <IconButton color="inherit" onClick={() => navigate("/marketplace")}>
          <Badge badgeContent={cartCount} color="error" overlap="circular">
            <FaCartPlus size={20} />
          </Badge>
        </IconButton>
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
