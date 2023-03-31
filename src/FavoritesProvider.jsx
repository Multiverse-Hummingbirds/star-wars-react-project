import React, { createContext, useState } from 'react'

// Context intialization
export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
    // initialize state for the list of favorites
    const [favorites, setFavorites] = useState([]);

    function addFavorite(favorite) {
        // copy the current list of favorites w/o modifying and add new fav to it
        setFavorites([...favorites, favorite])
    }

    function removeFavorite(name) {
        // copy current list and filter out the character by name
        setFavorites(favorites.filter((favorite) => name !== favorite))
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider