import { useState } from 'react';

const useSearchQuery = () => {
    const [searchQuery, setSearchQuery] = useState<any>(
        localStorage.getItem('searchQuery') || ''
    );

    const setQuery = (query:any) => {
        setSearchQuery(query);
        localStorage.setItem('searchQuery', query);
    };

    return [searchQuery, setQuery];
};

export default useSearchQuery;