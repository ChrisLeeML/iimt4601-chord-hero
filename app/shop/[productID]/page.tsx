"use client";
import * as React from "react";

import { Box, Container, Typography } from "@mui/material";

export default function Product({ params }: { params: { productID: string } }) {
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
          Product ID: {params.productID}
        </Typography>
      </Box>
    </Container>
  );
}
