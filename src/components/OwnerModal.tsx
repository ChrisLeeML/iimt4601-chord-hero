import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

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
  const [ownerNickname, setOwnerNickname] = useState<string>(
    selectedOwnerNickname
  );
  const [ownerNote, setOwnerNote] = useState<string>("");

  // [TO DO] We need to check if there's an existing note based on the wallet address. If there is, we need to populate the data based on it.

  // [TO DO] Update. Delete.

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
