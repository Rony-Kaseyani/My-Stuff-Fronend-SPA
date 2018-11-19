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
		return <tr key={item.id}><td>{item.product}</td></tr>
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
