import { createContext, useContext, useState, useRef } from "react";

const SearchContext = createContext()

const SearchProvider = ({children}) => {
    const [keyword, setKeyword] = useState('')
    const searchInputRef = useRef('')

    return (
        <SearchContext.Provider value={{ keyword, setKeyword, searchInputRef }}>
            {children}
        </SearchContext.Provider>
    )
}

const useSearch = () => {
    const context = useContext(SearchContext)
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}

export { SearchProvider, useSearch }

