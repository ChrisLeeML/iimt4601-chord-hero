"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GetUkulele, ListOwners } from "@/src/api/ukuleleService";
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
  IconButton,
  DialogProps,
} from "@mui/material";
import { FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import OwnerModal from "@/src/components/OwnerModal";

interface OwnerInterface {
  owner_address: string;
  quantity: number;
  first_acquired_date: string;
  last_acquired_date: string;
}

const FetchByContract = async () => {
  const nftType = "polygon";
  const contractAddress = "0x2953399124F0cBB46d2CbACD8A89cF0599974963";
  const tokenId =
    "78655756395228556566244677429854963634410546405516720580801289032955980677620";
  const url = `https://api.simplehash.com/api/v0/nfts/${nftType}/${contractAddress}/${tokenId}`;

  const headers = {
    accept: "application/json",
    "X-API-KEY":
      "jihoolee529_sk_33a931b9-be65-41db-827c-ff09c2b316bf_g222szbb6t04ufl4",
  };

  try {
    const response = await axios.get(url, { headers });
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error at FetchByContract: ", error);
  }
};

const FetchByUkulele = async (items: Array<any>) => {
  const headers = {
    accept: "application/json",
    "X-API-KEY":
      "jihoolee529_sk_33a931b9-be65-41db-827c-ff09c2b316bf_g222szbb6t04ufl4",
  };

  const requests = items.map((element) => {
    const nftType = element.chain;
    const contractAddress = element.contractAddress;
    const tokenId = element.tokenID;
    const url = `https://api.simplehash.com/api/v0/nfts/${nftType}/${contractAddress}/${tokenId}`;

    return axios.get(url, { headers }).catch((error) => console.error(error));
  });

  try {
    const responses = await Promise.all(requests);
    console.log("RESPONSES", responses);
    return responses;
  } catch (error) {
    console.error("Error at FetchByUkulele: ", error);
  }
};

export default function Analytics() {
  const [savedOwners, setSavedOwners] = useState<any[]>([]);
  const [data, setData] = useState<any[][]>([]);
  const [index, setIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedOwnerAddress, setSelectedOwnerAddress] = useState<string>("");
  const [selectedOwnerNickname, setSelectedOwnerNickname] =
    useState<string>("");

  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isFetchRequired, setIsFetchRequired] = useState<boolean>(false);

  const fetchOwners = async () => {
    try {
      resetModal();
      const ownerData = await ListOwners();
      console.log("ownerDATA:", ownerData);
      setSavedOwners(ownerData);
      setIsFetchRequired(false);
    } catch (error) {
      console.error("Error fetching ownerData:", error);
    }
  };

  const fetchData = async () => {
    try {
      const ukuleleDataArray: any[] = [];
      const galleryPassData = await FetchByContract();
      const ukuleleData = await GetUkulele();
      var ukuleleItems: any[] = [];
      if (ukuleleData) {
        ukuleleItems = ukuleleData.listUkuleles.items;
      }
      const ukuleleFetchResult = await FetchByUkulele(ukuleleItems);

      if (Array.isArray(ukuleleFetchResult)) {
        for (let element of ukuleleFetchResult) {
          if (element && Object.keys(element.data).length) {
            ukuleleDataArray.push(element.data);
          }
        }
      }

      ukuleleDataArray.sort((a, b) => a.name.localeCompare(b.name));
      setData([[galleryPassData], ukuleleDataArray]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setSelectedOwnerAddress("");
    setSelectedOwnerNickname("");
    setIsChanged(false);
  };

  const handleClose: DialogProps["onClose"] = (event, reason) => {
    if (reason && reason === "backdropClick") {
      resetModal();
    }
  };

  useEffect(() => {
    if (isFetchRequired) {
      fetchOwners();
    }
  }, [isFetchRequired]);

  useEffect(() => {
    fetchData();
    fetchOwners();
  }, []);

  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
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
        <Button
          variant="outlined"
          style={{
            marginRight: 10,
            background: index == 0 ? "black" : "transparent",
            color: index == 0 ? "white" : "black",
            borderWidth: index == 0 ? 0 : 1,
            borderColor: "black",
          }}
          onClick={() => {
            setIndex(0);
          }}
        >
          Chord Hero Music Gallery Pass
        </Button>
        <Button
          variant="outlined"
          style={{
            marginRight: 10,
            background: index == 1 ? "black" : "transparent",
            color: index == 1 ? "white" : "black",
            borderWidth: index == 1 ? 0 : 1,
            borderColor: "black",
          }}
          onClick={() => {
            setIndex(1);
          }}
        >
          Chord Hero Ukulele
        </Button>
      </Box>
      {data.length > 0
        ? data[index].map((item, i) => (
            <Box
              key={i}
              style={{
                width: "100%",
                paddingTop: 20,
                gap: 10,
              }}
            >
              <Box style={{ width: "100%", gap: 10, marginBottom: 15 }}>
                <Typography style={{ fontSize: 18, fontWeight: "600" }}>
                  {item.name}
                </Typography>
                <Typography style={{ fontSize: 14, marginBottom: 15 }}>
                  {item.description}
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                  <b>Chain:</b> {item.chain}
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                  <b>NFT ID:</b> {item.nft_id}
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                  <b>Contract Address:</b> {item.contract_address}
                </Typography>
                <Typography style={{ fontSize: 14 }}>
                  <b>Token ID:</b> {item.token_id}
                </Typography>
              </Box>

              <Typography
                style={{ marginBottom: 10, fontWeight: "600", fontSize: 14 }}
              >
                Owners ({item.owner_count})
              </Typography>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  aria-label="NFT Owners List Table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Wallet Address</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">
                        Date of First Acquisition
                      </TableCell>
                      <TableCell align="right">
                        Date of Last Acquisition
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item.owners.map((owner: OwnerInterface) => (
                      <TableRow
                        key={owner.owner_address}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Box
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Link
                              href={`https://opensea.io/${owner.owner_address}`}
                              target="_blank"
                              style={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                width: "22rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                              }}
                            >
                              <Typography
                                noWrap
                                style={{
                                  fontSize: "14px",
                                }}
                              >
                                {savedOwners.find(
                                  (savedOwner) =>
                                    savedOwner.walletAddress
                                      .toLowerCase()
                                      .trim() ===
                                    owner.owner_address.toLowerCase().trim()
                                ) ? (
                                  <>
                                    <strong>
                                      {
                                        savedOwners.find(
                                          (savedOwner) =>
                                            savedOwner.walletAddress
                                              .toLowerCase()
                                              .trim() ===
                                            owner.owner_address
                                              .toLowerCase()
                                              .trim()
                                        ).nickname
                                      }
                                    </strong>{" "}
                                    ({owner.owner_address})
                                  </>
                                ) : (
                                  owner.owner_address
                                )}
                              </Typography>

                              {savedOwners.find(
                                (savedOwner) =>
                                  savedOwner.walletAddress
                                    .toLowerCase()
                                    .trim() ===
                                  owner.owner_address.toLowerCase().trim()
                              ) ? (
                                <Typography
                                  noWrap
                                  style={{
                                    fontSize: "12px",
                                    fontStyle: "italic",
                                  }}
                                >
                                  {
                                    savedOwners.find(
                                      (savedOwner) =>
                                        savedOwner.walletAddress
                                          .toLowerCase()
                                          .trim() ===
                                        owner.owner_address.toLowerCase().trim()
                                    ).notes
                                  }
                                </Typography>
                              ) : null}
                            </Link>
                            <IconButton
                              onClick={() => {
                                setSelectedOwnerAddress(owner.owner_address);
                                setIsModalOpen(true);
                              }}
                            >
                              <FaPencilAlt size={15} />
                            </IconButton>
                          </Box>
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
          ))
        : "Loading..."}
      <OwnerModal
        isModalOpen={isModalOpen}
        onClose={handleClose}
        walletAddress={selectedOwnerAddress}
        selectedOwnerNickname={selectedOwnerNickname}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
        resetModal={resetModal}
        setIsFetchRequired={setIsFetchRequired}
      />
    </Container>
  );
}
