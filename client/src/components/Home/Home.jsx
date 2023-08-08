import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./home.module.css";
import CardB from "../Card/Card.jsx";
import { getProducts } from "../../redux/actions";
import ScrollUpButtom from "../ScrollUpButton/ScrollUpButton.jsx";
// import { IoSearch } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "reactstrap";
import NavbarRes from "../Navbar/Navbar.jsx";
import Promo from "../Promos/Promo.jsx";

export default function Home() {
	const dispatch = useDispatch();

	let products = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	// const [currentPlaces, setCurrentPlaces] = useState(9);

	// function handlePlace(e) {
	// 	e.preventDefault();
	// 	setCurrentPlaces(currentPlaces + 9);
	// }

	// let renderProducts = products.slice(0, currentPlaces);

	return (
		<div className={style.principalDiv}>
			<NavbarRes></NavbarRes>

			<Promo></Promo>

			<div className={style.info}>
				<div>
					<div className={style.info}>
						<div className={style.cardsContainer}>
							{products.length ? (
								products === "404" ? (
									<h1>Not Found</h1>
								) : (
									products.map((product) => {
										return <CardB key={product.id} product={product}></CardB>;
									})
								)
							) : (
								<Spinner
									color="light"
									style={{
										width: "5rem",
										height: "5rem",
										margin: "5rem",
									}}
								>
									Loading...
								</Spinner>
							)}
						</div>
					</div>

					{/* <div>
            <button className={style.botonpaginadodark} onClick={handlePlace}>
              +
            </button>
          </div> */}
					<ScrollUpButtom />
				</div>
			</div>
		</div>
	);
}
