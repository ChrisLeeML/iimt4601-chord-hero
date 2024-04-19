"use client";
import React, { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { Creator } from "../API";
import { ListCreators } from "../api/ukuleleService";
import Link from "next/link";

const CreatorsGrid = () => {
  const [creators, setCreators] = useState<Creator[]>([]);

  const FetchCreators = async () => {
    try {
      const creatorsRes = await ListCreators();
      setCreators(creatorsRes);
    } catch (error) {
      console.error("Error fetching creators: ", error);
    }
  };
  useEffect(() => {
    FetchCreators();
  }, []);

  return (
    <Grid
      container
      style={{
        width: "100%",
        paddingTop: 20,
      }}
      spacing={2}
    >
      {creators && creators.length > 0
        ? creators?.map((creator: any) => (
            <Grid key={creator?.id} item xs={6} sm={4} md={3} lg={2}>
              <Link href={`creator/${creator?.id}`}>
                <Box
                  style={{
                    padding: 20,
                    borderRadius: 10,
                    height: "100%",
                  }}
                  sx={{ boxShadow: 2 }}
                >
                  {/* <Image
                      src={require("../../src/assets/blank-profile.jpeg")}
                      alt={creator?.name as string}
                      style={{ width: "100%", height: "auto" }}
                    /> */}
                  <Typography style={{ fontSize: "8px", color: "gray" }}>
                    {creator?.id}
                  </Typography>
                  <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {creator?.name}
                  </Typography>
                  <Typography style={{ fontSize: "12px", fontStyle: "italic" }}>
                    {creator?.school?.title}
                  </Typography>
                  <Typography style={{ fontSize: "12px", fontStyle: "italic" }}>
                    Ukulele: {creator?.ukulele?.title}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))
        : "Loading..."}
    </Grid>
  );
};

export default CreatorsGrid;
