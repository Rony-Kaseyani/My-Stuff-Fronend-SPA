import React, { Component } from 'react';

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      product: '',
      description: '',
      condition: '',
	  price: '',
	  city: '',
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get form data out of state
    const { category, product, description, condition, price, city } = this.state

	fetch('items/add', {
	  method: "POST",
	  headers: {
		'Content-type': 'application/json'
	  },
	  body: JSON.stringify(this.state)
	})
	.then((response) => response.json())
	.then((result) => {
	  console.log(result)
	})
}  	
  render() {
        const { classes } = this.props;
        const { category, product, description, condition, price, city } = this.state
		
    return (
<div>
    <h2>Add Your Item For Sale</h2>
    <form action="/items/add" method="post">
        <div className="form_settings">
            <p><span>Select Item Category:</span>
                <select id="id" name="category">
                    <option value="category">--Select Category--</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="motors">Motors</option>
                    <option value="books">Books</option>
                    <option value="sports">Sports</option>
                </select>
            </p>
            <br />
            <p><span>Item Name:</span><input type="text" name="product" defaultValue="" /></p>
            <br />
            <p><span>Item Description and Features:</span><textarea rows="8" cols="50" name="description"></textarea></p>
            <br />
            <p>Condition:</p>
            <p><span>New</span><input type="radio" name="condition" id="new" /></p>
            <p><span>Used</span><input type="radio" name="condition" id="used" /></p>
            <p><span>Item Price:</span><input type="text" name="price" defaultValue="" />£</p>
            <br />
            <p><span>City where Item is being sold from:</span><input type="text" name="city" defaultValue="" /></p>
            <br />
            <br />
            <p><span>Upload Item Image</span><input type="file" name="image" id="image-select" /></p>
            <br />

            <p style={{"padding-top": "15px"}}><span>&nbsp;</span><input className="submit" type="submit" name="name" defaultvalue="Add Item" /></p>
        </div>
    </form>
</div>
    );
  }
}

export default ItemForm;
