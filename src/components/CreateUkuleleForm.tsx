"use client";
import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CreateUkulele } from "../api/ukuleleService";
import { useRouter } from "next/navigation";

const CreateUkuleleForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [tokenID, setTokenID] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");
  const [chain, setChain] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (title.length > 0 && tokenID.length > 0 && contractAddress.length > 0) {
      setLoading(true);
      setMessage("");
      console.log("Creating a Ukulele with the following data: ");
      console.log(title, tokenID, contractAddress);
      const formInput = {
        title: title as string,
        tokenID: tokenID as string,
        contractAddress: contractAddress as string,
        chain: chain as string,
      };
      SubmitForm(formInput);
    } else {
      setMessage("All fields are required.");
    }
  };

  const SubmitForm = async (formInput: {
    title: string;
    tokenID: string;
    contractAddress: string;
    chain: string;
  }) => {
    try {
      await CreateUkulele(formInput);
      router.push("/ukulele");
    } catch (error: any) {
      console.error("Error at SubmitForm:", error);
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
          Create a Ukulele
        </FormLabel>
        <TextField
          label="Ukulele Title"
          style={{ marginBottom: 20, width: 400 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Token ID"
          style={{ marginBottom: 20, width: 400 }}
          value={tokenID}
          onChange={(e) => setTokenID(e.target.value)}
        />
        <TextField
          label="Contract Address"
          style={{ marginBottom: 20, width: 400 }}
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
        />{" "}
        <TextField
          label="Chain"
          style={{ marginBottom: 20, width: 400 }}
          value={chain}
          onChange={(e) => setChain(e.target.value)}
        />
        <Button
          style={{ background: loading ? "gray" : "black", marginBottom: 50 }}
          size="large"
          variant="contained"
          type="submit"
          disabled={loading}
        >
          Submit
        </Button>
        <Typography style={{ marginBottom: 100, color: "red" }}>
          {message}
        </Typography>
      </FormControl>
    </form>
  );
};

export default CreateUkuleleForm;
