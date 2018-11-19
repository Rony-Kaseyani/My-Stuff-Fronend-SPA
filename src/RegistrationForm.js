import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get form data out of state
    const { first_name, last_name, email, password } = this.state

	fetch('users/register', {
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
        const { first_name, last_name, email, password } = this.state

    return (
<div>
        <h2>Register</h2>
        <form action="/users/register" method="post">
          <div className="form_settings">
			<p><span>First Name:</span><input type="text" name="first_name" defaultValue="" /></p>
			<br/>
			<p><span>Last Name:</span><input type="text" name="last_name" defaultValue="" /></p>
			<br/>			
			<p><span>Email:</span><input type="email" name="email" defaultValue="" /></p>
			<br/>
			<p><span>Password:</span><input type="password" name="password" defaultValue="" /></p>
			<br/>
            <p style={{"padding-top": "15px"}}><span>&nbsp;</span><input className="submit" type="submit" name="name" value="Register" /></p>
          </div>
        </form>
</div>
    );
  }
}

export default RegistrationForm;
