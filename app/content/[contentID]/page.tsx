import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Content, ContentType } from "@/src/API";
import { cookieBasedClient } from "../../layout";
import { getContent } from "@/src/graphql/queries";
import VideoPlayer from "@/src/components/VideoPlayer";
import Link from "next/link";

const handleGetContent = async (contentID: string) => {
  try {
    const { data } = await cookieBasedClient.graphql({
      query: getContent,
      variables: {
        id: contentID,
      },
    });
    console.log(data);
    return data.getContent;
  } catch (error) {
    console.error("Erorr at getContent: ", error);
  }
};

export default async function ViewContent({
  params,
}: {
  params: { contentID: string };
}) {
  const content = await handleGetContent(params.contentID);

  return (
    <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
      {content ? (
        <Box
          style={{
            marginTop: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              color: "gray",
              textAlign: "left",
              width: "100%",
            }}
          >
            {params.contentID}
          </Typography>
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "left",
              width: "100%",
            }}
          >
            {content.title}
          </Typography>
          <Box style={{ minHeight: "70vh" }}>
            {content.textContent ? (
              <Typography
                style={{
                  fontSize: "14px",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                {content.textContent as string}
              </Typography>
            ) : null}

            {content.type == ContentType.VIDEO ? (
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "50px",
                }}
              >
                <VideoPlayer videoLink={content.videoLink as string} />
              </Box>
            ) : null}
          </Box>
        </Box>
      ) : (
        "404"
      )}
      <Box style={{ width: "100%", marginTop: "100px" }}>
        <Typography
          style={{
            fontSize: "18px",
            textAlign: "center",
            width: "100%",
            fontWeight: "600",
          }}
        >
          Thank you for owning the NFTs by Chord Hero and trusting our mission.
        </Typography>
        <Typography
          style={{
            fontSize: "12px",
            textAlign: "center",
            width: "100%",
            fontWeight: "500",
            fontStyle: "italic",
          }}
        >
          Anthony Chau, Co-Founder & CEO
        </Typography>
        <Link
          href="https://www.sandbox.game/en/collections/chord-hero-music-gallery/188/"
          target="_blank"
        >
          <Typography
            style={{
              fontSize: "16px",
              textAlign: "center",
              width: "100%",
              marginTop: "20px",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Unlock more exclusive content with more NFTs (The Sandbox)
          </Typography>
        </Link>
      </Box>
    </Container>
  );
}
