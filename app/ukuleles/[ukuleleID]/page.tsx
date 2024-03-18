"use client";
import * as React from "react";

import { Box, Container, Typography } from "@mui/material";

export default function Ukulele({ params }: { params: { ukuleleID: string } }) {
  return (
    <Container maxWidth="lg">
      <Box
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "gray",
            textAlign: "left",
            width: "100%",
          }}
        >
          Ukulele ID: {params.ukuleleID}
        </Typography>
      </Box>
    </Container>
  );
}
