import { Client } from "@petfinder/petfinder-js";
import dotenv from "dotenv";

dotenv.config();

export const getAllPets = async () => {
  const pf = new Client({
    apiKey: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_SECRET_KEY,
  });

  return (await pf.animal.search()).data;
};

/*
formData - authorize user using credentials passed in
*/
export const authenticateUser = async (formData) => {
  const resp = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(formData),
  });
};
