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

export const loginUser = async (user) => {
  try {
    return await client.db("users").collection("users").findOne(user);
  } catch (err) {
    throw new Error(err);
  }
};

export const registerUser = async (newUser) => {
  try {
    return await client.db("users").collection("users").insertOne(newUser);
  } catch (err) {
    throw new Error(err);
  }
};
