"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
function BottomBar() {
  return (
    <AppBar
      position="static"
      style={{ background: "black", height: "100px", marginTop: "50px" }}
    />
  );
}
export default BottomBar;
