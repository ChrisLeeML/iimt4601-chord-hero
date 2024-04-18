"use server";
import { cookieBasedClient } from "@/app/layout";
import {
  getSchool,
  getUkulele,
  listCreators,
  listUkuleles,
} from "@/src/graphql/queries";
import { createCreator } from "@/src/graphql/mutations";
import { create } from "@mui/material/styles/createTransitions";
import { Creator } from "../API";

/**
 * Fetches ukulele data using the GraphQL query listUkuleles.
 * @returns {Promise<any>} The fetched ukulele data or null if an error occurs.
 */
// src/api/ukuleleService.js

export const GetUkulele = async () => {
  try {
    const response = await cookieBasedClient.graphql({
      query: listUkuleles,
    });
    console.log("Ukuleles: ", JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error("Error fetching ukuleles:", error);
    return null;
  }
};

export const CreateCreator = async (name: string) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: createCreator,
      variables: {
        input: {
          name: name,
          schoolID: "0",
        },
      },
    });
    console.log("Created creator", response);
  } catch (error) {
    console.error("Error fetching ukuleles:", error);
  }
};

export const ListCreators = async () => {
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
    console.log("###### Checking contentList: ", contentList);

    return contentList;
  } catch (error) {
    console.error("Error at ListCreators: ", error);
    throw error;
  }
};
