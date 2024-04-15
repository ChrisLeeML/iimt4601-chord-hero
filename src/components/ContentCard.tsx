"use client";
import React from "react";
import { Card, CardActionArea, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Content } from "../API";

const ContentCard = ({
  contentItem,
  disabled,
}: {
  contentItem: Content;
  disabled: boolean;
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (!disabled) {
      router.push(`/content/${contentItem.id}`);
    }
  };

  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        background: disabled ? "lightGray" : "white",
      }}
    >
      <CardActionArea
        style={{ width: "100%", height: "100%" }}
        onClick={handleClick}
        disabled={disabled}
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
            >{`ID: ${contentItem.id}`}</Typography>

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

          <Typography style={{ fontWeight: "600", fontSize: "14px" }}>
            {contentItem.title}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ContentCard;
