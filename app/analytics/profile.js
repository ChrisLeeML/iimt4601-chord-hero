const express = require("express");
const { Alchemy, Network } = require("alchemy-sdk");
const axios = require("axios");
const path = require("path");
const router = express.Router();
var pathname = path.join(__dirname, "../");
const { dynamodb } = require(pathname + "/database/dynamodb");

//track nft by contract address & tokenId stored in database
router.get(
  "/track-nft",
  express.urlencoded({ extended: true }),
  async (req, res) => {
    const contractAddress = req.query.contractAddress;
    const tokenId = req.query.tokenId;
    const params = {
      TableName: "chordhero",
      KeyConditionExpression: "contractAddress = :address and tokenId = :token",
      ExpressionAttributeValues: {
        ":address": { S: contractAddress },
        ":token": { S: tokenId },
      },
    };

    try {
      const result = await dynamodb.query(params).promise();
      const items = result.Items;
      console.log(items);
      res.status(200).json(items);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error querying data" });
    }
  }
);

//Search nft by contract
router.post(
  "/search-nft",
  express.urlencoded({ extended: true }),
  async (req, res) => {
    const nftType = req.body.nftType;
    const contractAddress = req.body.contractAddress;
    //const tokenId = req.body.tokenId;
    const url = `https://api.simplehash.com/api/v0/nfts/${nftType}/${contractAddress}`;

    const headers = {
      accept: "application/json",
      "X-API-KEY": process.env.API_KEY,
    };

    try {
      const response = await axios.get(url, { headers });
      const data = response.data;
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occured." });
    }
  }
);

//Insert nft data into database
router.post(
  "/insert-nft",
  express.urlencoded({ extended: true }),
  async (req, res) => {
    const nftType = req.body.nftType;
    const contractAddress = req.body.contractAddress;
    const tokenId = req.body.tokenId;
    const url = `https://api.simplehash.com/api/v0/nfts/${nftType}/${contractAddress}/${tokenId}`;

    const headers = {
      accept: "application/json",
      "X-API-KEY": process.env.API_KEY,
    };
    const response = await axios.get(url, { headers });
    const data = response.data;
    const owners = JSON.stringify(data.owners);
    const params = {
      TableName: "chordhero",
      Item: {
        contractAddress: { S: contractAddress },
        tokenId: { S: tokenId },
        owners: { S: owners },
      },
    };

    try {
      await dynamodb.putItem(params).promise();
      res.send("Data inserted successfully");
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).send("Error inserting data");
    }
  }
);

module.exports = router;
