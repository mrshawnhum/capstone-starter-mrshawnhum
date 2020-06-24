import React from "react";

import { HeroLogin } from "./components/";
import { Filters } from "./components/Forms/";

import { getAllPets } from "api/";

import capitalize from "lodash.capitalize";

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
    const activeFilter = this.state.activeFilter;
    const filteredPets = activeFilter
      ? this.state.pets.filter(
          ({ type }) => console.log(type, activeFilter) || type === activeFilter
        )
      : this.state.pets;

    return (
      <div className="container">
        <HeroLogin />
        <Filters onChange={this.handleChange} />
        {this.renderCards(filteredPets)}
      </div>
    );
  }
}
