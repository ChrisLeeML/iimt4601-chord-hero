"use client";
import * as React from "react";

import { Box, Container, Typography } from "@mui/material";
import EditCreatorForm from "@/src/components/EditCreatorForm";

export default function EditCreator({
  params,
}: {
  params: { creatorID: string };
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
          Editing Creator ID: {params.creatorID}
        </Typography>
      </Box>
      <EditCreatorForm creatorID={params.creatorID}/>
    </Container>
  );
}
