"use client";
import * as React from "react";

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ChordHeroMakerSet from "../../src/assets/Chord Hero Ukulele Set.jpg";

export default function Shop() {
  const products = [
    {
      id: "PRODUCT-SAMPLE-ID",
      image: ChordHeroMakerSet,
      title: "Chord Hero Ukulele Maker Set",
      price: "HK$530",
      description:
        "The Maker Ukulele Set is the perfect maker education product of the year!",
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
          Shop
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
        {products.map((product) => (
          <Link key={product.id} href={`shop/${product.id}`}>
            <Box
              style={{
                padding: 20,
                borderRadius: 10,
                height: "100%",
              }}
              sx={{ boxShadow: 2 }}
            >
              <Image
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography style={{ fontSize: "8px", color: "gray" }}>
                {product.id}
              </Typography>
              <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                {product.title}
              </Typography>
              <Typography style={{ fontSize: "14px", fontStyle: "italic" }}>
                {product.price}
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                {product.description}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
