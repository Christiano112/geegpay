import { useState, useEffect } from "react";

const useDebounce = (value: string) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return debouncedValue;
};

export default useDebounce;
