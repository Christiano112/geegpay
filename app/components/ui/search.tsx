"use client";

import Image from "next/image";
import { useState, CSSProperties, ChangeEvent, memo } from "react";
import { SearchIcon } from "@/app/utils/images";

interface SearchInputType {
    placeholder?: string;
    onSearch: (searchQuery: string) => void;
    style?: CSSProperties;
}

const SearchInput = memo(({ placeholder, onSearch, style }: SearchInputType) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="relative" style={style}>
            <input
                type="search"
                id="search"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleChange}
                onKeyUp={(event) => {
                    if (event.key === "Enter") {
                        handleSearch();
                    }
                }}
                className="w-full py-2 pl-8 pr-2 text-sm text-tertiary bg-white border border-primary-50 rounded-md focus:ring-1 focus:ring-primary focus:outline-none focus:ring-opacity-50"
            />
            <Image
                src={SearchIcon}
                alt="search-icon"
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-slate-400 cursor-pointer"
                onClick={handleSearch}
            />
        </div>
    );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;