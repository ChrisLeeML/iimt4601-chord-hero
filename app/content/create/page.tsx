import CreateContentForm from "@/src/components/CreateContentForm";
import CreateCreatorForm from "@/src/components/CreateCreatorForm";
import { Container } from "@mui/material";
import * as React from "react";

export default function CreateContent() {
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <CreateContentForm />
    </Container>
  );
}
