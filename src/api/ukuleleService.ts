"use server";
import { cookieBasedClient } from "@/app/layout";
import {
  getCreator,
  getSchool,
  getUkulele,
  listCreators,
  listUkuleles,
  listContents,
  getOwner,
  listOwners,
  listSchools
} from "@/src/graphql/queries";
import {
  createCreator,
  updateCreator,
  deleteCreator,
  createContent,
  updateContent,
  deleteContent,
  createUkulele,
  updateUkulele,
  deleteUkulele,
  createOwner,
  updateOwner
} from "@/src/graphql/mutations";
import { create } from "@mui/material/styles/createTransitions";
import { ContentType, Creator } from "../API";

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

export const GetCreatorByID = async (creatorID: string) => {
  try {
    const { data } = await cookieBasedClient.graphql({
      query: getCreator,
      variables: {
        id: creatorID,
      },
    });
    console.log("CREATORDATA", data);
    return data.getCreator;
  } catch (error) {
    console.error("Error at getCreatorByID: ", error);
  }
};

export const CreateCreator = async (formInput: {
  name: string;
  schoolID: string;
  creatorUkuleleID: string;
}) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: createCreator,
      variables: {
        input: {
          name: formInput.name,
          creatorUkuleleId: formInput.creatorUkuleleID,
          schoolID: formInput.schoolID,
        },
      },
    });
    console.log("Created creator", response);
  } catch (error) {
    console.error("Error at CreateCreator:", error);
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

export const UpdateCreator = async (formInput: {
  id: string;
  name: string;
  creatorUkuleleID: string;
  schoolID: string;
}) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: updateCreator,
      variables: {
        input: {
          id: formInput.id,
          name: formInput.name,
          creatorUkuleleId: formInput.creatorUkuleleID,
          schoolID: formInput.schoolID,
        },
      },
    });
    console.log("Updated Content", response);
  } catch (error) {
    console.error("Error at UpdateContent:", error);
  }
};

export const DeleteCreator = async (formInput: { id: string }) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: deleteCreator,
      variables: {
        input: {
          id: formInput.id,
        },
      },
    });
    console.log("Deleted Content", response);
  } catch (error) {
    console.error("Error at DeleteContent:", error);
  }
};

export const ListContent = async () => {
  try {
    const { data }: any = await cookieBasedClient.graphql({
      query: listContents,
    });
    return data.listContents.items;
  } catch (error) {
    console.error("Error at ListContent: ", error);
  }
};

export const CreateContent = async (formInput: {
  title: string;
  threshold: string;
  type: ContentType;
  videoLink: string;
  textContent: string;
}) => {
  try {
    const { title, threshold, type, videoLink, textContent } = formInput;
    const variables: any = {
      input: {
        title,
        threshold,
        type,
      },
    };

    if (type === "VIDEO") {
      variables.input.videoLink = videoLink;
    } else if (type === "TEXT") {
      variables.input.textContent = textContent;
    }

    const response = await cookieBasedClient.graphql({
      query: createContent,
      variables,
    });
    console.log("Created content", response);
  } catch (error) {
    console.error("Error at CreateContent:", error);
  }
};

export const UpdateContent = async (formInput: {
  id: string;
  title: string;
  threshold: number;
  type: ContentType;
  videoLink: string;
  textContent: string;
}) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: updateContent,
      variables: {
        input: {
          id: formInput.id,
          title: formInput.title,
          threshold: formInput.threshold,
          type: formInput.type,
          videoLink: formInput.videoLink,
          textContent: formInput.textContent,
        },
      },
    });
    console.log("Updated Content", response);
  } catch (error) {
    console.error("Error at UpdateContent:", error);
  }
};

export const DeleteContent = async (formInput: { id: string }) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: deleteContent,
      variables: {
        input: {
          id: formInput.id,
        },
      },
    });
    console.log("Deleted Content", response);
  } catch (error) {
    console.error("Error at DeleteContent:", error);
  }
};

export const GetUkuleleByID = async (ukuleleID: string) => {
  try {
    const { data } = await cookieBasedClient.graphql({
      query: getUkulele,
      variables: {
        id: ukuleleID,
      },
    });
    console.log("CREATORDATA", data);
    return data.getUkulele;
  } catch (error) {
    console.error("Error at getCreatorByID: ", error);
  }
};

export const ListUkuleles = async () => {
  try {
    const { data }: any = await cookieBasedClient.graphql({
      query: listUkuleles,
    });

    const ukuleles = data.listUkuleles.items;
    return ukuleles;
  } catch (error) {
    console.error("Error at ListUkuleles: ", error);
  }
};

export const ListSchools = async () => {
  try {
    const { data }: any = await cookieBasedClient.graphql({
      query: listSchools,
    });

    const schools = data.listSchools.items;
    return schools;
  } catch (error) {
    console.error("Error at ListSchools: ", error);
  }
};

export const CreateUkulele = async (formInput: {
  title: string;
  tokenID: string;
  contractAddress: string;
  chain: string;
}) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: createUkulele,
      variables: {
        input: {
          title: formInput.title,
          tokenID: formInput.tokenID,
          contractAddress: formInput.contractAddress,
          chain: formInput.chain,
        },
      },
    });
    console.log("Created ukulele", response);
  } catch (error) {
    console.error("Error at CreateUkulele:", error);
  }
};

export const UpdateUkulele = async (formInput: {
  id: string;
  title: string;
  tokenID: string;
  contractAddress: string;
  chain: string;
}) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: updateUkulele,
      variables: {
        input: {
          id: formInput.id,
          title: formInput.title,
          tokenID: formInput.tokenID,
          contractAddress: formInput.contractAddress,
          chain: formInput.chain,
        },
      },
    });
    console.log("Updated Ukulele", response);
  } catch (error) {
    console.error("Error at UpdateUkulele:", error);
  }
};

export const DeleteUkulele = async (formInput: { id: string }) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: deleteUkulele,
      variables: {
        input: {
          id: formInput.id,
        },
      },
    });
    console.log("Deleted Ukulele", response);
  } catch (error) {
    console.error("Error at DeleteUkulele:", error);
  }
};


export const ListOwners = async () => {
  try {
    const { data }: any = await cookieBasedClient.graphql({
      query: listOwners,
    });

    const owners = data.listOwners.items;

    return owners;
  } catch (error) {
    console.error("Error at ListCreators: ", error);
    throw error;
  }
};


export const CreateOwner = async (formInput: {
  walletAddress: string;
  nickname: string;
  notes: string;
}) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: createOwner,
      variables: {
        input: {
          walletAddress: formInput.walletAddress,
          nickname: formInput.nickname,
          notes: formInput.notes
        },
      },
    });
    console.log("Created owner", response);
  } catch (error) {
    console.error("Error at CreateOwner:", error);
  }
};

export const UpdateOwner = async (formInput: {
  id: string;
  walletAddress: string;
  nickname: string;
  notes: string;
}) => {
  try {
    const response = await cookieBasedClient.graphql({
      query: updateOwner,
      variables: {
        input: {
          id: formInput.id,
          walletAddress: formInput.walletAddress,
          nickname: formInput.nickname,
          notes: formInput.notes
        },
      },
    });
    console.log("Updated Owner", response);
  } catch (error) {
    console.error("Error at UpdateOwner:", error);
  }
};