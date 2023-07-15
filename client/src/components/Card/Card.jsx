import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import { Link } from "react-router-dom";
import style from "./card.module.css";
import { IoCaretBackSharp, IoCaretForwardSharp } from "react-icons/io5";

export default function CardB({ product }) {
	return (
		<div>
			<Card
				color="light"
				style={{
					width: "18rem",
					height: "30rem",
					padding: "0.5rem",
					margin: "3rem",
				}}
			>
				<img alt="Sample" src={product.image} />
				<CardBody>
					<CardTitle tag="h5">{product.name}</CardTitle>
					<CardSubtitle className="mb-2 text-muted" tag="h6">
						${product.price}
					</CardSubtitle>
					<CardText>
					{product.description}
					</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
		</div>
	);
}
