import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import ContentsGrid from "@/src/components/ContentsGrid"

export default async function ContentList() {
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
          Exclusive Content
        </Typography>
        <Button
          variant="contained"
          style={{ background: "black", width: "200px" }}
          href="/content/create"
        >
          Add Content
        </Button>
      </Box>
      <ContentsGrid/>
    </Container>
  );
}
