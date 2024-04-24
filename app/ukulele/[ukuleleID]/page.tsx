"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  IconButton,
  DialogProps,
  Divider,
} from "@mui/material";
import {
  GetSchoolByID,
  GetUkuleleByID,
  ListCreators,
} from "@/src/api/ukuleleService";
import axios from "axios";
import Link from "next/link";

const FetchTransactionByUkulele = async (ukuleleData: Array<any>) => {
  const chain = ukuleleData[0].chain;
  const contractAddress = ukuleleData[0].contractAddress;
  const tokenId = ukuleleData[0].tokenID;
  const url = `https://api.simplehash.com/api/v0/nfts/transfers/${chain}/${contractAddress}/${tokenId}?order_by=timestamp_desc&limit=50`;

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

export default function UkulelePage({
  params,
}: {
  params: { ukuleleID: string };
}) {
  // Implement a client-side method to fetch the Ukulele detail. [TO DO]
  const [ukuleleData, setUkuleleData] = useState<any>();
  const [transactionData, setTransactionData] = useState<any>(null);
  const [creatorData, setCreatorData] = useState<any>();
  const [school, setSchool] = useState<any>();

  const fetchUkulele = async () => {
    try {
      const ukuleleResponse = await GetUkuleleByID(params.ukuleleID);
      const creatorsResponse = await ListCreators();
      console.log("creatorsResponse", creatorsResponse);
      console.log("ukueleleResponse", ukuleleResponse);
      setUkuleleData(ukuleleResponse);

      if (ukuleleResponse) {
        const matchingCreator = creatorsResponse.find(
          (creator) => creator.creatorUkuleleId === ukuleleResponse.id
        );
        if (matchingCreator) {
          console.log(matchingCreator);
          setCreatorData(matchingCreator);
          console.log("creatorData", creatorData);
        }
      }
    } catch (error) {
      console.error("Error fetching ukuleleData", error);
    }
  };

  const fetchSchool = async (schoolID: string) => {
    try {
      const schoolData = await GetSchoolByID(schoolID);
      setSchool(schoolData);
    } catch (error) {
      console.error("Error at fetchSchool: ", error);
    }
  };

  const fetchTransaction = async () => {
    try {
      const transactions = await FetchTransactionByUkulele([ukuleleData]);
      if (transactions && transactions.data) {
        const transfers = transactions.data.transfers;
        setTransactionData(transfers);
        console.log("transactionData", transactionData);
      }
    } catch (error) {
      console.error("Error fetching transaction", error);
    }
  };

  useEffect(() => {
    fetchUkulele();
  }, [params.ukuleleID]);

  useEffect(() => {
    if (creatorData) {
      fetchSchool(creatorData.schoolID);
    }
  }, [creatorData]);

  useEffect(() => {
    if (ukuleleData) {
      fetchTransaction();
    }
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

      {ukuleleData ? (
        <>
          {" "}
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            {ukuleleData.title}
          </Typography>
          <Typography
            style={{
              fontSize: 12,
              marginTop: 10,
            }}
          >
            <strong>Contract Address:</strong> {ukuleleData.contractAddress}
          </Typography>
          <Typography
            style={{
              fontSize: 12,
              marginBottom: 20,
            }}
          >
            <strong>Token ID:</strong> {ukuleleData.tokenID}
          </Typography>
          {creatorData ? (
            <Link href={`/creator/${creatorData.id}`}>
              <Typography
                style={{
                  fontSize: 14,
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                <strong>Creator Info</strong> <br></br>
                <strong>Name:</strong> {creatorData.name}
                <br></br>
                {school ? (
                  <>
                    <strong>School:</strong> {school.title}
                  </>
                ) : null}
              </Typography>
            </Link>
          ) : (
            <Typography
              style={{
                fontSize: 12,
                marginTop: 10,
                marginBottom: 20,
                color: "red",
              }}
            >
              No creator was assigned.
            </Typography>
          )}
          {transactionData && transactionData.length > 0 ? (
            <>
              <Divider
                style={{
                  height: "3px",
                  background: "black",
                  marginBottom: 10,
                }}
              />
              <Typography style={{ fontWeight: "bold", marginBottom: 20 }}>
                Analytics
              </Typography>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="NFT Owners List Table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Timestamp</TableCell>
                      <TableCell align="left">NFT ID</TableCell>
                      <TableCell align="left">Chain</TableCell>
                      <TableCell align="left">Contract Address</TableCell>
                      <TableCell align="left">Token ID</TableCell>
                      <TableCell align="left">Event Type</TableCell>
                      <TableCell align="left">From Address</TableCell>
                      <TableCell align="left">To Address</TableCell>
                      <TableCell align="left">Quantity</TableCell>
                      <TableCell align="left">Block Number</TableCell>
                      <TableCell align="left">Batch Transfer Index</TableCell>
                      <TableCell align="left">Block Hash</TableCell>
                      <TableCell align="left">Log Index</TableCell>
                      <TableCell align="left">Collection ID</TableCell>
                      <TableCell align="left">Quantity String</TableCell>
                      <TableCell align="left">Transaction</TableCell>
                      <TableCell align="left">Transaction Initiator</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactionData.map((transaction: any) => (
                      <TableRow
                        key={transaction.timestamp}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">
                          {transaction.timestamp}
                        </TableCell>
                        <TableCell component="th" align="center" scope="row">
                          <Box
                            style={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              width: "22rem",
                            }}
                          >
                            <Typography
                              noWrap
                              style={{
                                fontSize: "14px",
                              }}
                            >
                              {transaction.nft_id}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="left">{transaction.chain}</TableCell>
                        <TableCell align="left">
                          {transaction.contract_address}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.token_id}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.event_type}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.from_address
                            ? transaction.from_address
                            : "N/A"}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.to_address
                            ? transaction.to_address
                            : "N/A"}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.quantity}
                        </TableCell>

                        <TableCell align="left">
                          {transaction.block_number}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.batch_transfer_index}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.block_hash}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.log_index}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.collection_id}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.quantity_string}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.transaction}
                        </TableCell>
                        <TableCell align="left">
                          {transaction.transaction_initiator}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
}
