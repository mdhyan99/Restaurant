import React, { createContext, useState, useEffect } from "react";
const WarenKorbContext = createContext();

export const WarenKorbProvider = ({ children }) => {

    // für product in warenkorb
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

 // für add produckt in Warenkorb
    const addKorb = (id) => {
        if (cart.find((item) => item === id)) {
             
            const removeKorb = cart.filter((item)=> item !== id )

            setCart(removeKorb)
        }

        else {

        setCart([...cart, id]);
       }
   
    };
 

    return (
        <WarenKorbContext.Provider
            value={{
                cart,
                setCart,
                addKorb,
               
            }}
        >
            {children}
        </WarenKorbContext.Provider>
    );
};
export default WarenKorbContext;
