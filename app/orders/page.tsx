"use client";
import * as React from "react";

import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Orders() {
  const orders = [
    {
      id: "ORDER-SAMPLE-ID",
      createdAt: "Mar 21st, 2024",
      productTitle: "Chord Hero Ukulele Kits​",
      quantity: "10",
      total: "HK$5,300",
      paymentMethod: "Credit Card​",
      address: "IIMT School, Pok Fu Lam​",
      status: "Processing",
    },
    {
      id: "ORDER-SAMPLE-ID",
      createdAt: "Mar 19th, 2024",
      productTitle: "Chord Hero Ukulele Kits​",
      quantity: "20",
      total: "HK$10,600",
      paymentMethod: "Credit Card​",
      address: "IIMT School, Pok Fu Lam​",
      status: "On Delivery",
    },
    {
      id: "ORDER-SAMPLE-ID",
      createdAt: "Feb 21st, 2024",
      productTitle: "Chord Hero Ukulele Kits​",
      quantity: "40",
      total: "HK$21,200",
      paymentMethod: "Credit Card​",
      address: "IIMT School, Pok Fu Lam​",
      status: "Delivered",
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
          Order Status
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
        {orders.map((order) => (
          <Link key={order.id} href={`orders/${order.id}`}>
            <Box
              style={{
                padding: 20,
                borderRadius: 10,
                height: "100%",
              }}
              sx={{ boxShadow: 2 }}
            >
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography style={{ fontSize: "8px", color: "gray" }}>
                  Order ID.: {order.id}
                </Typography>

                <Box
                  style={{
                    padding: 10,
                    position: "relative",
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
                      fontSize: "12px",
                      fontWeight: "bold",
                      color:
                        order.status === "Processing"
                          ? "#FFD700"
                          : order.status === "On Delivery"
                          ? "blue"
                          : "green",
                      zIndex: 2,
                    }}
                  >
                    {order.status}
                  </Typography>
                </Box>
              </Stack>
              <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                {order.productTitle}
              </Typography>
              <Typography style={{ fontSize: "14px", fontStyle: "italic" }}>
                Ordered at {order.createdAt}
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                Total: {order.total}
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                Quantity: {order.quantity}
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                Address: {order.address}
              </Typography>
              <Typography style={{ fontSize: "14px" }}>
                Payment Method: {order.paymentMethod}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
