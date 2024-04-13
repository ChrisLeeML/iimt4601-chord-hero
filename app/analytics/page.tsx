"use client";
import { useState, useEffect } from "react";
const axios = require("axios");

import {
  Box,
  Container,
  Table,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Button,
} from "@mui/material";

const FetchByContract = async () =>{
    const nftType = "polygon";
    //const contractAddress = req.body.contractAddress;
    const contractAddress = '0x2953399124F0cBB46d2CbACD8A89cF0599974963'
;   const tokenId = '78655756395228556566244677429854963634410546405516720580801289032955980677620'
    const url = `https://api.simplehash.com/api/v0/nfts/${nftType}/${contractAddress}/${tokenId}`;

    const headers = {
      accept: "application/json",
      "X-API-KEY": 'jihoolee529_sk_33a931b9-be65-41db-827c-ff09c2b316bf_g222szbb6t04ufl4'

    };

    try {
      const response = await axios.get(url, { headers });
      const data = response.data;
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
      return "error";
    }
}

export default function Analytics() {
  const [owners, setOwners] = useState<any[]>([]);
  const [data, setData] = useState<any>({});

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await FetchByContract();
      setOwners(data.owners);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);


  return (
    <Container maxWidth="lg">
      <Box
        style={{
          marginTop: 30,
          marginBottom: 20,
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
          Analytics
        </Typography>
      </Box>

      <Box
        style={{
          width: "100%",
        }}
      >
        <Button variant="outlined" style={{ marginRight: 10 }}>
          Chord Hero Music Gallery Pass
        </Button>
        <Button variant="outlined">Chord Hero Music Gallery Pass</Button>
      </Box>

      <Box
        style={{
          width: "100%",
          paddingTop: 20,
          gap: 10,
        }}
      >
        <Box style={{ width: "100%", gap: 10, marginBottom: 15 }}>
          <Typography style={{ fontSize: 18, fontWeight: "600" }}>
            {data.name}
          </Typography>
          <Typography style={{ fontSize: 14, marginBottom: 15 }}>
            {data.description}
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            <b>Chain:</b> {data.chain}
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            <b>NFT ID:</b> {data.nft_id}
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            <b>Contract Address:</b> {data.contract_address}
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            <b>Token ID:</b> {data.token_id}
          </Typography>
        </Box>

        <Typography
          style={{ marginBottom: 10, fontWeight: "600", fontSize: 14 }}
        >
          Owners ({data.owner_count})
        </Typography>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="Chord Hero NFT Owners List Table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Wallet Address</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Date of First Acquisition</TableCell>
                <TableCell align="right">Date of Last Acquisition</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {owners.map((owner) => (
                <TableRow
                  key={owner.owner_address}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {owner.owner_address}
                  </TableCell>
                  <TableCell align="right">{owner.quantity}</TableCell>
                  <TableCell align="right">
                    {owner.first_acquired_date}
                  </TableCell>
                  <TableCell align="right">
                    {owner.last_acquired_date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
