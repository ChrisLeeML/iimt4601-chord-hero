"use client";
import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CreateCreator } from "../api/ukuleleService";
import { useRouter } from "next/navigation";

const CreateUkuleleForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [tokenID, setTokenID] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");
  const [chain, setChain] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // const HandleSubmit = (e: any) => {
  //   e.preventDefault();
  //   if (name.length > 0 && schoolID.length > 0 && creatorUkuleleID.length > 0) {
  //     setLoading(true);
  //     setMessage("");
  //     console.log("Creating a Creator with the following data: ");
  //     console.log(name, schoolID, creatorUkuleleID);
  //     const formInput = {
  //       name: name as string,
  //       schoolID: schoolID as string,
  //       creatorUkuleleID: creatorUkuleleID as string,
  //     };
  //     SubmitForm(formInput);
  //   } else {
  //     setMessage("All fields are required.");
  //   }
  // };

  // const SubmitForm = async (formInput: {
  //   name: string;
  //   schoolID: string;
  //   creatorUkuleleID: string;
  // }) => {
  //   try {
  //     await CreateCreator(formInput);
  //     router.push("/creator");
  //   } catch (error: any) {
  //     console.error("Error at SubmitForm:", error);
  //     setMessage(error.message);
  //     setLoading(false);
  //   }
  // };

  return (
    <form
      style={{
        width: "100%",
        borderWidth: 10,
        marginTop: 30,
        minHeight: "50vh",
      }}
      // onSubmit={HandleSubmit}
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
