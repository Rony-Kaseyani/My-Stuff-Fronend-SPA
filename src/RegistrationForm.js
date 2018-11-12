import React, { Component } from 'react';

class RegistrationForm extends Component {
  render() {
    return (
<div>
        <h2>Register</h2>
        <form action="#" method="post">
          <div className="form_settings">
			<p><span>First Name:</span><input type="text" name="firstname" value="" /></p>
			<br/>
			<p><span>Last Name:</span><input type="text" name="lastname" value="" /></p>
			<br/>			
			<p><span>Email:</span><input type="email" name="email" value="" /></p>
			<br/>
			<p><span>Password:</span><input type="password" name="password" value="" /></p>
			<br/>
            <p style={{"padding-top": "15px"}}><span>&nbsp;</span><input className="submit" type="submit" name="name" value="Register" /></p>
          </div>
        </form>
</div>
    );
  }
}

export default RegistrationForm;
