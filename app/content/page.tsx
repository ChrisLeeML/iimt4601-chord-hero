"use client";
import * as React from "react";

import {
  Box,
  Card,
  CardActionArea,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Content() {
  const content = [
    {
      id: "content-SAMPLE-ID",
      title: "Exclusive Fan Video of Chord Hero​",
      threshold: 1,
      requiredNFT: "0x71623469hlkqfds12edsad",
      type: "VIDEO​",
    },
    {
      id: "content-SAMPLE-ID",
      title: "PDF Instruction on how to assemble the ukulele kit.​",
      threshold: 1,
      requiredNFT: "0x71623469hlkqfds12edsad",
      type: "PDF",
    },
    {
      id: "content-SAMPLE-ID",
      title: "Discount coupon to Spotify​",
      threshold: 2,
      requiredNFT: "0x71623469hlkqfds12edsad",
      type: "TEXT",
    },
    {
      id: "content-SAMPLE-ID",
      title: "Discount coupon to ChordVentures",
      threshold: 2,
      requiredNFT: "0x71623469hlkqfds12edsad",
      type: "TEXT",
    },
    {
      id: "content-SAMPLE-ID",
      title: "Video of a cat playing Chord Hero ukulele​",
      threshold: 2,
      requiredNFT: "0x71623469hlkqfds12edsad",
      type: "VIDEO​",
    },
    {
      id: "content-SAMPLE-ID",
      title: "Thank you letter from Anthony Chau, Co-Founder & CEO​",
      threshold: 3,
      requiredNFT: "0x71623469hlkqfds12edsad",
      type: "TEXT",
    },
  ];

  const [holdCount, setHoldCount] = React.useState<number>(1);
  const maxThreshold = Math.max(
    ...content.map((contentItem) => contentItem.threshold)
  );
  return (
    <Container maxWidth="lg">
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
        {[...Array(maxThreshold)].map((_, rowIndex) => (
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
                Get more Chord Hero NFTs to unlock the exclusive content below!
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
                .filter((contentItem) => contentItem.threshold === rowIndex + 1)
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
                            >{`content ID: ${contentItem.id}`}</Typography>

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
        ))}
      </Box>
    </Container>
  );
}
