import React, { Component } from "react";
import { Link } from "react-router-dom";

type NavbarProps = {
	title?: string;
}

export class Navbar extends Component<NavbarProps> {
	render() {
		const { title = "Lizard Valley" } = this.props;
		return (
			<nav className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">{title}</span>
				<div className="nav">
					<NavItem link="/lizard_valley/link1" text="Link 1"/>
					<NavItem link="/lizard_valley/link2" text="Link 2"/>
					<NavItem link="/lizard_valley/link3" text="Link 3"/>
					<NavItem link="/lizard_valley/about" text="About"/>
				</div>
			</nav>
		)
	}
}

type NavItemProps = {
	link: string;
	text: string;
}
class NavItem extends Component<NavItemProps> {
	render() {
		const { link, text } = this.props
		return (
			<div className="nav-item mx-3">
				<Link to={link}>{text}</Link>
			</div>
		)
	}
}