"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { Content } from "../API";
import { ListContent } from "../api/ukuleleService";
import ContentCard from "@/src/components/ContentCard";

const ContentsGrid = () => {
  const [contents, setContents] = useState<Content[]>([]);

  const FetchContents = async () => {
    try {
      const contentRes = await ListContent();
      setContents(contentRes);
    } catch (error) {
      console.error("Error fetching contents: ", error);
    }
  };
  useEffect(() => {
    FetchContents();
  }, []);

  let maxThreshold = 0;
  for (const contentItem of contents) {
    if (contentItem.threshold && contentItem.threshold > maxThreshold) {
      maxThreshold = contentItem.threshold;
    }
  }
  const holdCount = 2;

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingTop: 20,
      }}
    >
      {contents && maxThreshold
        ? [...Array(maxThreshold)].map((_, rowIndex) => (
            <Box
              key={`row-${rowIndex}`}
              style={{
                marginBottom: 20,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {rowIndex == holdCount ? (
                <Divider
                  style={{
                    height: 2,
                    background: "gray",
                    width: "100%",
                    marginBottom: 50,
                  }}
                >
                  Get more Chord Hero NFTs to unlock the exclusive content
                  below!
                </Divider>
              ) : null}
              <Typography
                style={{
                  fontWeight: "600",
                  color: rowIndex + 1 > holdCount ? "gray" : "black",
                }}
              >
                With {rowIndex + 1} NFT
              </Typography>
              <Grid
                container
                style={{
                  marginBottom: 10,
                  width: "100%",
                }}
                spacing={2}
              >
                {contents
                  .filter(
                    (contentItem: Content) =>
                      contentItem.threshold === rowIndex + 1
                  )
                  .map((contentItem: Content) => (
                    <Grid
                      item
                      xs={3}
                      key={contentItem.id}
                      style={{ width: "100%", height: "200px" }}
                    >
                      <ContentCard
                        contentItem={contentItem}
                        disabled={rowIndex + 1 > holdCount}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          ))
        : "Loading..."}
    </Box>
  );
};

export default ContentsGrid;
