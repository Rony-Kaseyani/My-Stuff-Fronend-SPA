import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
    const { email, password } = this.state

	fetch('users/login', {
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
        const { email, password } = this.state
    return (
<div>
        <h2>Login</h2>
        <form action="/users/login" method="post">
          <div className="form_settings">
			<p><span>Email:</span><input type="email" name="email" defaultValue="" /></p>
			<br/>
			<p><span>Password:</span><input type="password" name="password" defaultValue="" /></p>
			<br/>
            <p style={{"padding-top": "15px"}}><span>&nbsp;</span><input className="submit" type="submit" name="name" defaultValue="Login" /></p>
          </div>
        </form>
</div>
    );
  }
}

export default LoginForm;
