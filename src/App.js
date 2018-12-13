/// dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// pages
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Category from "./pages/Category";
// components
import MenuItem from "./components/MenuItem";

/// styles
import "./css/App.css";

class App extends Component {
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
          </div>
          <div id="site_content">
            <div id="content">
              <Switch>
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
