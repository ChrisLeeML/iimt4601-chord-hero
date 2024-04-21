"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { UpdateUkulele, DeleteUkulele } from "../api/ukuleleService";
import { useRouter } from "next/navigation";

const EditUkuleleForm = ({ ukuleleID }: { ukuleleID: string }) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [tokenID, setTokenID] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");
  const [chain, setChain] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // [TO DO] Implement a ukulele detail fetching and update the states based on the response.
  // [TO DO] Implement a delete button.

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (title.length > 0 && tokenID.length > 0 && contractAddress.length > 0 && chain.length) {
      setLoading(true);
      setMessage("");
      console.log("Updating a Ukullee with the following data: ");
      console.log(title, tokenID, contractAddress, chain);
      const formInput = {
        id: ukuleleID as string,
        title: title as string,
        tokenID: tokenID as string,
        contractAddress: contractAddress as string,
        chain: chain as string
      };
      SubmitForm(formInput);
    } else {
      setMessage("All fields are required.");
    }
  };

  const HandleDelete = () => {
    if (ukuleleID.length > 0) {
      setLoading(true);
      setMessage("");
      console.log("Delete Ukulele with the following data: ");
      console.log(ukuleleID);
      const formInput = {
        id: ukuleleID as string,
      };
      DeleteForm(formInput);
    } else {
      setMessage("All fields are required.");
    }
  };

  const SubmitForm = async (formInput: {
    id: string;
    title: string;
    tokenID: string;
    contractAddress: string;
    chain: string;
  }) => {
    try {
      await UpdateUkulele(formInput);
      router.push("/creator");
    } catch (error: any) {
      console.error("Error at SubmitForm:", error);
      setMessage(error.message);
      setLoading(false);
    }
  };

  const DeleteForm = async (formInput: {
    id: string;
  }) => {
    try {
      await DeleteUkulele(formInput);
      router.push("/ukulele");
    } catch (error: any) {
      console.error("Error at Deleteform:", error);
      setMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <form
      style={{
        width: "100%",
        borderWidth: 10,
        marginTop: 30,
        minHeight: "50vh",
      }}
      onSubmit={HandleSubmit}
    >
      <FormControl
        style={{
          width: "100%",
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <FormLabel style={{ fontSize: 24, marginBottom: 10 }}>
          Edit a Ukulele
        </FormLabel>
        <TextField
          label="title"
          style={{ marginBottom: 20, width: 400 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="tokenID"
          style={{ marginBottom: 20, width: 400 }}
          value={tokenID}
          onChange={(e) => setTokenID(e.target.value)}
        />
        <TextField
          label="contractAddress"
          style={{ marginBottom: 20, width: 400 }}
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
        />{" "}
        <TextField
          label="chain"
          style={{ marginBottom: 20, width: 400 }}
          value={chain}
          onChange={(e) => setChain(e.target.value)}
        />
        <Box
          style={{
            display: "flex",
            width: 400,
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{ background: loading ? "gray" : "black", marginBottom: 50 }}
            size="large"
            variant="contained"
            type="submit"
            disabled={loading}
          >
            Submit
          </Button>
          <Button
            style={{ background: loading ? "gray" : "red", marginBottom: 50 }}
            size="large"
            variant="contained"
            type="button"
            disabled={loading}
            onClick={HandleDelete}
          >
            Delete
          </Button>
        </Box>
        <Typography style={{ marginBottom: 100, color: "red" }}>
          {message}
        </Typography>
      </FormControl>
    </form>
  );
};

export default EditUkuleleForm;
