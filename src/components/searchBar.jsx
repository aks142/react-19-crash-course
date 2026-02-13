import { useEffect, useState } from "react";
import useDebounce from "../customHooks/debounce";

function SearchBar() {
    const [ searchedTerm, setSearchTerm ] = useState('')

    const debouncedSearchTerm = useDebounce(searchedTerm, 1000)

    useEffect(() => {
        if(debouncedSearchTerm){
            console.log(`Fetching data for: ${debouncedSearchTerm}`);
        }
    }, [debouncedSearchTerm])

    const search = (e = null) => {
        // console.log(e?.target?.value);
        setSearchTerm(e?.target?.value)
    }

    return (
        <>
            <input 
                // style={{border:"bold"}}
                placeholder={"Search here"}
                value={searchedTerm}
                onInput={search}
            />
            <p>{`Searching for: ${debouncedSearchTerm}`}</p>
            {/* <p>{`Searching for: ${searchedTerm}`}</p> */}
        </>
    )
}

function localDebounce(fn, del) {
    let timeot;
    return (...args) => {
        clearTimeout(timeot)
        timeot = setTimeout(() => {
            fn.apply(this, args)
        }, del)
    }
}

export default SearchBar