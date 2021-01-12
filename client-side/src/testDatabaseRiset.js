import React, { Component } from "react";
import Axios from "axios";
export class testDatabaseRiset extends Component {
  state = {
    riset: [],
  };

  componentDidMount() {
    Axios.get("http://localhost:3001/uploadriset").then((response) =>
      this.setState({
        riset: response.data,
      })
    );
    console.log(this.state);
  }
  render() {
    return <div>Daftar Riset</div>;
  }
}

export default testDatabaseRiset;
