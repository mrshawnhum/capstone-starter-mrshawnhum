import { Client } from "@petfinder/petfinder-js";

export const getAllPets = async () => {
  const client = await Client({
    apiKey: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_SECRET_KEY,
  });

  const results = await client.animal.search();
  console.log(results.data.animals);
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
