import React, { useContext } from "react";

import { Col, Row } from "react-bootstrap";

import { items } from "../data";
import ProductCard from "./ProductCard";

import FavoriteContext from "../context/FavoriteContex";

const Category = ({ category }) => {
    const { searchInput } = useContext(FavoriteContext);

    const data_Category = category
        ? items.filter((d) => d.category === category)
        : items;
    // return (

    return searchInput === "" ? (
        <div className="card d-flex justify-content-between g-3">
            <Row md={1} xs={1} lg={1} className="g-4">
                {/* { category ?
               (<img src={data_Category[0].imgUrl} alt={data_Category.title} />): null} */}
                {/* // Oder */}
                {category && (
                    <img
                        src={data_Category[0].imgUrl}
                        alt={data_Category[0].title}
                    />
                )}
                {data_Category.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </Row>
        </div>
    ) : (
        // für search  hier zeigt uns was wir suchen in Startseite

        <Row md={2} xs={1} lg={4} className="g-3">
            {items
                .filter((el) =>
                    el.title.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((item) => {
                    return (
                        <Col key={item.id}>
                            <ProductCard item={item} />
                        </Col>
                    );
                })}
        </Row>
    );
};

export default Category;
