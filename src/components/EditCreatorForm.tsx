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
import { UpdateCreator } from "../api/ukuleleService";
import { useRouter } from "next/navigation";

const EditCreatorForm = ({ creatorID }: { creatorID: string }) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [schoolID, setSchoolID] = useState<string>("");
  const [creatorUkuleleID, setCreatorUkuleleID] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // [TO DO] Implement fetching.
  // [TO DO] Implement a delete button.
  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (creatorID.length > 0 && name.length > 0 && schoolID.length > 0 && creatorUkuleleID.length > 0) {
      setLoading(true);
      setMessage("");
      console.log("Creating a Creator with the following data: ");
      console.log(name, schoolID, creatorUkuleleID);
      const formInput = {
        id: creatorID as string,
        name: name as string,
        schoolID: schoolID as string,
        creatorUkuleleID: creatorUkuleleID as string,
      };
      SubmitForm(formInput);
    } else {
      setMessage("All fields are required.");
    }
  };

  const SubmitForm = async (formInput: {
    id: string;
    name: string;
    schoolID: string;
    creatorUkuleleID: string;
  }) => {
    try {
      // [TO DO] Implement an editing.
      await UpdateCreator(formInput);
      router.push("/creator");
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
          {creatorID}
          Create a Creator
        </FormLabel>
        <TextField
          label="Name"
          style={{ marginBottom: 20, width: 400 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Ukulele ID"
          style={{ marginBottom: 20, width: 400 }}
          value={schoolID}
          onChange={(e) => setSchoolID(e.target.value)}
        />
        <TextField
          label="School ID"
          style={{ marginBottom: 20, width: 400 }}
          value={creatorUkuleleID}
          onChange={(e) => setCreatorUkuleleID(e.target.value)}
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
            onClick={() => {
              console.log("Delete");
            }}
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

export default EditCreatorForm;
