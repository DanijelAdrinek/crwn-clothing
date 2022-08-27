import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        const categoryMap = getCategoryMap();

        setCategoriesMap(categoryMap);
    }, [])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
    );
}