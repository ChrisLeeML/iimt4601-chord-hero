import * as React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { getSchool, getUkulele, listCreators } from "@/src/graphql/queries";
import { Creator } from "@/src/API";
import { cookieBasedClient } from "../layout";

const ListCreators = async () => {
  try {
    const { data }: any = await cookieBasedClient.graphql({
      query: listCreators,
    });

    const creators = data.listCreators.items;

    const fetchPromises = creators.map(async (creator: Creator) => {
      const schoolResult = await cookieBasedClient.graphql({
        query: getSchool,
        variables: {
          id: creator.schoolID,
        },
      });

      const ukuleleResult = await cookieBasedClient.graphql({
        query: getUkulele,
        variables: {
          id: creator.creatorUkuleleId as string,
        },
      });

      return {
        ...creator,
        school: schoolResult.data.getSchool,
        ukulele: ukuleleResult.data.getUkulele,
      };
    });

    const contentList = await Promise.all(fetchPromises);

    return contentList;
  } catch (error) {
    console.error("Error at ListCreators: ", error);
  }
};

export default async function creators() {
  const creators = await ListCreators();

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
          Creators
        </Typography>
        <Button
          variant="contained"
          style={{ background: "black", width: "200px" }}
          href="/creator/create"
        >
          Add Creator
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
        {creators && creators.length > 0
          ? creators?.map((creator) => (
              <Grid key={creator.id} item xs={6} sm={4} md={3} lg={2}>
                <Link href={`creator/${creator.id}`}>
                  <Box
                    style={{
                      padding: 20,
                      borderRadius: 10,
                      height: "100%",
                    }}
                    sx={{ boxShadow: 2 }}
                  >
                    <Image
                      src={require("../../src/assets/blank-profile.jpeg")}
                      alt={creator.name}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <Typography style={{ fontSize: "8px", color: "gray" }}>
                      {creator.id}
                    </Typography>
                    <Typography
                      style={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                      {creator.name}
                    </Typography>
                    <Typography
                      style={{ fontSize: "12px", fontStyle: "italic" }}
                    >
                      {creator.school.title}
                    </Typography>
                    <Typography
                      style={{ fontSize: "12px", fontStyle: "italic" }}
                    >
                      Ukulele: {creator.ukulele.title}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  );
}
