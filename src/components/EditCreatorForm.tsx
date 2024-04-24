"use client";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  UpdateCreator,
  DeleteCreator,
  ListSchools,
  ListUkuleles,
  GetCreatorByID,
} from "../api/ukuleleService";
import { useRouter } from "next/navigation";
import { School, Ukulele } from "../API";

const EditCreatorForm = ({ creatorID }: { creatorID: string }) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [schoolID, setSchoolID] = useState<string>("");
  const [creatorUkuleleID, setCreatorUkuleleID] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const [schoolOptions, setSchoolOptions] = useState<School[]>([]);
  const [ukuleleOptions, setUkuleleOptions] = useState<Ukulele[]>([]);

  const GetCreatorInfo = async () => {
    try {
      const creatorInfo = await GetCreatorByID(creatorID);
      if (creatorInfo) {
        setName(creatorInfo.name as string);
        setSchoolID(creatorInfo.schoolID);
        setCreatorUkuleleID(creatorInfo.creatorUkuleleId as string);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error at GetCreatorInfo: ", error);
    }
  };

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (
      creatorID.length > 0 &&
      name.length > 0 &&
      schoolID.length > 0 &&
      creatorUkuleleID.length > 0
    ) {
      setLoading(true);
      setMessage("");
      console.log("Creating a Creator with the following data: ");
      console.log(name, schoolID, creatorUkuleleID);
      const formInput = {
        id: creatorID as string,
        name: name as string,
        schoolID: schoolID as string,
        creatorUkuleleID: creatorUkuleleID as string,
      };
      SubmitForm(formInput);
    } else {
      setMessage("All fields are required.");
    }
  };

  const HandleDelete = () => {
    if (creatorID.length > 0) {
      setLoading(true);
      setMessage("");
      console.log("Delete Content with the following data: ");
      console.log(creatorID);
      const formInput = {
        id: creatorID as string,
      };
      DeleteForm(formInput);
    } else {
      setMessage("All fields are required.");
    }
  };

  const SubmitForm = async (formInput: {
    id: string;
    name: string;
    schoolID: string;
    creatorUkuleleID: string;
  }) => {
    try {
      await UpdateCreator(formInput);
      router.push("/creator");
    } catch (error: any) {
      console.error("Error at SubmitForm:", error);
      setMessage(error.message);
      setLoading(false);
    }
  };

  const DeleteForm = async (formInput: { id: string }) => {
    try {
      await DeleteCreator(formInput);
      router.push("/creator");
    } catch (error: any) {
      console.error("Error at DeleteForm:", error);
      setMessage(error.message);
      setLoading(false);
    }
  };

  const HandleListUkuleles = async () => {
    try {
      const ukuleles = await ListUkuleles();
      if (ukuleles && ukuleles?.length > 0) {
        setUkuleleOptions(ukuleles);
      }
    } catch (error) {
      console.error("Error at HandleListUkuleles: ", error);
    }
  };

  const HandleListSchools = async () => {
    try {
      const schools = await ListSchools();
      if (schools && schools?.length > 0) {
        setSchoolOptions(schools);
      }
    } catch (error) {
      console.error("Error at HandleListSchools: ", error);
    }
  };

  useEffect(() => {
    HandleListUkuleles();
    HandleListSchools();
    GetCreatorInfo();
  }, []);

  return (
    <form
      style={{
        width: "100%",
        borderWidth: 10,
        marginTop: 30,
        minHeight: "50vh",
      }}
      onSubmit={HandleSubmit}
    >
      {loading ? (
        "Loading..."
      ) : (
        <FormControl
          style={{
            width: "100%",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TextField
            label="Name"
            style={{ marginBottom: 20, width: 400 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Typography>
            {schoolOptions.length > 0 ? "Choose School" : "Loading Schools..."}
          </Typography>
          <FormControl style={{ marginBottom: 20, width: 400 }}>
            <Select
              value={schoolID}
              onChange={(e) => setSchoolID(e.target.value)}
              style={{ width: "100%" }}
            >
              {schoolOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography>
            {ukuleleOptions.length > 0
              ? "Choose Ukulele"
              : "Loading Ukuleles..."}
          </Typography>
          <Select
            value={creatorUkuleleID}
            onChange={(e) => setCreatorUkuleleID(e.target.value)}
            style={{ width: 400, marginBottom: 20 }}
            disabled={ukuleleOptions.length == 0}
          >
            {ukuleleOptions.length > 0
              ? ukuleleOptions.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.title}
                  </MenuItem>
                ))
              : ""}
          </Select>
          <Box
            style={{
              display: "flex",
              width: 400,
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{
                background: loading ? "gray" : "black",
                marginBottom: 50,
              }}
              size="large"
              variant="contained"
              type="submit"
              disabled={loading}
            >
              Submit
            </Button>
            <Button
              style={{ background: loading ? "gray" : "red", marginBottom: 50 }}
              size="large"
              variant="contained"
              type="button"
              disabled={loading}
              onClick={HandleDelete}
            >
              Delete
            </Button>
          </Box>
          <Typography style={{ marginBottom: 100, color: "red" }}>
            {message}
          </Typography>
        </FormControl>
      )}
    </form>
  );
};

export default EditCreatorForm;
