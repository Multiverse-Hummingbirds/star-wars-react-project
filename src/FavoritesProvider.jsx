import React, { createContext, useState } from 'react'


// Context intialization
export const FavoritesContext = createContext();

// export function useFavorites(){
//     return useContext(FavoritesContext)
// }

function FavoritesProvider({ children }) {
    // initialize state for the list of favorites
    const [favorites, setFavorites] = useState([]);

    function addFavorite(favorite) {
        // copy the current list of favorites w/o modifying and add new fav to it
        setFavorites([...favorites, favorite])
    }

    function removeFavorite(person) {
        // copy current list and filter out the character by name
        setFavorites(favorites.filter((favorite) => person.name !== favorite.name))
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider;