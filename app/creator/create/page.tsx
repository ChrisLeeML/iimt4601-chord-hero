"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import * as React from "react";

export default function CreateCreator() {
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <FormControl
        style={{
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <FormLabel>Create Creator</FormLabel>
        <TextField />
        <Button>Submit</Button>
      </FormControl>
    </Container>
  );
}
