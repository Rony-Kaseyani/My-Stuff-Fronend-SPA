import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
<div>
        <h1>Contact Us</h1>
        <p>Leave us a message dear friend:</p>
        <form action="#" method="post">
          <div className="form_settings">
            <p><span>Name</span><input className="contact" type="text" name="your_name" value="" /></p>
            <p><span>Email Address</span><input className="contact" type="text" name="your_email" value="" /></p>
            <p><span>Message</span><textarea className="contact textarea" rows="8" cols="50" name="your_enquiry"></textarea></p>
            <p style={{"padding-top": "15px"}}><span>&nbsp;</span><input className="submit" type="submit" name="contact_submitted" value="Send" /></p>
          </div>
        </form>
</div>
    );
  }
}

export default ContactForm;