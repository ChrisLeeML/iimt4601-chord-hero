"use client";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ListOwners, CreateOwner, UpdateOwner } from "../api/ukuleleService";
import { useRouter } from "next/navigation";

const OwnerModal = ({
  isModalOpen,
  onClose,
  walletAddress,
  selectedOwnerNickname,
}: {
  isModalOpen: boolean;
  onClose: any;
  walletAddress: string;
  selectedOwnerNickname: string;
}) => {
  const router = useRouter();
  const [ownerNickname, setOwnerNickname] = useState<string>(
    selectedOwnerNickname
  );
  const [ownerNote, setOwnerNote] = useState<string>("");
  const [data, setOwnerData] = useState<any>([]);
  const [ownerId, setOwnerId] = useState<string>("");


  // [TO DO] We need to check if there's an existing note based on the wallet address. If there is, we need to populate the data based on it.

  // [TO DO] Update. Delete.
  useEffect(() => {
    const FetchOwnerData = async () => {
      try {
        const ownerData = await ListOwners();
        console.log("ownerDATA:",ownerData);
        setOwnerData(ownerData);
      } catch (error) {
        console.error("Error fetching ownerData:", error);
      }
    };
    FetchOwnerData();
  }, []);

  useEffect(() => {
    const owner = data.find((item: any) => item.walletAddress === walletAddress);
    if (owner) {
      setOwnerId(owner.id);
      setOwnerNickname(owner.nickname);
      setOwnerNote(owner.notes);
    } else {
       // Assuming CreateOwner is a function you will define
      setOwnerId("");
      setOwnerNickname("");
      setOwnerNote("");
    }
  }, [data, walletAddress]);

  const HandleSubmit = async () => {
    const formInput = {
      walletAddress: walletAddress as string,
      nickname: ownerNickname as string,
      notes: ownerNote as string,
    };
    console.log(formInput);
    if (ownerId) {
      await updateOwner(formInput, ownerId);
    } else {
      await createNewOwner(formInput);
    }
  };

  const createNewOwner = async (formInput: {
    walletAddress: string;
    nickname: string;
    notes: string;
  }) => {
    try {
      await CreateOwner(formInput);
      router.push("/analytics");
    } catch (error) {
      console.error("Error creating new owner:", error);
    }
  };

  const updateOwner = async (formInput: {
    walletAddress: string;
    nickname: string;
    notes: string;
  }, ownerId: string) => {
    try {
      console.log({ id: ownerId, ...formInput });
      await UpdateOwner({ id: ownerId, ...formInput });
      router.push("/analytics");
    } catch (error) {
      console.error("Error updating owner:", error);
    }
  };

  return (
    <Modal
      open={isModalOpen}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClose={onClose}
    >
      <Box
        style={{
          width: 450,
          height: 500,
          padding: 40,
          background: "white",
          borderRadius: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography>Add notes to the owner</Typography>
          <TextField
            style={{ marginTop: 20, width: "100%" }}
            disabled
            value={walletAddress}
            label="Wallet Address"
          />
          <TextField
            style={{ marginTop: 20, width: "100%" }}
            value={ownerNickname}
            onChange={(event) => {
              setOwnerNickname(event.target.value);
            }}
            label="Nickname"
          />
          <TextField
            style={{ marginTop: 20, width: "100%" }}
            value={ownerNote}
            onChange={(event) => {
              setOwnerNote(event.target.value);
            }}
            label="Note"
          />
        </Box>
        <Button
          onClick={HandleSubmit}
          style={{
            width: "100%",
            bottom: 20,
            left: 0,
            background: "black",
            color: "white",
            borderRadius: 10,
            height: 50,
          }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default OwnerModal;
