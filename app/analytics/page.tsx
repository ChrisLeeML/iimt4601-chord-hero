"use client";
import { useState, useEffect } from "react";

import {
  Box,
  Container,
  Table,
  TableContainer,
  Typography,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Button,
} from "@mui/material";

const dummyData = {
  nft_id:
    "polygon.0x2953399124f0cbb46d2cbacd8a89cf0599974963.78655756395228556566244677429854963634410546405516720580801289032955980677620",
  chain: "polygon",
  contract_address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
  token_id:
    "78655756395228556566244677429854963634410546405516720580801289032955980677620",
  name: "Chord Hero Music Gallery Pass",
  description:
    "The Chord Hero Music Gallery Pass is your quick ticket to showcasing your artwork at the Chord Hero Music Gallery on The Sandbox through its Sandbox Experience.\n\nThe Sandbox Experience offers schools a way to bring their students into the metaverse through its Sandbox Experience.  The set includes the Maker Ukulele Set - a DIY ukulele set packaged with ChordVentures, the music learning game, plus access to instructions on voxelizing their physically designed ukuleles for Chord Hero to mint and showcase at the Chord Hero Music Gallery.\n\nThe holder of this NFT can join the Sandbox Experience for free by only purchasing the standalone Chord Hero Maker Ukulele Set.  Plus, until the product is made available to the public, the pass gifts the holder an exclusive opportunity to participate.\n\nEach NFT holder is entitled to the 1-month of showcasing on the Chord Hero Music Gallery on The Sandbox.\n\nSee what the Sandbox Experience is like at:\nhttp://www.chordhero.com/sandboxexperiencetrailer\n\nFor details on the Sandbox Experience go to: \nhttp://www.chordhero.com/sandboxexperience\n\nFor details on the Maker Ukulele Set go to:\nhttp://www.chordhero.com/mus",
  previews: {
    image_small_url:
      "https://lh3.googleusercontent.com/fu1kXRFOPOoU98425-YthB_E5-Ma2AJTmvGWAaz_VMz5hNbAtJ679opl23MlJ6bZg68TSNoheZB3TIv2_vHuovPfwAS-qBWIqOo=s250",
    image_medium_url:
      "https://lh3.googleusercontent.com/fu1kXRFOPOoU98425-YthB_E5-Ma2AJTmvGWAaz_VMz5hNbAtJ679opl23MlJ6bZg68TSNoheZB3TIv2_vHuovPfwAS-qBWIqOo",
    image_large_url:
      "https://lh3.googleusercontent.com/fu1kXRFOPOoU98425-YthB_E5-Ma2AJTmvGWAaz_VMz5hNbAtJ679opl23MlJ6bZg68TSNoheZB3TIv2_vHuovPfwAS-qBWIqOo=s1000",
    image_opengraph_url:
      "https://lh3.googleusercontent.com/fu1kXRFOPOoU98425-YthB_E5-Ma2AJTmvGWAaz_VMz5hNbAtJ679opl23MlJ6bZg68TSNoheZB3TIv2_vHuovPfwAS-qBWIqOo=k-w1200-s2400-rj",
    blurhash: "UTPPS;T0_LR5wFay%0s:*0niDkS#-MnhXAbv",
    predominant_color: "#f8d893",
  },
  image_url:
    "https://cdn.simplehash.com/assets/15dc86c41ad7b652779329102638035a2b571e88917753f8a632756dade89d57.png",
  image_properties: {
    width: 2048,
    height: 2048,
    size: 1804399,
    mime_type: "image/png",
  },
  video_url: null,
  video_properties: null,
  audio_url: null,
  audio_properties: null,
  model_url: null,
  model_properties: null,
  other_url: null,
  other_properties: null,
  background_color: null,
  external_url: "http://www.chordhero.com/sandboxexperiencepass",
  created_date: "2022-12-05T09:11:25",
  status: "minted",
  token_count: 500,
  owner_count: 55,
  owners: [
    {
      owner_address: "0xADE5949A14DF4ef9c966F94668B6E6A1861dCED4",
      quantity: 300,
      quantity_string: "300",
      first_acquired_date: "2022-12-05T09:11:25",
      last_acquired_date: "2022-12-06T11:42:15",
    },
    {
      owner_address: "0x7692779e71d6B9154221ef21957F8b8837e9f978",
      quantity: 147,
      quantity_string: "147",
      first_acquired_date: "2022-12-06T09:45:19",
      last_acquired_date: "2022-12-06T09:59:25",
    },
    {
      owner_address: "0x0B205720aF318Cc4248266291A911bfcf02B617D",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:25:35",
      last_acquired_date: "2024-01-03T08:25:35",
    },
    {
      owner_address: "0x10922518ef0d96d6015c19234D7b2abeCE48bd29",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:19:53",
      last_acquired_date: "2024-01-03T08:19:53",
    },
    {
      owner_address: "0x126D790B75CFBd9D5f2Ded15aABc5dA37E2292A4",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:19:33",
      last_acquired_date: "2024-01-03T08:19:33",
    },
    {
      owner_address: "0x1A7AAB9e6f1729c4745876111E865D4b3cB8744a",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:08:57",
      last_acquired_date: "2024-01-03T08:08:57",
    },
    {
      owner_address: "0x20e2271f614e5247B1f8Ce4b5aBC7cFF92212425",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2022-12-07T04:06:39",
      last_acquired_date: "2022-12-07T04:06:39",
    },
    {
      owner_address: "0x2863fe1f9C8C7EAF6c8442F554C2B6853d0A62A0",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:28:51",
      last_acquired_date: "2024-01-03T08:28:51",
    },
    {
      owner_address: "0x2aC1D9095b9D40904E84bfefA9D4530f1495E7E9",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:25:23",
      last_acquired_date: "2024-01-03T08:25:23",
    },
    {
      owner_address: "0x2e8e7636E004591358984051852b37b0a65D3786",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T06:56:28",
      last_acquired_date: "2024-01-03T06:56:28",
    },
    {
      owner_address: "0x33680ac0e1128c2e9aA9996Bd4F18d6788C104a3",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:24:19",
      last_acquired_date: "2024-01-03T08:24:19",
    },
    {
      owner_address: "0x33898903C17B2B4cf37782535691baEbC744E590",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:18:01",
      last_acquired_date: "2024-01-03T08:18:01",
    },
    {
      owner_address: "0x3647B248A8827BB4DA01a3C4c8FEB8D0F7c3982c",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2022-12-08T03:58:04",
      last_acquired_date: "2022-12-08T03:58:04",
    },
    {
      owner_address: "0x3C9Fa48557A805f7354383B18cB07E144Fdee1e1",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:25:11",
      last_acquired_date: "2024-01-03T08:25:11",
    },
    {
      owner_address: "0x4274EddCae1858fd721796675043d25dC90D4759",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:30:07",
      last_acquired_date: "2024-01-03T08:30:07",
    },
    {
      owner_address: "0x4A46487BAE0d24514601aC453fCa9950cf40E5bD",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:20:05",
      last_acquired_date: "2024-01-03T08:20:05",
    },
    {
      owner_address: "0x4e16c6D4aB2648b18F921ECF5ee2a8C2ebA78F31",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:28:09",
      last_acquired_date: "2024-01-03T08:28:09",
    },
    {
      owner_address: "0x4f5Fe9E490515dFE250429c1F082a131Ba2D4b27",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:22:39",
      last_acquired_date: "2024-01-03T08:22:39",
    },
    {
      owner_address: "0x4Fc4A9F47ecB8AEF1Be1f4D8b95A284c3a526c51",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:29:41",
      last_acquired_date: "2024-01-03T08:29:41",
    },
    {
      owner_address: "0x5bd07009adc46962cF2EEE9ce93D4EDF201C680c",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:27:57",
      last_acquired_date: "2024-01-03T08:27:57",
    },
    {
      owner_address: "0x6148b45C0B78d9A6D143Fe3C87D2976e5B3acE16",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:24:39",
      last_acquired_date: "2024-01-03T08:24:39",
    },
    {
      owner_address: "0x665F983d6848A3c9c4C684c232c6628A0d928BA9",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-03-20T03:50:24",
      last_acquired_date: "2024-03-20T03:50:24",
    },
    {
      owner_address: "0x694E9f01A758ea025e912E70a2380E19709f85a9",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:21:43",
      last_acquired_date: "2024-01-03T08:21:43",
    },
    {
      owner_address: "0x6cfbA969A424baC0f18d1CA674f34B8B2907bb5f",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:19:09",
      last_acquired_date: "2024-01-03T08:19:09",
    },
    {
      owner_address: "0x765a16ca391A6b9249cfA65bf2D14C38722198e3",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:26:19",
      last_acquired_date: "2024-01-03T08:26:19",
    },
    {
      owner_address: "0x7D0bdfC75D51248bB9Fcfe3DA64a81Ce7449BdBe",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:19:21",
      last_acquired_date: "2024-01-03T08:19:21",
    },
    {
      owner_address: "0x7F36b635256fB1Fe36c471f07e5657363FE5AbD8",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:25:43",
      last_acquired_date: "2024-01-03T08:25:43",
    },
    {
      owner_address: "0x7f515B4f7b0B01Fc66fad2C1f399e696446F8BF8",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:22:25",
      last_acquired_date: "2024-01-03T08:22:25",
    },
    {
      owner_address: "0x85DEF423Aa19239CAe527963fB131a14e5Cb4bba",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:28:43",
      last_acquired_date: "2024-01-03T08:28:43",
    },
    {
      owner_address: "0x89B915b8ad54861A8587715d8c0CB153f1490949",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:29:01",
      last_acquired_date: "2024-01-03T08:29:01",
    },
    {
      owner_address: "0x8DE00d892d0C57450ace097B2D90Af719a638372",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:24:07",
      last_acquired_date: "2024-01-03T08:24:07",
    },
    {
      owner_address: "0x919eF375b3B26ff90E963366F8F0ca674f0D9CF9",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:24:29",
      last_acquired_date: "2024-01-03T08:24:29",
    },
    {
      owner_address: "0x93e79cC5a42F12ddfe73262FFb1f9535E263b27B",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T06:47:36",
      last_acquired_date: "2024-01-03T06:47:36",
    },
    {
      owner_address: "0x9947E514D9Dfbbb19Eec41F3561580F50d4EdADE",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:21:15",
      last_acquired_date: "2024-01-03T08:21:15",
    },
    {
      owner_address: "0xA16570e75333732F43265D6d3e30718E0c85f65b",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:26:43",
      last_acquired_date: "2024-01-03T08:26:43",
    },
    {
      owner_address: "0xA3e545Daf1D6f1c3fb2CB0CBDaE64bC56c7247c2",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:25:55",
      last_acquired_date: "2024-01-03T08:25:55",
    },
    {
      owner_address: "0xaaa65c9feBAc57214476D08ba59982c9749b5310",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:29:49",
      last_acquired_date: "2024-01-03T08:29:49",
    },
    {
      owner_address: "0xaf5B31F4476ef41C7121a5b71Ce5D4AC13Fc87E6",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:29:59",
      last_acquired_date: "2024-01-03T08:29:59",
    },
    {
      owner_address: "0xb5842ec27b26Bb50FaF3E7543b4085431Df50dB5",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2022-12-07T10:06:48",
      last_acquired_date: "2022-12-07T10:06:48",
    },
    {
      owner_address: "0xb6F4AE08901cEB98eb6535e4A1f12eCB14359b79",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:29:13",
      last_acquired_date: "2024-01-03T08:29:13",
    },
    {
      owner_address: "0xBDcE8281e029E173d499bb99953663F43996B291",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:21:59",
      last_acquired_date: "2024-01-03T08:21:59",
    },
    {
      owner_address: "0xC015C8baC3D852caab0ced3754372B9dbCa7A678",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:26:27",
      last_acquired_date: "2024-01-03T08:26:27",
    },
    {
      owner_address: "0xc370bC7968aC6E4081524105e37509027084d360",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:22:13",
      last_acquired_date: "2024-01-03T08:22:13",
    },
    {
      owner_address: "0xCa751ab079D4688A6D0a59C506e99d275c93fC4e",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:24:47",
      last_acquired_date: "2024-01-03T08:24:47",
    },
    {
      owner_address: "0xd3E6FAcfbc7D3e5176e11DC12d619307795Ef067",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:20:17",
      last_acquired_date: "2024-01-03T08:20:17",
    },
    {
      owner_address: "0xd4745D5811D9Baed751222f4cbBFbf12aE6C091E",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:19:43",
      last_acquired_date: "2024-01-03T08:19:43",
    },
    {
      owner_address: "0xDA224D2B42D08B63D5510D096720e5c893Ec5302",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:29:23",
      last_acquired_date: "2024-01-03T08:29:23",
    },
    {
      owner_address: "0xE75237DFaBD8b1a2879Cbd7EAa70B3e28821F931",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:26:09",
      last_acquired_date: "2024-01-03T08:26:09",
    },
    {
      owner_address: "0xE8ec6F51D97B5e2Dcb288B1f80aBb08F0BCCf116",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:29:31",
      last_acquired_date: "2024-01-03T08:29:31",
    },
    {
      owner_address: "0xea1ddE19791527dEBf674490B5FACae0FF37EdAC",
      quantity: 1,
      quantity_string: "1",
      first_acquired_date: "2024-01-03T08:28:29",
      last_acquired_date: "2024-01-03T08:28:29",
    },
  ],
  contract: {
    type: "ERC1155",
    name: "OpenSea Collections",
    symbol: "OPENSTORE",
    deployed_by: "0x5b3256965e7C3cF26E11FCAf296DfC8807C01073",
    deployed_via_contract: null,
    owned_by: "0x8ca72E236Bc1De2350E12C86C07F66D07C5D2562",
    has_multiple_collections: true,
  },
  collection: {
    collection_id: "004641a6f382ecc7166f3cf899748b26",
    name: "Chord Hero Music Gallery",
    description:
      "The Chord Hero Music Gallery Pass is your quick ticket to showcasing your artwork at the Chord Hero Music Gallery on The Sandbox through its Sandbox Experience.\n\nThe Sandbox Experience offers schools a way to bring their students into the metaverse through its Sandbox Experience.  The set includes the Maker Ukulele Set - a DIY ukulele set packaged with ChordVentures, the music learning game, plus access to instructions on voxelizing their physically designed ukuleles for Chord Hero to mint and showcase at the Chord Hero Music Gallery.\n\nThe holder of this NFT can join the Sandbox Experience for free by only purchasing the standalone Chord Hero Maker Ukulele Set.  Plus, until the product is made available to the public, the pass gifts the holder an exclusive opportunity to participate.\n\nEach NFT holder is entitled to the 1-month of showcasing on the Chord Hero Music Gallery on The Sandbox.\n\nSee what the Sandbox Experience is like at:\nhttp://www.chordhero.com/sandboxexperiencetrailer",
    image_url:
      "https://lh3.googleusercontent.com/ulAh2fEZtrTM0uFxWzLnKLqH4xi5Gz-PYDTyTJKUNsSBFaFijcgfwPbp-O4RgDtOMENekGk2KaNULkUA32lVMC8AHMZdE018o2Sr",
    banner_image_url:
      "https://lh3.googleusercontent.com/b_517cRfBlBIRUzPm47wE9aoMuBYal2OlhOZeDWAPprAyPjNXEUP3210tOiSDlpM2QnQpKnGmT3OJFe2rPZSm5VI03QChlSeelE=w2500",
    category: "memberships",
    is_nsfw: false,
    external_url: "http://www.chordhero.com/sandboxexperience",
    twitter_username: null,
    discord_url: null,
    instagram_username: null,
    medium_username: null,
    telegram_url: null,
    marketplace_pages: [
      {
        marketplace_id: "opensea",
        marketplace_name: "OpenSea",
        marketplace_collection_id: "chord-hero-music-gallery",
        nft_url:
          "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/78655756395228556566244677429854963634410546405516720580801289032955980677620",
        collection_url:
          "https://opensea.io/collection/chord-hero-music-gallery",
        verified: false,
      },
    ],
    metaplex_mint: null,
    metaplex_candy_machine: null,
    metaplex_first_verified_creator: null,
    floor_prices: [],
    top_bids: [],
    distinct_owner_count: 55,
    distinct_nft_count: 1,
    total_quantity: 500,
    chains: ["polygon"],
    top_contracts: ["polygon.0x2953399124f0cbb46d2cbacd8a89cf0599974963"],
    collection_royalties: [
      {
        source: "opensea",
        total_creator_fee_basis_points: 700,
        recipients: [
          {
            address: "0xADE5949A14DF4ef9c966F94668B6E6A1861dCED4",
            percentage: 100.0,
            basis_points: 700,
          },
        ],
      },
    ],
  },
  last_sale: null,
  first_created: {
    minted_to: "0xADE5949A14DF4ef9c966F94668B6E6A1861dCED4",
    quantity: 500,
    quantity_string: "500",
    timestamp: "2022-12-05T09:11:25",
    block_number: null,
    transaction: null,
    transaction_initiator: "0xADE5949A14DF4ef9c966F94668B6E6A1861dCED4",
  },
  rarity: { rank: null, score: null, unique_attributes: null },
  royalty: [
    {
      source: "opensea",
      total_creator_fee_basis_points: 700,
      recipients: [
        {
          address: "0xADE5949A14DF4ef9c966F94668B6E6A1861dCED4",
          percentage: 100.0,
          basis_points: 700,
        },
      ],
    },
  ],
  extra_metadata: {
    attributes: [],
    image_original_url:
      "https://openseauserdata.com/files/22f3434bbb9e7ff7dd24883652455cf5.png",
    animation_original_url: null,
    metadata_original_url:
      "https://api.opensea.io/api/v2/chain/matic/contract/0x2953399124f0cbb46d2cbacd8a89cf0599974963/nfts/78655756395228556566244677429854963634410546405516720580801289032955980677620",
  },
};

