import React from "react";

import { HeroLogin } from "./components/";
import { Filters } from "./components/Forms/";

import { getAllPets } from "api/";

export class App extends React.Component {
  state = { pets: [] };

  async componentDidMount() {
    try {
      const { animals } = await getAllPets();
      this.setState({ pets: animals });
    } catch (error) {
      console.error(error);
    }
  }

  renderCards = (animals) =>
    animals.map((animal) => {
      return (
        <div className="card" key={animal.id}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={
                  animal.primary_photo_cropped
                    ? animal.primary_photo_cropped.small
                    : "https://via.placeholder.com/150"
                }
                alt={`${animal.size} - ${animal.species}`}
              />
            </figure>
          </div>

          <div className="content">{animal.description}</div>
        </div>
      );
    });

  render() {
    return (
      <div className="container">
        <HeroLogin />
        <Filters />
        {this.renderCards(this.state.pets)}
      </div>
    );
  }
}
