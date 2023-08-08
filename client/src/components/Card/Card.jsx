import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
	Alert,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import style from "./card.module.css";
// import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";

export default function CardB({ product }) {

	const [modal, setModal] = React.useState(false);

  	const toggle = () => setModal(!modal);

	const alert = () => {
		return alert("Hello")
	}

	return (
		<div>
			<Card
				color="light"
				style={{
					width: "20rem",
					height: "25rem",
					scrollbarColor: "auto",

					margin: "1rem",
					fontSize: "1rem",
					boxShadow: "0px 0px 5px 2px rgba(67, 67, 67, 0.629)",
				}}
				className={style.card}
				onClick={toggle}
			>
				<Modal isOpen={modal} toggle={toggle} centered>
					<ModalHeader toggle={toggle}>{product.name}</ModalHeader>
					<ModalBody>
					<img alt="Sample" src={product.image} width="150px" height="100px" />
					<br />
						{product.description}
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={alert}>
						AÑADIR AL CARRITO
						</Button>{" "}
						<Button color="secondary" onClick={toggle}>
							Cancelar
						</Button>
					</ModalFooter>
				</Modal>
				<img alt="Sample" src={product.image} />
				<CardBody>
					<CardTitle tag="h5">{product.name}</CardTitle>
					<CardSubtitle className="mb-2 text-muted" tag="h6">
						${product.price}
					</CardSubtitle>
					<Button onClick={() => alert}>AÑADIR AL CARRITO</Button>
				</CardBody>
			</Card>
		</div>
	);
}
