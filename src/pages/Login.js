import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.token);
      });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form_settings">
            <p>
              <span>Email:</span>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </p>
            <br />
            <p>
              <span>Password:</span>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </p>
            <br />
            <p style={{ paddingTop: "15px" }}>
              <span>&nbsp;</span>
              <input
                className="submit"
                type="submit"
                name="name"
                defaultValue="Login"
              />
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