export default function Analytics() {
  const [owners, setOwners] = useState<any[]>([]);

  useEffect(() => {
    console.log(dummyData);
    if (dummyData.owners) {
      setOwners(dummyData.owners);
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        style={{
          marginTop: 30,
          marginBottom: 20,
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
          Analytics
        </Typography>
      </Box>

      <Box
        style={{
          width: "100%",
        }}
      >
        <Button variant="outlined" style={{ marginRight: 10 }}>
          Chord Hero Music Gallery Pass
        </Button>
        <Button variant="outlined">Chord Hero Music Gallery Pass</Button>
      </Box>

      <Box
        style={{
          width: "100%",
          paddingTop: 20,
          gap: 10,
        }}
      >
        <Box style={{ width: "100%", gap: 10, marginBottom: 15 }}>
          <Typography style={{ fontSize: 18, fontWeight: "600" }}>
            {dummyData.name}
          </Typography>
          <Typography style={{ fontSize: 14, marginBottom: 15 }}>
            {dummyData.description}
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            <b>Chain:</b> {dummyData.chain}
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            <b>NFT ID:</b> {dummyData.nft_id}
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            <b>Contract Address:</b> {dummyData.contract_address}
          </Typography>
          <Typography style={{ fontSize: 14 }}>
            <b>Token ID:</b> {dummyData.token_id}
          </Typography>
        </Box>

        <Typography
          style={{ marginBottom: 10, fontWeight: "600", fontSize: 14 }}
        >
          Owners ({dummyData.owner_count})
        </Typography>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="Chord Hero NFT Owners List Table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Wallet Address</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Date of First Acquisition</TableCell>
                <TableCell align="right">Date of Last Acquisition</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {owners.map((owner) => (
                <TableRow
                  key={owner.owner_address}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {owner.owner_address}
                  </TableCell>
                  <TableCell align="right">{owner.quantity}</TableCell>
                  <TableCell align="right">
                    {owner.first_acquired_date}
                  </TableCell>
                  <TableCell align="right">
                    {owner.last_acquired_date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
