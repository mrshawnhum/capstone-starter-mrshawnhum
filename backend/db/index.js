import { client } from "./client";

export const getAllUsers = async () => {
  try {
    const cursor = await client.db("users").collection("users").find();
    const results = await cursor.toArray();
    await cursor.close();
    return results;
  } catch (e) {
    throw Error(e);
  }
};
