import React from "react";

import { HeroLogin } from "./components/";
import { Filters } from "./components/Forms/";

import { getAllPets } from "api/";

import capitalize from "lodash.capitalize";
import { Button } from "components/Button";

import "App.css";
import "Loader.css";

export class App extends React.Component {
  state = {
    // Will be either dogs or cats
    activeFilter: "",
    pets: [],
  };

  async componentDidMount() {
    try {
      const { animals } = await getAllPets();
      this.setState({ pets: animals });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (selectedFilter) => {
    /**
     * selectedFilter will be "Cats" of "Dogs"
     * Simply slice of the 's' and make sure it's capitalized to match 'type' in pets list
     */
    this.setState({ activeFilter: capitalize(selectedFilter).slice(0, -1) });
  };

  renderCards = (animals) =>
    animals.map((animal) => {
      return (
        <div className="App card columns is-multiline" key={animal.id}>
          <div className="column">
            <figure className="image">
              <img
                className="CardImg"
                src={
                  animal.primary_photo_cropped
                    ? animal.primary_photo_cropped.small
                    : "https://via.placeholder.com/150"
                }
                alt={`${animal.size}
                ${animal.species}`}
              />
              <div className="Info">
                <figcaption className="card-content">{animal.name}</figcaption>
                <figcaption className="card-content">
                  {animal.breeds.primary}
                </figcaption>
                <figcaption className="card-content">
                  {animal.contact.address.city}, {animal.contact.address.state}
                </figcaption>
                <div>
                  <a href={`${animal.url}`}>
                    <button className="Learn button" type="button">
                      Learn More!
                    </button>
                  </a>
                </div>
              </div>
            </figure>
          </div>
        </div>
      );
    });

  render() {
    const activeFilter = this.state.activeFilter;
    const filteredPets = activeFilter
      ? this.state.pets.filter(
          ({ type }) => console.log(type, activeFilter) || type === activeFilter
        )
      : this.state.pets;

    return this.state.pets.length ? (
      <div className="container">
        <HeroLogin />
        <Filters onChange={this.handleChange} />
        {this.renderCards(filteredPets)}
      </div>
    ) : (
      <div className="loader">Loading...</div>
    );
  }
}
