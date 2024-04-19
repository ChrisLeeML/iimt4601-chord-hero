import CreateUkuleleForm from "@/src/components/CreateUkuleleForm";
import { Container } from "@mui/material";
import * as React from "react";

export default function CreateCreator() {
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <CreateUkuleleForm />
    </Container>
  );
}
