import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import Home from "./pages/home";
import Photos from "./pages/photos";
import {
  AppBar,
  Box,
  Divider,
  Fade,
  List,
  ListItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles.css";
import { FaGithub } from "react-icons/fa";

const App = () => {
  // Navigation links
  const Links = [
    { title: "Home", path: "/" },
    { title: "Photos", path: "/Photos" },
  ];

  // Theme
  const theme = createTheme({
    palette: {
      lotus: {
        main: "#ff8fab",
        light: "#ffb3c6",
        dark: "#fb6f92",
        contrastText: "#242105",
      },
    },
    typography: {
      fontFamily: ["Constantia", "Helvetica Neue", "Arial", "sans-serif"].join(
        ","
      ),
    },
  });

  // Mouse hover colors
  const navStyles = {
    textDecoration: "none",
    "&:hover": {
      color: "lotus.light",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          {/* Navigation links */}
          <AppBar
            position="static"
            sx={{ mb: 1, mt: 1 }}
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box display="flex" alignItems="center">
                <List sx={{ display: "flex" }}>
                  {Links.map(({ title, path }) => (
                    <ListItem component={NavLink} to={path} key={path}>
                      <Typography
                        color="textPrimary"
                        variant="h6"
                        sx={navStyles}
                        fontFamily="Pretendard Standard"
                      >
                        {title}
                      </Typography>
                    </ListItem>
                  ))}
                  <ListItem>
                    <Tooltip
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                      title="Want to see the source code to this website? Click here!"
                      placement="right"
                    >
                      <Link
                        className="link"
                        href="https://github.com/kyriosaa/meikwtc"
                        target="_blank"
                        rel="noopener"
                        color="black"
                      >
                        <FaGithub size={25} />
                      </Link>
                    </Tooltip>
                  </ListItem>
                </List>
              </Box>
            </Toolbar>
            <Divider variant="middle" />
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Photos" element={<Photos />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
