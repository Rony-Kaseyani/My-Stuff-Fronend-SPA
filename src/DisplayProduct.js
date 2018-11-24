import React, { Component } from 'react';

class DisplayProduct extends Component {
	constructor(props){
	super(props)
		this.state = {product: "", description: "", condition: "", price: "", city: "", image_path: ""}
	}
	
    componentDidMount() {
    fetch('/items/products/'+this.props.productId)
      .then(response => response.json())
      .then(data => this.setState(data.product))
  }	
  
  shouldComponentUpdate(nextProps, nextState) {
	  return this.state.product != nextState.product
  }
  
  render() {
	var imagePath = "/product_images/"+this.state.image_path  
	console.log(this.state)  
    return (
<div>
        <h2>Product Details</h2>
		<p><b>Product Name:</b>&nbsp;{this.state.product}</p>
		<br />
		<br />
		<img src={imagePath} alt="Product Image" width="200" height="160"/>
		<br />
		<br />
		<p><b>Description:</b>&nbsp;{this.state.description}</p>
		<p><b>Condition:</b>&nbsp;{this.state.condition}</p>
		<p><b>Asking Price:</b>&nbsp;£{this.state.price}</p>
		<p><b>City where item is available:</b>&nbsp;{this.state.city}</p>
</div>
    );
  }
}

export default DisplayProduct;
