"use client";
import * as React from "react";

import { Box, Container, Typography } from "@mui/material";

export default function EditContent({
  params,
}: {
  params: { contentID: string };
}) {
  // Implement a form submission. [TO DO]
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
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
          Editing Content ID: {params.contentID}
        </Typography>
      </Box>
    </Container>
  );
}
