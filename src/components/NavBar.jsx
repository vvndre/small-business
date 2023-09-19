import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import cookie from "cookie";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { checkAuth } from "../Router";

export default function NavBar(props) {
  const navigate = useNavigate();
  console.log("The nav props is:", props);
  const cookies = cookie.parse(document.cookie);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "hsl(147, 50%, 46%)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Austin Small Business
          </Typography>
          <Box>
            <Button color="inherit" sx={{ marginRight: "1rem" }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  textTransform: "none",
                }}
              >
                Listings
              </Link>
            </Button>
            {checkAuth() && (
              <Button color="inherit" sx={{ marginRight: "1rem" }}>
                <Link
                  to="/addListing"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    textTransform: "none",
                  }}
                >
                  Add
                </Link>
              </Button>
            )}
            {checkAuth() ? (
              <Button
                onClick={() => {
                  document.cookie = "loggedIn=";
                  navigate("/login");
                }}
                color="inherit"
                style={{
                  color: "white",
                  textDecoration: "none",
                  textTransform: "none",
                }}
              >
                Logout
              </Button>
            ) : (
              <Button color="inherit">
                <Link
                  to="/login"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    textTransform: "none",
                  }}
                >
                  Login
                </Link>
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <div>
        {cookies.loggedIn && (
          <h4
            style={{
              backgroundColor: "lightgray",
              padding: ".5rem",
              paddingLeft: "2rem",
              margin: 0,
              marginTop: ".2rem",
              color: "gray",
            }}
          >
            Logged in as: {props.user}
          </h4>
        )}
      </div>
    </Box>
  );
}
