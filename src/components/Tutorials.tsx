import { Link, Outlet } from "react-router-dom";
import { Box, Typography, Button, Stack } from "@mui/material";

function Tutorials() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Click on the topic below to learn
      </Typography>

      <Stack direction="column" spacing={2} sx={{ maxWidth: 300 }}>
        <Button component={Link} to="javascript" variant="outlined">
          JavaScript
        </Button>
        <Button component={Link} to="typescript" variant="outlined">
          TypeScript
        </Button>
        <Button component={Link} to="angular" variant="outlined">
          Angular
        </Button>
        <Button component={Link} to="react" variant="outlined">
          React
        </Button>
      </Stack>

      <Box sx={{ mt: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Tutorials;
