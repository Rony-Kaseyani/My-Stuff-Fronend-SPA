import React, { Component, Fragment } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      condition: "",
      price: "",
      city: "",
      seller: "",
      publishedDate: "",
      ratingsAvg: "",
      ratingsCount: ""
    };
  }

  componentDidMount() {
    fetch("/items/product/" + this.props.match.params.id)
      .then(response => response.json())
      .then(data => this.setState(data));
  }

  render() {
    return (
      <Fragment>
        <h2>Product Details</h2>
        <p>
          <b>Product Name:</b>&nbsp;{this.state.title}
        </p>
        <img
          src={`https://source.unsplash.com/200x160/?${this.state.title.toLowerCase()}`}
          alt=""
          width="200"
          height="160"
        />
        <br />
        <br />
        <p>
          <b>Description:</b>&nbsp;{this.state.description}
        </p>
        <p>
          <b>Condition:</b>&nbsp;{this.state.condition}
        </p>
        <p>
          <b>Asking Price:</b>&nbsp;£{this.state.price}
        </p>
        <p>
          <b>City where item is available:</b>&nbsp;{this.state.city}
        </p>
        <p>
          <b>Seller:</b>&nbsp;{this.state.seller}
        </p>
        <p>
          <b>Published date:</b>&nbsp;{this.state.publishedDate}
        </p>
        <p>
          <b>Ratings:</b>&nbsp;{this.state.ratingsCount}
        </p>
        <p>
          <b>Average ratings:</b>&nbsp;
          {this.state.ratingsAvg === "NaN" ? 0 : this.state.ratingsAvg}
        </p>
      </Fragment>
    );
  }
}

export default Product;
