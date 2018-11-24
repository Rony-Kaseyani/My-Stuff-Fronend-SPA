import React, { Component } from 'react';

class DataTable extends Component {
	constructor(props){
	super(props)
		this.state = {items: {products: []} }
	}
  componentDidUpdate() {
    fetch('/items/products')
      .then(response => response.json())
      .then(data => this.setState({items: data }))
  }	
  
  shouldComponentUpdate(nextProps, nextState) {
	  return this.props.selectedCategory != nextProps.selectedCategory
	  || this.state.items.products.length == 0
	  || nextState.items.products[0].id != this.state.items.products[0].id
  }
	
  render() {
	var rows = []

	rows = this.state.items.products.map((item) => {
		var imagePath = "/product_images/"+item.image_path
		return <tr key={item.id}><td><img src={imagePath} alt="Product Image" width="42" height="42"/></td><td><a onClick={()=> {this.props.onProductSelect(item.id)}}>{item.product}</a></td><td><b>£</b>{item.price}</td></tr>
	})
    return (
	<div>
	{this.props.selectedCategory}
	<table>
	<tbody>
	{rows}
	</tbody>
	</table>
	</div>

    );
  }
}

export default DataTable;
