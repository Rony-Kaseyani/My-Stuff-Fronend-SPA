import React, { Component } from "react";
import DataTable from "../components/DataTable";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    fetch("/items/")
      .then(response => response.json())
      .then(data => this.setState({ items: data.products }));
  }

  render() {
    return <DataTable items={this.state.items} />;
  }
}

export default Homepage;
