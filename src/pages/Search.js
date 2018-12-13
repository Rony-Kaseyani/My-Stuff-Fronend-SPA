import React, { Component } from "react";
import queryString from "query-string";
import DataTable from "../components/DataTable";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  fetchItems() {
    const values = queryString.parse(this.props.location.search);
    const urlToFetch = "/search?q=" + values.q;
    fetch(urlToFetch)
      .then(response => response.json())
      .then(data => this.setState({ items: data.list }));
  }

  componentDidMount() {
    this.fetchItems();
  }

  componentDidUpdate(prevProps) {
    const oldCategory = prevProps.match.params.query;
    const newCategory = this.props.match.params.query;
    if (newCategory !== oldCategory) this.fetchItems();
  }

  render() {
    return (
      <DataTable
        items={this.state.items}
        title="Search"
        location={this.props.location}
      />
    );
  }
}

export default Search;
