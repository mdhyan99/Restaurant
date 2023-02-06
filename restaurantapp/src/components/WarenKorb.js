import React, { useContext } from "react";

import { Col, Row } from "react-bootstrap";
import { MdOutlineDeleteForever } from "react-icons/md";

import { items } from "../data";
import ProductInfo from "./ProductInfo";
import IconProdCard from "./IconProdCard";
import WarenKorbContext from "../context/WarenKorbContext";

const WarenKorb = () => {
    const { cart, addKorb } = useContext(WarenKorbContext);
    const data_Cart = items.filter((item) => cart.includes(item.id));

    return (
        <div className="warenkorb">
            <h1 className="title_h1">Warenkorb Product</h1>

            {/* für Preis un Beschreibun */}
            <Row md={1} xs={1} lg={1} className="g-3 ">
                {data_Cart.map((item) => (
                    <Col className="border" key={item.id}>
                        <Row className="g-3 justify-content-between ">
                            <Col>
                                <ProductInfo item={item} />
                            </Col>
                        </Row>

                        {/* für Icon  */}
                        <div className="d-flex justify-content-between icon">
                            <IconProdCard item={item} />

                            <div>
                                <MdOutlineDeleteForever
                                  className="icon-delet"
                                    onClick={() => addKorb(item.id)}
                                />
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default WarenKorb;
//  <div className="ms-auto fw-bold spanText">
//               {/* {item.price } * {data_Cart.length} */}

//               {data_Cart.reduce((total, cartItem) => {
//                 const item = items.find(
//                   (i) => i.id === cartItem.id
//               );
//                       return (total + cartItem.price  )
//                         },0)}
//                         €
//                     </div>
