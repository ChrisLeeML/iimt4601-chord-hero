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
import { useRouter } from "next/navigation";

const EditContentForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [threshold, setThreshold] = useState<string>("");
  const [type, setType] = useState<string>(""); // Video or Text
  const [videoLink, setVideoLink] = useState<string>(""); // If Video
  const [textContent, setTextContent] = useState<string>(""); // If Text

  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // [TO DO] Fetch the content and edit an existing data entry.
  // [TO DO] Implement a delete button.

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
          Create a Exclusive Content
        </FormLabel>
        <TextField
          label="title"
          style={{ marginBottom: 20, width: 400 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="threshold"
          style={{ marginBottom: 20, width: 400 }}
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
        />
        <TextField
          label="type"
          style={{ marginBottom: 20, width: 400 }}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          label="videoLink"
          style={{ marginBottom: 20, width: 400 }}
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <TextField
          label="textContent"
          style={{ marginBottom: 20, width: 400 }}
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
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

export default EditContentForm;
