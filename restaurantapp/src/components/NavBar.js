import React, { useContext } from "react";

import { Button, Form, Container, Navbar, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import { BsCartCheck } from "react-icons/bs";
import { AiOutlineHeart,AiOutlineUser  } from "react-icons/ai";

import Links from "./Links";
import FavoriteContext from "../context/FavoriteContex";
import WarenKorbContext from "../context/WarenKorbContext";

const NavBar = () => {
    const { cart} = useContext(WarenKorbContext);

    const {searchInput,setSearchInput} = useContext(FavoriteContext); // für Search

    return (
        <div className="sticky" >
            <Navbar  bg="dark" expand="lg" variant="dark">
                <Container>
                    <div className="res-name">Rayan Restaurant</div>
                    <Form className="d-flex">
                        <FormControl
                            value={searchInput}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            // onChange={handleChange}
                            onChange={(e)=>setSearchInput(e.target.value)}

                        />
                        <Button variant="outline-success"> Search</Button>
                    </Form>
                </Container>
            </Navbar>
            <div bg="dark" variant="dark" className=" korb-login">
                <AiOutlineUser className="korp" />
            <Link className="link" to="/favoriteproduct">
                <AiOutlineHeart className="korp" />
                </Link>
                <Link to="/warenkorb">
                <BsCartCheck className="korp" />
                <span className="span-like">{cart.length}</span>
                </Link>
            </div>
<Links />
            
        </div>
    );
};

export default NavBar;
