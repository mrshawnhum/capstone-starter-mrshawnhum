import PropTypes from "prop-types";
import React from "react";

import { Button } from "components/Button";

export const Card = ({ animal }) => (
  <div className="card column is-one-third" key={animal.id}>
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={
            animal.primary_photo_cropped
              ? animal.primary_photo_cropped.small
              : "https://source.unsplash.com/1600x900/?pets"
          }
          alt=""
        />
      </figure>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{animal.name}</p>
          <p className="subtitle is-6">{animal.breeds.primary}</p>
          <address>
            {animal.contact.address.city}, {animal.contact.address.state}
          </address>
        </div>
        <a href={`${animal.url}`}>
          <Button
            buttonClass="button is-link mt-5"
            buttonText="Find Out More!"
          ></Button>
        </a>
      </div>
    </div>
  </div>
);
Card.propTypes = {
  animal: PropTypes.object.isRequired,
};
