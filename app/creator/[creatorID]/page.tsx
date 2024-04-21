"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { GetCreatorByID } from "@/src/api/ukuleleService";
import { getCreator } from "@/src/graphql/queries"
import { cookieBasedClient } from "../../layout";


export default function Student({ params }: { params: { creatorID: string } }) {
  const [data, setData] = useState<any>([]);
  
  useEffect(() => {
    const fetchCreator = async () => {
      const creatorData = await GetCreatorByID(params.creatorID);
      console.log(creatorData);
      setData(creatorData);
    };

    fetchCreator();
  }, [params.creatorID]); 

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
            fontSize: 12,
            fontWeight: "bold",
            color: "gray",
            textAlign: "left",
            width: "100%",
          }}
        >
          Student ID: {params.creatorID}
        </Typography>
        <Button
          variant="contained"
          style={{ background: "black", width: "200px" }}
          href={`/creator/${params.creatorID}/edit`}
        >
          Edit Creator
        </Button>
      </Box>

      <Typography
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Creator Name: {data.name}
      </Typography>
      <Typography
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Creator School: {data.schoolID}
      </Typography>
      <Typography>Ukuleles Created</Typography>
      {/* Display a grid of ukuleles created */}
    </Container>
  );
}
