"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  UpdateContent,
  DeleteContent,
  GetContentByID,
} from "../api/ukuleleService";
import { useRouter } from "next/navigation";
import { ContentType } from "../API";

const EditContentForm = ({ contentID }: { contentID: string }) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [threshold, setThreshold] = useState<number>(0);
  const [type, setType] = useState<string>(""); // Video or Text
  const [videoLink, setVideoLink] = useState<string>(""); // If Video
  const [textContent, setTextContent] = useState<string>(""); // If Text

  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const FetchContent = async () => {
    try {
      const contentData = await GetContentByID(contentID);
      if (contentData) {
        setTitle(contentData.title as string);
        setThreshold(contentData.threshold as number);
        setType(contentData.type as string);
        setVideoLink(contentData.videoLink as string);
        setTextContent(contentData.textContent as string);
        setLoading(false);
      }
    } catch (error: any) {
      console.error("Error at FetchUkulele: ", error);
      setMessage(error.message);
      setLoading(false);
    }
  };

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (
      contentID.length > 0 &&
      title.length > 0 &&
      threshold >= 0 &&
      type.length > 0 &&
      videoLink.length > 0 &&
      textContent.length > 0
    ) {
      setLoading(true);
      setMessage("");
      console.log("Edit Content with the following data: ");
      console.log(contentID, title, threshold, type, videoLink, textContent);
      const formInput = {
        id: contentID as string,
        title: title as string,
        threshold: threshold as number,
        type: type as ContentType,
        videoLink: videoLink as string,
        textContent: textContent as string,
      };
      SubmitForm(formInput);
    } else {
      setMessage("All fields are required.");
    }
  };

  const HandleDelete = () => {
    if (contentID.length > 0) {
      setLoading(true);
      setMessage("");
      console.log("Delete Content with the following data: ");
      console.log(contentID);
      const formInput = {
        id: contentID as string,
      };
      DeleteForm(formInput);
    } else {
      setMessage("All fields are required.");
    }
  };

  const SubmitForm = async (formInput: {
    id: string;
    title: string;
    threshold: number;
    type: ContentType;
    videoLink: string;
    textContent: string;
  }) => {
    try {
      await UpdateContent(formInput);
      router.push("/content");
    } catch (error: any) {
      console.error("Error at SubmitForm:", error);
      setMessage(error.message);
      setLoading(false);
    }
  };

  const DeleteForm = async (formInput: { id: string }) => {
    try {
      await DeleteContent(formInput);
      router.push("/content");
    } catch (error: any) {
      console.error("Error at DeleteForm:", error);
      setMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchContent();
  }, []);

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
        <FormLabel style={{ fontSize: 16, marginBottom: 0 }}>
          Edit an Exclusive Content
        </FormLabel>
        <TextField
          disabled={loading}
          label="Content Title"
          style={{ marginBottom: 20, width: 400 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          disabled={loading}
          label="How many NFTs should the user own?"
          style={{ marginBottom: 20, width: 400 }}
          value={threshold}
          onChange={(e) => setThreshold(e.target.value as unknown as number)}
        />
        <Typography>Choose the content type </Typography>
        <Select
          disabled={loading}
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

export default EditContentForm;
