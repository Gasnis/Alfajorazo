import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPlace } from "../../redux/actions"
import style from "./home.module.css";
import Card from "../Card/Card.jsx"
import {
    getProducts
} from "../../redux/actions";
import ScrollUpButtom from "../ScrollUpButton/ScrollUpButton.jsx";
import { IoSearch } from "react-icons/io5";


export default function Home() {

    const dispatch = useDispatch();

    let products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])

    const [currentPlaces, setCurrentPlaces] = useState(9)

    function handlePlace(e) {
        e.preventDefault()
        setCurrentPlaces(currentPlaces + 9)
    }

    let renderProducts = products.slice(0, currentPlaces)

    return (
        <div className={style.principalDiv}>


            <div className={ style.info }>
                <div>
                    <div className={style.info}>
                        <div className={style.cardsContainer}>
                            {
                                products.length ?
                                    products === "404" ?
                                        (
                                            <h1>Not Found</h1>
                                        )
                                        :
                                        products.map((product) => {
                                            return <Card key={product.id} product={product}>
                                            </Card>

                                        })
                                    :
                                    null
                            }
                        </div>
                    </div>

                    <div>
                        <button className={style.botonpaginadodark} onClick={handlePlace}>+</button>
                    </div>
                    <ScrollUpButtom />
                </div>
            </div>
        </div>
    )
}