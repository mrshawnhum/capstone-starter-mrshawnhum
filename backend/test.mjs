import dotenv from "dotenv";
import petfinder from "@petfinder/petfinder-js";

dotenv.config();

const petClient = new petfinder.Client({
  apiKey: process.env.API_KEY,
  secret: process.env.SECERT_KEY,
});

petClient.animal.search().then((resp) => {
  resp.data.animals.forEach(function (animal) {
    console.log(`--${animal.name} age: ${animal.age}`);
  });
});

petClient.animal
  .search({
    type: "Dog",
    breed: "pitbull",
    page: 1,
    limit: 100,
  })
  .then(function (response) {
    // Do something with `response.data.animals`
    return response.data.animals;
  })
  .catch(function (error) {
    console.error(error);
    // Handle the error
  });

export default petClient;
