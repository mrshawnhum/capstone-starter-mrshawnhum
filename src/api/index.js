import { Client } from "@petfinder/petfinder-js";

export const getAllPets = async () => {
<<<<<<< HEAD
  const client = await Client({
=======
  const pf = new Client({
>>>>>>> 0859c1ec68cedb37ddaca3e6305213ac6917ff90
    apiKey: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_SECRET_KEY,
  });

  console.log(await pf.animal.search());
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
