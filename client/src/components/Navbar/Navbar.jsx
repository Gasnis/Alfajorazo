import React, { useEffect, useState } from "react";
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
			<Navbar style={{backgroundColor:"#413A20"}} dark>
				<NavbarBrand href="/">
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
					ALFAJORAZO
				</NavbarBrand>

				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink href="/">Inicio</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/productos">Productos</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Options
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>Option 1</DropdownItem>
								<DropdownItem>Option 2</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Reset</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}
