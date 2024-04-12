"use client";
import * as React from "react";

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import BlankProfileImg from "../../src/assets/blank-profile.jpeg";

export default function Students() {
  const students = [
    {
      id: "STUDENT-SAMPLE-ID",
      image: BlankProfileImg,
      name: "Yoon Minseo​",
      studentID: "303XXXXXXX",
      ukuleleID: "UKULELE-SAMPLE-ID",
    },
    {
      id: "STUDENT-SAMPLE-ID",
      image: BlankProfileImg,
      name: "Lee Christopher",
      studentID: "303XXXXXXX",
      ukuleleID: "UKULELE-SAMPLE-ID",
    },
    {
      id: "STUDENT-SAMPLE-ID",
      image: BlankProfileImg,
      name: "Lee Jihoo​",
      studentID: "303XXXXXXX",
      ukuleleID: "UKULELE-SAMPLE-ID",
    },
    {
      id: "STUDENT-SAMPLE-ID",
      image: BlankProfileImg,
      name: "Yoo Sunwoo​",
      studentID: "303XXXXXXX",
      ukuleleID: "UKULELE-SAMPLE-ID",
    },
    {
      id: "STUDENT-SAMPLE-ID",
      image: BlankProfileImg,
      name: "Koh Wooah​",
      studentID: "303XXXXXXX",
      ukuleleID: "UKULELE-SAMPLE-ID",
    },
    {
      id: "STUDENT-SAMPLE-ID",
      image: BlankProfileImg,
      name: "Choi Dayeun​",
      studentID: "303XXXXXXX",
      ukuleleID: "UKULELE-SAMPLE-ID",
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
          Students
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
        {students.map((student) => (
          <Link key={student.id} href={`students/${student.id}`}>
            <Box
              style={{
                padding: 20,
                borderRadius: 10,
                height: "100%",
              }}
              sx={{ boxShadow: 2 }}
            >
              <Image
                src={student.image}
                alt={student.name}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography style={{ fontSize: "8px", color: "gray" }}>
                {student.id}
              </Typography>
              <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                {student.name}
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                {student.studentID}
              </Typography>
              <Typography style={{ fontSize: "14px", fontStyle: "italic" }}>
                Assigned Ukulele: {student.ukuleleID}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
