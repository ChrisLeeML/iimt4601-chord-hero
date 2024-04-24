"use client";
import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CreateContent } from "../api/ukuleleService";
import { useRouter } from "next/navigation";
import { ContentType } from "../API";

const CreateContentForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [threshold, setThreshold] = useState<string>("");
  const [type, setType] = useState<string>(""); // Video or Text
  const [videoLink, setVideoLink] = useState<string>(""); // If Video
  const [textContent, setTextContent] = useState<string>(""); // If Text

  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // [TO DO]

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (title.length > 0 && threshold.length >=0 && type.length > 0) {
      if (type === "Text" && textContent.length === 0) {
        setMessage("Text content is required for the 'Text' type.");
      } else if (type === "Video" && videoLink.length === 0) {
        setMessage("Video link is required for the 'Video' type.");
      } else {
        setLoading(true);
        setMessage("");
        console.log("Creating a Content with the following data: ");
        console.log(title, threshold, type, videoLink, textContent);
        const formInput = {
          title: title as string,
          threshold: threshold as string,
          type: type as ContentType,
          videoLink: videoLink as string,
          textContent: textContent as string,
        };
        SubmitForm(formInput);
      }
    } else {
      setMessage("All fields are required.");
    }
  };

  const SubmitForm = async (formInput: {
    title: string;
    threshold: string;
    type: ContentType;
    videoLink: string;
    textContent: string;
  }) => {
    try {
      await CreateContent(formInput);
      router.push("/content");
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
          Create a Exclusive Content
        </FormLabel>
        <TextField
          label="Content Title"
          style={{ marginBottom: 20, width: 400 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="How many NFTs should the user own?"
          style={{ marginBottom: 20, width: 400 }}
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
        />
        <Typography>Choose the content type </Typography>
        <Select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setVideoLink("");
            setTextContent("");
          }}
          style={{ marginBottom: 20, width: 400 }}
        >
          <MenuItem value="TEXT">Text</MenuItem>
          <MenuItem value="VIDEO">Video</MenuItem>
        </Select>
        {type && type == "VIDEO" ? (
          <TextField
            label="Link to the video"
            style={{ marginBottom: 20, width: 400 }}
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
        ) : type == "TEXT" ? (
          <TextField
            label="Text Content"
            style={{ marginBottom: 20, width: 400 }}
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
          />
        ) : null}

        <Button
          style={{
            background:
              loading || !(videoLink.length > 0 || textContent.length > 0)
                ? "gray"
                : "black",
            marginBottom: 50,
          }}
          size="large"
          variant="contained"
          type="submit"
          disabled={
            loading || !(videoLink.length > 0 || textContent.length > 0)
          }
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

export default CreateContentForm;
