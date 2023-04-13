import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [cards, setCards] = useState([])

    const addNewCard = newCar => {
        setCards([newCar, ...cards])
    }

    return (
        <UserContext.Provider value={{ cards, addNewCard }}>
            {children}
        </UserContext.Provider>
    )
}