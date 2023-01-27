import fetch, { Headers, Request } from "node-fetch";
import { CollectionDetail, RootObject } from "./Collection.types.mjs";

export const getCollection = (collectionId): Promise<CollectionDetail> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("collectioncount", "1");
  urlencoded.append("publishedfileids[0]", collectionId);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  } as unknown as Request;

  return fetch(
    "https://api.steampowered.com/ISteamRemoteStorage/GetCollectionDetails/v1",
    requestOptions
  )
    .then((res) => res.json())
    .then((res: RootObject) => res.response.collectiondetails[0]);
};

export const parseCollectionToIds = (
  collection: CollectionDetail
): string[] => {
  return collection.children.map((mod) => mod.publishedfileid);
};
