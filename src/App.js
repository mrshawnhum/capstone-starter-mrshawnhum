import React from "react";
import "./App.css";
import { Home } from "components";

export class App extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h1>test</h1>
          {<Home />}
        </div>
      </main>
    );
  }
}
