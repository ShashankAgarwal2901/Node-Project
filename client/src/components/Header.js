import React, { Component } from "react";
import Payment from "./Payment.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li style={{padding:'0 5px'}}>
						<a href="/auth/google">Log in with google}</a>
					</li>
				);
			default:
				return [
					<li key="1" style={{padding:'0 5px'}}>
						<Payment />
					</li>,
					<li key="2" style={{padding:'0 5px'}}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="3" style={{padding:'0 5px'}}>
						<a href="/api/logout">Log Out</a>
					</li>,
				];
		}
	}
	render() {
		console.log(this.props);
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? "/surveys" : "/"}
						className="left brand-logo"
					>
						Emaily
					</Link>
					<ul className="right" >{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
