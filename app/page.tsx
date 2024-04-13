"use client";
import * as React from "react";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ChordHeroBlackLogo from "../src/assets/Chord Hero Black Logo.png";

const pages = [
  {
    title: "Analytics",
    href: "analytics",
    description: "Check analytics of the Chord Hero NFTs.",
  },
  {
    title: "Exclusive Content",
    href: "content",
    description: "Access exclusive content only for Chord Hero NFT holders!",
  },
  {
    title: "Ukuleles",
    href: "ukulele",
    description: "Check the list of ukuleles minted by Chord Hero.",
  },
  {
    title: "Creators",
    href: "creator",
    description: "Manage the creator profiles.",
  },
];

function Home() {
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={ChordHeroBlackLogo}
          width={300}
          height={300}
          alt="Chord Hero Management System"
        />
        <Typography
          style={{ fontSize: "14px", fontStyle: "italic", color: "gray" }}
        >
          Developed by Group 5 - IIMT4601
        </Typography>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        style={{
          width: "100%",
          padding: "50px 0px",
        }}
      >
        <Grid
          item
          justifyContent="center"
          xs={12}
          sm={4}
          style={{ marginBottom: 10 }}
        >
          <Box
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              style={{
                width: "100%",
                maxWidth: "200px",
                color: "white",
                background: "black",
                padding: "15px 0px",
              }}
              href="https://chordhero.com/en-hk"
            >
              Website
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          justifyContent="center"
          xs={12}
          sm={4}
          style={{ marginBottom: 10 }}
        >
          <Box
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              style={{
                width: "100%",
                maxWidth: "200px",
                color: "white",
                background: "black",
                padding: "15px 0px",
              }}
              href="https://www.instagram.com/chordheromusic/"
            >
              Social Media
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          justifyContent="center"
          xs={12}
          sm={4}
          style={{ marginBottom: 10 }}
        >
          <Box
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              style={{
                width: "100%",
                maxWidth: "200px",
                color: "white",
                background: "black",
                padding: "15px 0px",
              }}
              href="https://opensea.io/"
            >
              OpenSea
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          width: "100%",
          paddingTop: 20,
        }}
        spacing={2}
      >
        {pages.map((page) => (
          <Grid item key={page.title} xs={6} sm={4} md={3}>
            <Card
              style={{
                borderRadius: 10,
                height: 150,
                width: "100%",
              }}
              sx={{ boxShadow: 2 }}
            >
              <CardActionArea
                href={page.href}
                style={{ width: "100%", height: "100%", padding: 20 }}
              >
                <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {page.title}
                </Typography>
                <Typography style={{ fontSize: "14px" }}>
                  {page.description}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default Home;
