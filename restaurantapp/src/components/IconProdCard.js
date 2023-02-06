import React, { useContext } from "react";
import { BsHeart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiLike } from "react-icons/bi";

import FavoriteContext from "../context/FavoriteContex";
import WarenKorbContext from "../context/WarenKorbContext";

const IconProdCard = ({ item }) => {
    const { favoritep, addFav, addLike, like } = useContext(FavoriteContext);
    const { cart } = useContext(WarenKorbContext);
    console.log(favoritep);
    console.log(cart);

    return (
        <>
            <div>
                {favoritep.includes(item.id) ? (
                    <AiFillHeart
                        onClick={() => addFav(item.id)}
                        style={{ color: "red" }}
                    />
                ) : (
                    <BsHeart onClick={() => addFav(item.id)} />
                )}
            </div>
            <div>
                <BiLike
                    className="like-icon"
                    onClick={() => addLike(item.id)}
                />
                <span className="span-like">{like[item.id]}</span>
            </div>
        </>
    );
};

export default IconProdCard;
