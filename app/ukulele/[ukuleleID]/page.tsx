"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { GetUkuleleByID } from "@/src/api/ukuleleService";

export default function Ukulele({ params }: { params: { ukuleleID: string } }) {
  // Implement a client-side method to fetch the Ukulele detail. [TO DO]
  const [data, setData] = useState<any>([]);
  
  useEffect(() => {
    const fetchCreator = async () => {
      const creatorData = await GetUkuleleByID(params.ukuleleID);
      console.log(creatorData);
      setData(creatorData);
    };

    fetchCreator();
  }, [params.ukuleleID]); 

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
          Ukulele ID: {params.ukuleleID}
        </Typography>
        <Button
          variant="contained"
          style={{ background: "black", width: "200px" }}
          href={`/ukulele/${params.ukuleleID}/edit`}
        >
          Edit Ukulele
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
        Ukulele Name: {data.title}
      </Typography>
      <Typography
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Contract Address: {data.contractAddress}
      </Typography>
      <Typography
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Token ID: {data.tokenID}
      </Typography>
      <Typography
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Creator Info
      </Typography>
      <Typography>Ukulele Analytics</Typography>
      {/* Display an analytics. owner info, stuff stuff... */}
    </Container>
  );
}
