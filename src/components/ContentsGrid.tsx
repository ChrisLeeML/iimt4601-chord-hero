"use client";
import React, { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { Content } from "../API";
import { ListContent } from "../api/ukuleleService";
import Link from "next/link";

const UkulelesGrid = () => {
  const [content, setContents] = useState<Content[]>([]);

  const FetchCreators = async () => {
    try {
      const contentRes = await ListContent();
      setContents(contentRes);
    } catch (error) {
      console.error("Error fetching creators: ", error);
    }
  };
  useEffect(() => {
    FetchCreators();
  }, []);

  return (
    <Grid></Grid>
  );
};

export default UkulelesGrid;
