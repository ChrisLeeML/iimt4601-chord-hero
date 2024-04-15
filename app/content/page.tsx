import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { Content } from "@/src/API";
import { listContents } from "@/src/graphql/queries";
import { cookieBasedClient } from "../layout";
import ContentCard from "@/src/components/ContentCard";

const ListContent = async () => {
  try {
    const { data }: any = await cookieBasedClient.graphql({
      query: listContents,
    });
    return data.listContents.items;
  } catch (error) {
    console.error("Error at ListContent: ", error);
  }
};

export default async function ContentList() {
  const content = await ListContent();
  const maxThreshold = Math.max(
    ...content.map((contentItem: Content) => contentItem.threshold)
  );
  const holdCount = 2;

  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <Box
        style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "gray",
            textAlign: "left",
            width: "100%",
          }}
        >
          Exclusive Content
        </Typography>
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingTop: 20,
        }}
      >
        {content && maxThreshold
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
                  {content
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
          : ""}
      </Box>
    </Container>
  );
}
