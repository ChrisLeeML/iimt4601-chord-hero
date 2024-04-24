"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { GetUkuleleByID, ListCreators} from "@/src/api/ukuleleService";
import axios from "axios";
//import { FetchTransactionByUkulele } from "@/src/api/simpleHash";

const FetchTransactionByUkulele = async (ukuleleData: Array<any>) => {
  const chain = ukuleleData[0].chain;
  const contractAddress = ukuleleData[0].contractAddress;
  const tokenId = ukuleleData[0].tokenID;
  const url = `https://api.simplehash.com/api/v0/nfts/transfers/${chain}/${contractAddress}/${tokenId}?order_by=timestamp_desc&limit=50`
 
  const headers = {
    accept: "application/json",
    "X-API-KEY":
      "jihoolee529_sk_33a931b9-be65-41db-827c-ff09c2b316bf_g222szbb6t04ufl4",
  };

  try {
    const response = await axios.get(url, { headers });
    console.log("RESPONSES", response.data);
    return response;
  } catch (error) {
    console.error("Error at FetchByUkulele: ", error);
  }
};

export default function Ukulele({ params }: { params: { ukuleleID: string } }) {
  // Implement a client-side method to fetch the Ukulele detail. [TO DO]
  const [ukuleleData, setUkuleleData] = useState<any>([]);
  const [transactionData, setTransactionData] = useState<any>(null);
  const [creatorData, setCreatorData] = useState<any>([]);
  
  useEffect(() => {
    const fetchUkulele = async () => {
      try{
        const ukuleleResponse = await GetUkuleleByID(params.ukuleleID);
        const creatorsResponse = await ListCreators();
        console.log("creatorsResponse", creatorsResponse);
        console.log("ukueleleResponse",ukuleleResponse);
        setUkuleleData(ukuleleResponse);

        if(ukuleleResponse){
          const matchingCreator = creatorsResponse.find(creator => creator.creatorUkuleleId === ukuleleResponse.id);
          if (matchingCreator) {
            console.log(matchingCreator);
            setCreatorData(matchingCreator);
            console.log("creatorData",creatorData);
          }
        }
      } catch (error) {
        console.error("Error fetching ukuleleData", error);
      }
    };

    fetchUkulele();
  }, [params.ukuleleID]); 

  useEffect(() => {
    if (!ukuleleData || ukuleleData.length === 0) {
      // If ukuleleData is not set or is empty, do not fetch transactions
      return;
    }
    const fetchTransaction = async() => {
      try {
        const transactions = await FetchTransactionByUkulele([ukuleleData]);

        if(transactions && transactions.data) {
          const transfers = transactions.data.transfers;
          setTransactionData(transfers);
          console.log("transactionData", transactionData);
        }
      } catch (error) {
        console.error("Error fetching transaction", error);
      }
    };
    fetchTransaction();
  }, [ukuleleData]);

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
        Ukulele Name: {ukuleleData.title}
      </Typography>
      <Typography
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Contract Address: {ukuleleData.contractAddress}
      </Typography>
      <Typography
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Token ID: {ukuleleData.tokenID}
      </Typography>
      <Typography
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        Creator Info <br></br>
        Name: {creatorData.name}<br></br>
        School: 
      
      </Typography>
      <Typography>Analytics</Typography>
      {/* Display an analytics. owner info, stuff stuff... */}
    </Container>
  );
}
