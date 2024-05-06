"use client"
import { useState } from 'react';

const useSearchQuery = () => {
    if(typeof window !== 'undefined') {
        const [searchQuery, setSearchQuery] = useState<any>(
            window.localStorage.getItem('searchQuery') || '' || []
        );

        const setQuery = (query:any) => {
            setSearchQuery(query);
            window.localStorage.setItem('searchQuery', query);
        };

        return [searchQuery, setQuery];
    }
};

export default useSearchQuery;