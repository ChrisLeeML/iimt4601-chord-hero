"use client";
import {
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CreateCreator,
  ListSchools,
  ListUkuleles,
} from "../api/ukuleleService";
import { useRouter } from "next/navigation";
import { School, Ukulele } from "../API";

const CreateCreatorForm = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [schoolID, setSchoolID] = useState<string>("");
  const [creatorUkuleleID, setCreatorUkuleleID] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [schoolOptions, setSchoolOptions] = useState<School[]>([]);
  const [ukuleleOptions, setUkuleleOptions] = useState<Ukulele[]>([]);

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    if (name.length > 0 && schoolID.length > 0 && creatorUkuleleID.length > 0) {
      setLoading(true);
      setMessage("");
      console.log("Creating a Creator with the following data: ");
      console.log(name, schoolID, creatorUkuleleID);
      const formInput = {
        name: name as string,
        schoolID: schoolID as string,
        creatorUkuleleID: creatorUkuleleID as string,
      };
      SubmitForm(formInput);
    } else {
      setMessage("All fields are required.");
    }
  };

  const SubmitForm = async (formInput: {
    name: string;
    schoolID: string;
    creatorUkuleleID: string;
  }) => {
    try {
      await CreateCreator(formInput);
      router.push("/creator");
    } catch (error: any) {
      console.error("Error at SubmitForm:", error);
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
        <FormLabel style={{ fontSize: 24, marginBottom: 10 }}>
          Create a Creator
        </FormLabel>
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
          {ukuleleOptions.length > 0 ? "Choose Ukulele" : "Loading Ukuleles..."}
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

        <Button
          style={{ background: loading ? "gray" : "black", marginBottom: 50 }}
          size="large"
          variant="contained"
          type="submit"
          disabled={loading}
        >
          Submit
        </Button>
        <Typography style={{ marginBottom: 100, color: "red" }}>
          {message}
        </Typography>
      </FormControl>
    </form>
  );
};

export default CreateCreatorForm;
