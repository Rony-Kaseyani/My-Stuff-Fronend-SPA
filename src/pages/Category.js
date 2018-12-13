import React, { Component } from "react";
import DataTable from "../components/DataTable";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  fetchItems() {
    const urlToFetch = "/items/" + this.props.match.params.category;
    fetch(urlToFetch)
      .then(response => response.json())
      .then(data => this.setState({ items: data.list }));
  }

  componentDidMount() {
    this.fetchItems();
  }

  componentDidUpdate(prevProps) {
    const oldCategory = prevProps.match.params.category;
    const newCategory = this.props.match.params.category;
    if (newCategory !== oldCategory) this.fetchItems();
  }

  render() {
    return (
      <DataTable
        items={this.state.items}
        title={this.props.match.params.category}
        location={this.props.location}
      />
    );
  }
}

export default Category;
