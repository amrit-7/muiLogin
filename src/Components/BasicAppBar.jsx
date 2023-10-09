import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const BasicAppBar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{ bgcolor: "neutral.main", color: "primary.dark" }}
      >
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6">Material AppBar</Typography>
          <IconButton size="large" edge="end" color="inherit" sx={{display:{xs:"flex", sm:"none"}, ml:"auto"}}>
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            spacing={2}
            sx={{ ml: "auto", display: { xs: "none", sm: "flex" } }}
          >
            <Button color="inherit">Home</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BasicAppBar;
