import React from "react";
import { Grid, Paper } from "@mui/material";
import "../styles/Login.css";

export default function Login(props) {
  const paperStyle = {
    padding: 20,
    minHeight: "60vh",
    width: "50vw",
    maxWidth: 450,
    margin: "4rem auto",
  };
  const h2Style = {
    textAlign: "center",
    fontSize: "2rem",
  };
  return (
    <div className="login">
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <h2 style={h2Style}>Sign In</h2>
        </Paper>
      </Grid>
    </div>
  );
}
