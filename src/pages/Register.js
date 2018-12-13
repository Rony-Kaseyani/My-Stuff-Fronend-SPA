import React, { Component } from "react";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
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

    fetch("/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => console.log(response.status));
  };

  render() {
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form_settings">
            <p>
              <span>First Name:</span>
              <input
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.onChange}
              />
            </p>
            <br />
            <p>
              <span>Last Name:</span>
              <input
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.onChange}
              />
            </p>
            <br />
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
                value="Register"
              />
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
