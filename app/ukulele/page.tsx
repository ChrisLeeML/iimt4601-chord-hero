"use client";
import * as React from "react";

import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ChordHeroMakerSet from "../../src/assets/Chord Hero Ukulele Set.jpg";

export default function Ukuleles() {
  const ukuleles = [
    {
      id: "UKULELE-SAMPLE-ID",
      studentID: "STUDENT-SAMPLE-ID",
      image: ChordHeroMakerSet,
      title: "Chord Hero Ukulele Maker Set",
      assignedTo: "Yoon Minseo​",
    },
    {
      id: "UKULELE-SAMPLE-ID",
      studentID: "STUDENT-SAMPLE-ID",
      image: ChordHeroMakerSet,
      title: "Chord Hero Ukulele Maker Set",
      assignedTo: "Lee Christopher",
    },
    {
      id: "UKULELE-SAMPLE-ID",
      studentID: "STUDENT-SAMPLE-ID",
      image: ChordHeroMakerSet,
      title: "Chord Hero Ukulele Maker Set",
      assignedTo: "Lee Jihoo​",
    },
    {
      id: "UKULELE-SAMPLE-ID",
      studentID: "STUDENT-SAMPLE-ID",
      image: ChordHeroMakerSet,
      title: "Chord Hero Ukulele Maker Set",
      assignedTo: "Yoo Sunwoo​",
    },
    {
      id: "UKULELE-SAMPLE-ID",
      studentID: "STUDENT-SAMPLE-ID",
      image: ChordHeroMakerSet,
      title: "Chord Hero Ukulele Maker Set",
      assignedTo: "Koh Wooah​",
    },
    {
      id: "UKULELE-SAMPLE-ID",
      studentID: "STUDENT-SAMPLE-ID",
      image: ChordHeroMakerSet,
      title: "Chord Hero Ukulele Maker Set",
      assignedTo: "Choi Dayeun​",
    },
  ];
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
          Ukulele Management
        </Typography>
      </Box>

      <Box
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 10,
          paddingTop: 20,
        }}
      >
        {ukuleles.map((ukulele) => (
          <Link key={ukulele.id} href={`ukuleles/${ukulele.id}`}>
            <Box
              style={{
                padding: 20,
                borderRadius: 10,
                height: "100%",
              }}
              sx={{ boxShadow: 2 }}
            >
              <Image
                src={ukulele.image}
                alt={ukulele.title}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography style={{ fontSize: "8px", color: "gray" }}>
                {ukulele.id}
              </Typography>
              <Typography style={{ fontWeight: "bold", fontSize: "14px" }}>
                {ukulele.title}
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                Assigned to: {ukulele.assignedTo}
              </Typography>
              <Typography style={{ fontSize: "10px", fontStyle: "italic" }}>
                Student ID: {ukulele.studentID}
              </Typography>
              <Button style={{ background: "red", marginTop: 10 }}>
                <Typography style={{ color: "white", fontSize: "10px" }}>
                  Report Damage
                </Typography>
              </Button>
            </Box>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
