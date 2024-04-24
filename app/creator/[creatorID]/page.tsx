"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { GetCreatorByID, GetSchoolByID } from "@/src/api/ukuleleService";
import { Creator } from "@/src/API";
import Link from "next/link";

export default function Student({ params }: { params: { creatorID: string } }) {
  const [creator, setCreator] = useState<Creator | null | undefined>(undefined);
  const [ukuleleData, setUkuleleData] = useState<any>();
  const [school, setSchool] = useState<any>();

  const fetchCreator = async () => {
    try {
      const creatorData = await GetCreatorByID(params.creatorID);
      console.log(creatorData);
      if (creatorData && creatorData.Ukulele) {
        setUkuleleData(creatorData.Ukulele);
      }
      setCreator(creatorData);
    } catch (error) {
      console.error("Error at fetchCreator: ", error);
    }
  };

  const fetchSchool = async (schoolID: string) => {
    try {
      const schoolData = await GetSchoolByID(schoolID);
      setSchool(schoolData);
    } catch (error) {
      console.error("Error at fetchSchool: ", error);
    }
  };

  useEffect(() => {
    fetchCreator();
  }, [params.creatorID]);

  useEffect(() => {
    if (creator) {
      fetchSchool(creator.schoolID);
    }
  }, [creator]);

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
            fontSize: 12,
            fontWeight: "bold",
            color: "gray",
            textAlign: "left",
            width: "100%",
          }}
        >
          Student ID: {params.creatorID}
        </Typography>
        <Button
          variant="contained"
          style={{ background: "black", width: "200px" }}
          href={`/creator/${params.creatorID}/edit`}
        >
          Edit Creator
        </Button>
      </Box>

      {creator ? (
        <>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            {creator?.name}
          </Typography>

          {school ? (
            <Typography
              style={{
                fontSize: 16,
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              School: <strong>{school.title}</strong>
            </Typography>
          ) : (
            ""
          )}

          {ukuleleData ? (
            <>
              <Typography>Ukuleles Created</Typography>
              {/* Display a grid of ukuleles created */}
              <Grid
                container
                style={{
                  width: "100%",
                  paddingTop: 20,
                }}
                spacing={2}
              >
                <Grid key={ukuleleData.id} item xs={6} sm={4} md={3}>
                  <Link href={`/ukulele/${ukuleleData.id}`}>
                    <Box
                      style={{
                        padding: 20,
                        borderRadius: 10,
                        height: "100%",
                      }}
                      sx={{ boxShadow: 2 }}
                    >
                      <Typography style={{ fontSize: "8px", color: "gray" }}>
                        {ukuleleData.id}
                      </Typography>
                      <Typography
                        style={{ fontWeight: "bold", fontSize: "14px" }}
                      >
                        {ukuleleData.title}
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              </Grid>
            </>
          ) : (
            "No ukulele was assigned."
          )}
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
}
