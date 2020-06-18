import { client } from "./client";

export const getAllUsers = async () => {
  try {
    await client.connect();

    const cursor = await client.db("users").collection("users.test").find();

    return await cursor.toArray();
  } catch (e) {
    throw Error(e);
  } finally {
    await client.close();
  }
};
