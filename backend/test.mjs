import dotenv from "dotenv";
import petfinder from "@petfinder/petfinder-js";

dotenv.config();

const petClient = new petfinder.Client({
  apiKey: process.env.API_KEY,
  secret: process.env.SECERT_KEY,
});

petClient.animal
  .search()
  .then(function (response) {
    // Do something with `response.data.animals`
    return response.data.animals;
  })
  .catch(function (error) {
    throw Error(error);
    // Handle the error
  });

export default petClient;
