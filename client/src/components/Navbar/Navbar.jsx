import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

export default function NavbarRes() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar expand="md" style={{backgroundColor:"#413A20"}} dark>
				<NavbarBrand href="/" style={{
					color: "#FCE15D"
				}}>
					<img
						alt="logo"
						src="https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-alfajor_23-2148779497.jpg"
						style={{
							height: 60,
							width: 60,
							borderRadius: 20,
							padding: 5,
						}}
					/>
					A L F A J O R A Z O
				</NavbarBrand>

				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto" navbar color="light">
						<NavItem>
							<NavLink href="/">Inicio</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/productos">Alfajores</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/aboutus">Sobre Nosotros</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/contact">Contacto</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}
