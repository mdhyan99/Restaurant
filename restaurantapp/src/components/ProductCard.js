import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";

import { IoMdAdd } from "react-icons/io";

import IconProdCard from "./IconProdCard";
import ProductInfo from "./ProductInfo";
import WarenKorbContext from "../context/WarenKorbContext";
import { MdOutlineDeleteForever } from "react-icons/md";


const ProductCard = ({ item }) => {
    const { addKorb,cart } = useContext(WarenKorbContext);
    return (
        <div className="d-flex  justify-content-between card  ">

             {/* für Preis un Beschreibun */}
            <Row>
                <Col>
                  <ProductInfo item={item}/>
                </Col>
            </Row>

                       {/* für Icon  */}
            <div className="d-flex justify-content-between icon">
                           <IconProdCard item={item}/>
                       
                                <div>
                                {cart.includes(item.id) ? (

                                   
                                        <MdOutlineDeleteForever  className="icon-delet"     
                                        onClick={() => addKorb(item.id)}
                                         />
                                    ):(

                                        <IoMdAdd        style={{
                                            color: "gray",
                                            fontSize: "33px",
                                        }}
                                        onClick={() => addKorb(item.id)}
                                         />
                                    )
                                }
                                    </div>
                             
                                
                                </div>
                              
              
        </div>
    );
};

export default ProductCard;
