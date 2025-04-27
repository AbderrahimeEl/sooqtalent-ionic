import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as RouterLink, useHistory } from "react-router-dom"; // 🔥 useHistory instead of useNavigate
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const history = useHistory(); // 🔥 history instead of navigate

  const handleLogout = () => {
    logout();
    history.push("/login"); // 🔥 use history.push
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/dashboard"
          sx={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}
        >
          FreelanceApp
        </Typography>
        {user && (
          <Box>
            <Button color="inherit" component={RouterLink} to="/dashboard">
              Dashboard
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/dashboard/profile"
            >
              Profile
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
