import PropTypes from "prop-types";
import React from "react";

import { ImgTable as Img } from "./ImgTable";

import { getAllPets } from "api/";

export class FilterableImgTable extends React.Component {
  state = { animals: [] };

  async componentDidMount() {
    try {
      this.setState({ animals: await getAllPets() });
    } catch (error) {
      console.error(error);
    }
  }

  renderPics = () =>
    this.state.animals.map(({ photos, name }, i) => (
      <td key={i}>
        <img src={photos.medium} alt={name} />
      </td>
    ));
  //      .filter(({ type }) => type === "Dog");

  render() {
    return (
      <table>
        <tbody>
          <tr>{this.renderPics()}</tr>
        </tbody>
      </table>
    );
  }
}
