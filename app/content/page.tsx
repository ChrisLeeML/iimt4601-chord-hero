import React from "react";
import { cookies } from "next/headers";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import {
  Box,
  Card,
  CardActionArea,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Content } from "@/src/API";
import { listContents } from "@/src/graphql/queries";
import config from "../../src/amplifyconfiguration.json";

export const cookieBasedClient = generateServerClientUsingCookies({
  config: config,
  cookies,
});

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
  const holdCount = 1;
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
                      (contentItem) => contentItem.threshold === rowIndex + 1
                    )
                    .map((contentItem) => (
                      <Grid
                        item
                        xs={3}
                        key={contentItem.id}
                        style={{ width: "100%", height: "200px" }}
                      >
                        <Card
                          style={{
                            width: "100%",
                            height: "100%",
                            background:
                              rowIndex + 1 > holdCount ? "lightGray" : "white",
                          }}
                        >
                          <CardActionArea
                            style={{ width: "100%", height: "100%" }}
                            href={`/content/${contentItem.id}`}
                            disabled={rowIndex + 1 > holdCount}
                          >
                            <Box
                              style={{
                                padding: 20,
                                borderRadius: 10,
                                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              <Box
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Typography
                                  style={{ fontSize: "8px", color: "gray" }}
                                >{`ID: ${contentItem.id}`}</Typography>

                                <Box
                                  style={{
                                    padding: "5px 10px",
                                    position: "relative",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <Box
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      width: "100%",
                                      height: "100%",
                                      background: "gray",
                                      zIndex: 1,
                                      opacity: 0.1,
                                      borderRadius: 10,
                                    }}
                                  />
                                  <Typography
                                    style={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      color:
                                        contentItem.type === "VIDEO"
                                          ? "#FFD700"
                                          : contentItem.type === "TEXT"
                                          ? "blue"
                                          : "green",
                                      zIndex: 2,
                                    }}
                                  >
                                    {contentItem.type}
                                  </Typography>
                                </Box>
                              </Box>

                              <Typography
                                style={{ fontWeight: "600", fontSize: "14px" }}
                              >
                                {contentItem.title}
                              </Typography>
                            </Box>
                          </CardActionArea>
                        </Card>
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
