"use client";
import * as React from "react";

import { Box, Container, Typography } from "@mui/material";
import EditUkuleleForm from "@/src/components/EditUkuleleForm";

export default function EditCreator({
  params,
}: {
  params: { ukuleleID: string };
}) {
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
          Editing Ukulele ID: {params.ukuleleID}
        </Typography>
      </Box>
      <EditUkuleleForm ukuleleID={params.ukuleleID}/>
    </Container>
  );
}
