import * as React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import { listUkuleles } from "@/src/graphql/queries";
import { Ukulele } from "@/src/API";
import { cookieBasedClient } from "../layout";

const ListUkuleles = async () => {
  try {
    const { data }: any = await cookieBasedClient.graphql({
      query: listUkuleles,
    });

    const creators = data.listUkuleles.items;

    return creators;
  } catch (error) {
    console.error("Error at ListUkuleles: ", error);
  }
};

export default async function Ukuleles() {
  const ukuleles = await ListUkuleles();
  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      <Box
        style={{
          marginTop: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
        <Button
          variant="contained"
          style={{ background: "black", width: "200px" }}
          href="/ukulele/create"
        >
          Add Ukulele
        </Button>
      </Box>

      <Grid
        container
        style={{
          width: "100%",
          paddingTop: 20,
        }}
        spacing={2}
      >
        {ukuleles?.map((ukulele: Ukulele) => (
          <Grid key={ukulele.id} item xs={6} sm={4} md={3}>
            <Link href={`ukulele/${ukulele.id}`}>
              <Box
                style={{
                  padding: 20,
                  borderRadius: 10,
                  height: "100%",
                }}
                sx={{ boxShadow: 2 }}
              >
                {/* <Image
                src={ukulele.image}
                alt={ukulele.title}
                style={{ width: "100%", height: "auto" }}
              /> */}
                <Typography style={{ fontSize: "8px", color: "gray" }}>
                  {ukulele.id}
                </Typography>
                <Typography style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {ukulele.title}
                </Typography>
                <Typography style={{ fontSize: "10px", fontStyle: "italic" }}>
                  Creator:
                </Typography>
                <Typography style={{ fontSize: "10px", fontStyle: "italic" }}>
                  NFT Owned by:
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
