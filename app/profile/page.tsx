import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Profile() {
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
          Profile
        </Typography>
      </Box>
    </Container>
  );
}
