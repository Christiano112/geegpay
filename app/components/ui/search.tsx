import Image from "next/image";
import { useState, useEffect, ChangeEvent, memo } from "react";
import { SearchIcon } from "@/app/utils/images";
import useDebounce from "@/app/utils/debounce";

interface SearchInputType {
    onSearch: (searchQuery: string) => void;
}

const SearchInput = memo(({ onSearch }: SearchInputType) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const debouncedSearchQuery = useDebounce(searchQuery);

    useEffect(() => {
        const handleSearch = () => {
            onSearch(debouncedSearchQuery);
        };

        handleSearch();
    }, [debouncedSearchQuery, onSearch]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="relative h-full max-w-[21rem] min-w-[8rem] 2xs:min-w-[10rem]">
            <input
                type="search"
                id="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleChange}
                className="w-full py-2 pl-8 pr-2 text-sm text-dark bg-white border border-light-ash3 rounded-3xl focus:ring-1 focus:ring-primary focus:outline-none focus:ring-opacity-50 placeholder:text-light-ash4"
            />
            <Image
                src={SearchIcon}
                alt="search-icon"
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-dark-ash2 cursor-pointer"
            />
        </div>
    );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
