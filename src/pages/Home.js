import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";
import { useSyncExternalStore, useState } from 'react';
import { moviesStore } from '../store/movies.js';
import { Pagination } from "@mui/material";

export default function Home() {
    const [page, setPage] = useState(1);
    const moviesStoreLocal = useSyncExternalStore(moviesStore.subscribe, moviesStore.getSnapshot);
    const resultsStoreLocal = useSyncExternalStore(moviesStore.subscribe, moviesStore.getResults);

    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <>
            <div>
                <p>Results count: {resultsStoreLocal}</p>
                <SearchForm page={page}/>
                { moviesStoreLocal.length ? <MovieList/> : <p>Movie not found!!</p> }
                <div className="pagination_wrapper">
                    { resultsStoreLocal ? <Pagination onChange={handleChange} count={Math.ceil(resultsStoreLocal/10)} shape="rounded" /> : null }
                </div>
            </div>
        </>
    )
}