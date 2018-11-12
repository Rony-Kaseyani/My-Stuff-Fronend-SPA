import React, { Component } from 'react';

class DataTable extends Component {
  render() {
    return (
	<div>
	{this.props.selectedCategory}
	</div>

    );
  }
}

export default DataTable;
