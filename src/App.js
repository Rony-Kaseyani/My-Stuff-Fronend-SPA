import React, { Component } from 'react';
import './App.css';
import DataTable from './DataTable'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import ContactForm from './ContactForm'
import ItemForm from './ItemForm'

class App extends Component {
	constructor(props) {
		super(props)
		this.state={selectedCategory:"Home"}
		this.switchToTab=this.switchToTab.bind(this)
		this.openLoginForm=this.openLoginForm.bind(this)
		this.openRegistrationForm=this.openRegistrationForm.bind(this)
		this.openContactForm=this.openContactForm.bind(this)
		this.openItemForm=this.openItemForm.bind(this)
		this.setHomePage=this.setHomePage.bind(this)
	}

	switchToTab(tab) {
		this.setState({selectedCategory:tab})
		this.setState({loginFormOpen:false})
		this.setState({registrationFormOpen:false})
		this.setState({contactFormOpen:false})
		this.setState({itemFormOpen:false})
	}
	
	openLoginForm() {
		this.setState({loginFormOpen:true})
		this.setState({registrationFormOpen:false})
		this.setState({contactFormOpen:false})
		this.setState({itemFormOpen:false})
	}
	
	openRegistrationForm() {
		this.setState({registrationFormOpen:true})
		this.setState({loginFormOpen:false})
		this.setState({contactFormOpen:false})
		this.setState({itemFormOpen:false})
	}

	openContactForm() {
		this.setState({contactFormOpen:true})
		this.setState({loginFormOpen:false})
		this.setState({registrationFormOpen:false})
		this.setState({itemFormOpen:false})
	}

	openItemForm() {
		this.setState({itemFormOpen:true})
		this.setState({contactFormOpen:false})
		this.setState({loginFormOpen:false})
		this.setState({registrationFormOpen:false})
	}
	
	setHomePage() {
		this.setState({selectedCategory:"Home"})
		this.setState({loginFormOpen:false})
		this.setState({registrationFormOpen:false})
		this.setState({contactFormOpen:false})
		this.setState({itemFormOpen:false})
	}
	
  render() {
	 var content;
     if (this.state.loginFormOpen) {
		content = <LoginForm/>
	 }
     else if (this.state.registrationFormOpen) {
		content = <RegistrationForm/>
	 }
     else if (this.state.contactFormOpen) {
		content = <ContactForm/>
	 }
     else if (this.state.itemFormOpen) {
		content = <ItemForm/>
	 }	 	 
	 else {content = <DataTable selectedCategory={this.state.selectedCategory}/>}
    return (
  <div id="main">
    <div id="header">
      <div id="logo">
        <div id="logo_text">

          <h1><a href="index.html">My<span className="logo_color">Stuff</span></a></h1>
          <h2>Classified Ads Web App</h2>
        </div>
      </div>
      <div id="menubar">
        <ul id="menu">

  <li className={this.state.selectedCategory=="Home"?"selected":""}><a onClick={()=> {this.setHomePage()}}>Home</a></li>
          <li><a onClick={()=> {this.switchToTab("Electronics")}}>Electronics</a></li>
          <li><a onClick={()=> {this.switchToTab("Fashion")}}>Fashion</a></li>
          <li><a onClick={()=> {this.switchToTab("Motors")}}>Motors</a></li>
		  <li><a onClick={()=> {this.switchToTab("Books")}}>Books</a></li>
		  <li><a onClick={()=> {this.switchToTab("Sports")}}>Sports</a></li>
		  <li><a onClick={()=> {this.switchToTab("Cookware")}}>Cookware</a></li>
        </ul>
      </div>
		  <div className="topright">
			<a onClick={ ()=> {this.openLoginForm()}} id="topright">Login</a>&nbsp; &nbsp; &nbsp; 
			<a onClick={ ()=> {this.openRegistrationForm()}} id="topright">Register</a>
		  </div>		  
    </div>
    <div id="site_content">
      <div className="sidebar">

        <h3>Search</h3>
        <form method="post" action="#" id="search_form">
          <p>
            <input className="search" type="text" name="search_field" defaultValue="Enter keywords....." />
			<input name="search" type="image" style={{border: 0, margin: "0 0 -9px 5px"}} src="search.png" alt="Search" title="Search" />
          </p>
        </form>
		
        <h3>Quick Links</h3>
        <ul>
          <li><a onClick={ ()=> {this.openItemForm()}}>Add Item</a></li>
          <li><a href="#">link 2</a></li>
          <li><a href="#">link 3</a></li>
          <li><a href="#">link 4</a></li>
        </ul>
      </div>
      <div id="content">
      {(this.state.selectedCategory=="Home")? <h1>My Stuff Assignment</h1>:""}

			{content}

		</div>
    </div>
    <div id="footer">
      Copyright &copy; My Stuff | <a onClick={ ()=> {this.openContactForm()}}>Contact Us</a>
    </div>
  </div>
    );
  }
}

export default App;
