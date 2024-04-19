import * as React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import CreatorsGrid from "@/src/components/CreatorsGrid";

export default async function CreatorsPage() {
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <Box
        style={{
          marginTop: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
          Creators
        </Typography>
        <Button
          variant="contained"
          style={{ background: "black", width: "200px" }}
          href="/creator/create"
        >
          Add Creator
        </Button>
      </Box>

      <CreatorsGrid />
    </Container>
  );
}
