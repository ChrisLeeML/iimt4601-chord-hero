import UploadButton from "@/src/components/UploadButton";
import { Container } from "@mui/material";
import React from "react";
import { cookieBasedClient } from "@/app/layout";
import { createUkulele } from "@/src/graphql/mutations";
import UkuleleJSON from "../../src/ukulele.json";

const Upload = () => {
  const handleUploadJSON = async () => {
    "use server";
    try {
      console.log("Uploading...");
      const ukuleles = UkuleleJSON;
      await Promise.all(
        ukuleles.map(async (ukulele) => {
          const newUkulele = await cookieBasedClient.graphql({
            query: createUkulele,
            variables: { input: ukulele },
          });
          console.log("Created Ukulele:", newUkulele);
        })
      );

      console.log("Created all.");
    } catch (error) {
      console.error("Error at handleUploadJSON: ", error);
    }
  };
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <UploadButton handleUploadJSON={handleUploadJSON} />
    </Container>
  );
};

export default Upload;
