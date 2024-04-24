import UploadButton from "@/src/components/UploadButton";
import { Container } from "@mui/material";
import React from "react";
import { cookieBasedClient } from "@/app/layout";
import { listContents, listUkuleles,listCreators, getUkulele, listOwners } from "@/src/graphql/queries";

const List = () => {
  const handleUploadJSON = async () => {
    "use server";
    console.log("clicked");
    try {
        const response = await cookieBasedClient.graphql({
          query: listUkuleles
        });
        console.log("Ukuleles: ", JSON.stringify(response.data, null, 2));
        return response.data;
    } catch (error) {
      console.error('Error fetching ukuleles:', error);
      return null;
    }
  };
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <UploadButton handleUploadJSON={handleUploadJSON} />
    </Container>
  );
};

export default List;
