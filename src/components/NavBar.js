import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";

export default function NavBar() {
  return (
    <div
      style={{
        width: "100%",
        minWidth: "400px",
        margin: "auto",
        height: "75px",
        backgroundColor: "#F6F6F6",
        display: "grid",
        gridTemplateColumns: "30% auto 30%",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "left", paddingLeft: "30px" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
      </div>
      <div style={{ minWidth: "200px", margin: "auto" }}>
        <h3>My Local Favorite Restaurants</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
          maxWidth: "500PX",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "auto",
          }}
        >
          <Link
            style={{ textDecoration: "none", margin: "5px" }}
            to="/"
          >
            <Button variant="contained">Home</Button>
          </Link>

          <Link
            style={{ textDecoration: "none", margin: "5px" }}
            to="/listings"
          >
            <Button variant="contained">Listings</Button>
          </Link>

          <Link style={{ textDecoration: "none", margin: "5px" }} to="/login">
            <Button variant="contained">Login</Button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
