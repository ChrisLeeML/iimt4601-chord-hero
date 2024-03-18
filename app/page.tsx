"use client";
import * as React from "react";

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ChordHeroBlackLogo from "../src/assets/Chord Hero Black Logo.png";

const pages = [
  {
    title: "Shop",
    href: "shop",
    description: "Place orders for ukuleles with ease.",
  },
  {
    title: "Order Status",
    href: "orders",
    description: "Track the progress of your ukulele delivery.",
  },
  {
    title: "Ukulele Management",
    href: "ukuleles",
    description: "Manage purchased ukuleles and report any damages.",
  },
  {
    title: "Students",
    href: "students",
    description:
      "Effortlessly assign ukuleles to students and manage profiles.",
  },
  {
    title: "Profile",
    href: "profile",
    description: "Manage your personal profile and account settings.",
  },
];

function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
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

      <Box
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
          paddingTop: 20,
        }}
      >
        {pages.map((page) => (
          <Link key={page.title} href={page.href}>
            <Box
              style={{
                padding: 20,
                borderRadius: 10,
                height: "100%",
              }}
              sx={{ boxShadow: 2 }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                {page.title}
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                {page.description}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
export default Home;
