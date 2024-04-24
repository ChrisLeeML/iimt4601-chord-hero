"use client";
import React, { useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import { Ukulele } from "../API";
import { ListUkuleles } from "../api/ukuleleService";
import Link from "next/link";

const UkulelesGrid = () => {
  const [ukuleles, setUkuleles] = useState<Ukulele[]>([]);

  const FetchUkuleles = async () => {
    try {
      const ukulelesRes = await ListUkuleles();
      console.log("ukulelesRes: ", ukulelesRes);
      setUkuleles(ukulelesRes);
    } catch (error) {
      console.error("Error fetching creators: ", error);
    }
  };
  useEffect(() => {
    FetchUkuleles();
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
      {ukuleles.length > 0
        ? ukuleles?.map((ukulele: Ukulele) => (
            <Grid
              key={ukulele.id}
              item
              xs={6}
              sm={4}
              md={3}
              style={{ minHeight: "150px" }}
            >
              <Link href={`ukulele/${ukulele.id}`}>
                <Box
                  style={{
                    padding: 20,
                    borderRadius: 10,
                    height: "100%",
                  }}
                  sx={{ boxShadow: 2 }}
                >
                  <Typography style={{ fontSize: "8px", color: "gray" }}>
                    {ukulele.id}
                  </Typography>
                  <Typography style={{ fontWeight: "bold", fontSize: "14px" }}>
                    {ukulele.title}
                  </Typography>
                  <Typography style={{ fontSize: "10px", fontStyle: "italic" }}>
                    {ukulele.chain}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))
        : "Loading..."}
    </Grid>
  );
};

export default UkulelesGrid;
