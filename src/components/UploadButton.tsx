"use client";
import { Button } from "@mui/material";
import React from "react";

const UploadButton = ({ handleUploadJSON }: { handleUploadJSON: any }) => {
  return (
    <Button
      onClick={async () => {
        await handleUploadJSON();
      }}
    >
      Upload Ukuleles
    </Button>
  );
};

export default UploadButton;
