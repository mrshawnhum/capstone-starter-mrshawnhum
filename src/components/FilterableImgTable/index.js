import PropTypes from "prop-types";
import React from "react";

import { ImgTable as Img } from "./ImgTable";

import { getAllPets } from "api/";

export class FilterableImgTable extends React.Component {
  state = { pets: [] };

  async componentDidMount() {
    try {
      const { animals } = await getAllPets();
      this.setState({ pets: animals });
    } catch (error) {
      console.error(error);
    }
  }

  renderPics = (animals) => {
    return animals.map(({ photos, name }, i) => {
      if (photos[0]) {
        return <img src={photos[0].medium} alt={name} key={i} />;
      }
    });
  };
  //      .filter(({ type }) => type === "Dog");

  render() {
    return (
      <div>
        {this.state.pets.length ? (
          this.renderPics(this.state.pets)
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}
