"use server";
import { cookieBasedClient } from "@/app/layout";
import { listUkuleles } from "@/src/graphql/queries";
import { createCreator } from "@/src/graphql/mutations";
import { create } from "@mui/material/styles/createTransitions";

/**
 * Fetches ukulele data using the GraphQL query listUkuleles.
 * @returns {Promise<any>} The fetched ukulele data or null if an error occurs.
 */
// src/api/ukuleleService.js

export const GetUkulele = async () => {
    try {
    const response = await cookieBasedClient.graphql({
        query: listUkuleles
    });
    console.log("Ukuleles: ", JSON.stringify(response.data, null, 2));
    return response.data;
    } catch (error) {
    console.error('Error fetching ukuleles:', error);
    return null;
    }
}

export const CreateCreator = async (name: string) => {
    try {
    const response = await cookieBasedClient.graphql({
        query: createCreator,
        variables: { 
            input: {
                name: name,
                schoolID: '0'
            }
        }
    });
    console.log("Created creator", response);
    } catch (error) {
    console.error('Error fetching ukuleles:', error);
    }
}

