import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
    searchQuery: "",
    setSearchQuery:(searchQuery:string)=>{}
});

export default function SearchProvider({ children }:any) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const handleChange = (newquery:string)=>{
        setSearchQuery(newquery)
    }
    return (
        <SearchContext.Provider value={{ searchQuery,setSearchQuery:handleChange }}>
            {children}
        </SearchContext.Provider>
    );
};

export  function getSearchQuery(){
    return useContext(SearchContext)
}
