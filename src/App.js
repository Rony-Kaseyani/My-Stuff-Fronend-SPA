/// dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// pages
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import AddProduct from "./pages/AddProduct";
// components
import MenuItem from "./components/MenuItem";

/// styles
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  searchOnChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  searchSubmit = e => {
    e.preventDefault();
    window.location.href = `/search?q=${this.state.query}`;
  };

  render() {
    return (
      <Router>
        <div id="main">
          <div id="header">
            <div id="logo">
              <div id="logo_text">
                <h1>
                  <Link to="/">
                    My<span className="logo_color">Stuff</span>
                  </Link>
                </h1>
                <h2>Classified Ads Web App</h2>
              </div>
            </div>
            <div id="menubar">
              <ul id="menu">
                <MenuItem pathname="/">Home</MenuItem>
                <MenuItem pathname="/products/electronics">
                  Electronics
                </MenuItem>
                <MenuItem pathname="/products/fashion">Fashion</MenuItem>
                <MenuItem pathname="/products/motors">Motors</MenuItem>
                <MenuItem pathname="/products/books">Books</MenuItem>
                <MenuItem pathname="/products/sports">Sports</MenuItem>
                <MenuItem pathname="/products/furniture">Furniture</MenuItem>
                <MenuItem pathname="/products/cookware">Cookware</MenuItem>
                <MenuItem pathname="/products/toys">Toys</MenuItem>
                <MenuItem pathname="/products/artwork">Artwork</MenuItem>
              </ul>
            </div>
            <div className="topright">
              <Link to="/login" id="topright" className="topright-item">
                Login
              </Link>
              &nbsp;
              <Link to="/register" id="topright" className="topright-item">
                Register
              </Link>
            </div>
          </div>
          <div id="site_content">
            <div className="sidebar">
              <h3>Search</h3>
              <form onSubmit={this.searchSubmit}>
                <p>
                  <input
                    className="search"
                    type="text"
                    name="query"
                    value={this.state.query}
                    onChange={this.searchOnChange}
                    placeholder="Search MyStuff"
                  />
                  <input className="search-logo" type="submit" value="Search" />
                </p>
              </form>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/product/add">Add product</Link>
                </li>
              </ul>
            </div>
            <div id="content">
              <Switch>
                <Route path="/search" component={Search} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/product/add" component={AddProduct} />
                <Route path="/products/:category" component={Category} />
                <Route path="/product/:id" component={Product} />
                <Route path="/" exact component={Homepage} />
              </Switch>
            </div>
          </div>
          <div id="footer">Copyright &copy; 2018 MyStuff</div>
        </div>
      </Router>
    );
  }
}

export default App;
