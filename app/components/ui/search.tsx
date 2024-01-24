"use client";

import Image from "next/image";
import { useState, ChangeEvent, memo } from "react";
import { SearchIcon } from "@/app/utils/images";
import useDebounce from "@/app/utils/debounce";

interface SearchInputType {
    onSearch: (searchQuery: string) => void;
}

const SearchInput = memo(({ onSearch }: SearchInputType) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const debouncedSearchQuery = useDebounce(searchQuery);

    onSearch(debouncedSearchQuery);

    // I don't need to use this function, because I already use debounce hook
    const handleSearch = () => {
        onSearch(debouncedSearchQuery);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="relative w-full h-full">
            <input
                type="search"
                id="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleChange}
                onKeyUp={(event) => {
                    if (event.key === "Enter") {
                        handleSearch();
                    }
                }}
                className="w-full max-w-[21rem] py-2 pl-8 pr-2 text-sm text-dark bg-white border border-light-ash3 rounded-3xl focus:ring-1 focus:ring-primary focus:outline-none focus:ring-opacity-50 placeholder:text-light-ash4"
            />
            <Image
                src={SearchIcon}
                alt="search-icon"
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-dark-ash2 cursor-pointer"
                onClick={handleSearch}
            />
        </div>
    );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
