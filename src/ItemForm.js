import React, { Component } from 'react';

class ItemForm extends Component {
  render() {
    return (
<div>
        <h2>Add Your Item For Sale</h2>
        <form action="#" method="post">
          <div className="form_settings">
            <p><span>Select Item Category:</span>
				<select id="id" name="name">
				  <option value="category">--Select Category--</option>
				  <option value="electronics">Electronics</option>
				  <option value="fashion">Fashion</option>
				  <option value="motors">Motors</option>
				  <option value="books">Books</option>
				  <option value="sports">Sports</option>
				</select>			
			</p>
			<br/>
			<p><span>Item Name:</span><input type="text" name="itemname" value="" /></p>
			<br/>
            <p><span>Item Description and Features:</span><textarea rows="8" cols="50" name="name"></textarea></p>
			<br/>
			<p>Condition:</p>
			<p><span>New</span><input type="radio" name="condition" id="new"/></p>
			<p><span>Used</span><input type="radio" name="condition" id="used"/></p>
			<p><span>Item Price:</span><input type="text" name="itemprice" value=""/>&nbsp; <b>£</b></p>
			<br/>
			<p><span>City where Item is being sold from:</span><input type="text" name="cityname" value=""/></p>
			<br/>
			<br/>
			<p><span>Upload Photo:</span><input type="file" name="upload" id="file-select"/></p>
			<br/>
			<p><span>Upload Video/Audio:</span><input type="file" name="upload" id="file-select"/></p>
			<br/>
            <p style={{"padding-top": "15px"}}><span>&nbsp;</span><input className="submit" type="submit" name="name" value="Add Item" /></p>
          </div>
        </form>
</div>
    );
  }
}

export default ItemForm;
