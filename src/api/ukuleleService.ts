"use server";
import { cookieBasedClient } from "@/app/layout";
import { listUkuleles } from "@/src/graphql/queries";

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

