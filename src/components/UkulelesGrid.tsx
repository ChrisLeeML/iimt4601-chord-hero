"use client";
import React, { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { Ukulele } from "../API";
import { ListUkuleles } from "../api/ukuleleService";
import Link from "next/link";

const UkulelesGrid = () => {
  const [ukuleles, setCreators] = useState<Ukulele[]>([]);

  const FetchCreators = async () => {
    try {
      const ukulelesRes = await ListUkuleles();
      setCreators(ukulelesRes);
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
        {ukuleles?.map((ukulele: Ukulele) => (
            <Grid key={ukulele.id} item xs={6} sm={4} md={3}>
            <Link href={`ukulele/${ukulele.id}`}>
                <Box
                style={{
                    padding: 20,
                    borderRadius: 10,
                    height: "100%",
                }}
                sx={{ boxShadow: 2 }}
                >
                {/* <Image
                src={ukulele.image}
                alt={ukulele.title}
                style={{ width: "100%", height: "auto" }}
                /> */}
                <Typography style={{ fontSize: "8px", color: "gray" }}>
                    {ukulele.id}
                </Typography>
                <Typography style={{ fontWeight: "bold", fontSize: "14px" }}>
                    {ukulele.title}
                </Typography>
                <Typography style={{ fontSize: "10px", fontStyle: "italic" }}>
                    {/*Creator:*/}
                </Typography>
                <Typography style={{ fontSize: "10px", fontStyle: "italic" }}>
                    {/*NFT Owned by:*/}
                </Typography>
                </Box>
            </Link>
            </Grid>
        ))}
        </Grid>
  );
};

export default UkulelesGrid;
