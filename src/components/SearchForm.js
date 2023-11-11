import axios from "axios";

import {
    Grid,
    Button,
    Select,
    Tooltip,
    MenuItem,
    TextField,
    InputLabel,
    FormControl,
    InputAdornment
} from "@mui/material";

import { useRef, useState, useEffect } from 'react';
import { moviesStore } from '../store/movies.js';
import SearchIcon from '@mui/icons-material/Search';

const url = 'http://www.omdbapi.com/?apikey=88150c8c';

export default function SearchForm(props) {
    const inputRef = useRef(null);
    const [searchVal, setSearchVal] = useState('');
    const [searchType, setSearchType] = useState('');

    useEffect(() => {
        moviesStore.resetStore();
        getResults();
    }, [props.page])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (searchVal) {
            getResults();
        }
    }

    const getResults = () => {
        axios.get(`${url}&s=${searchVal}&type=${searchType}&page=${props.page}`).then((response) => {
            if(response.data.Search) {
                moviesStore.addMovie(response.data.Search);
                moviesStore.setTotalResults(response.data.totalResults)
            }
            response.data.Error === 'Movie not found!' && moviesStore.addMovie([]);
        });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <Grid container spacing={2} alignItems="flex-start">
                <Grid item xs={12} md={8}>
                    <TextField
                        ref={inputRef}
                        id="input-with-icon-textfield"
                        placeholder="Search movie"
                        fullWidth
                        onChange={(event) => setSearchVal(event.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Tooltip title="Choose type">
                        <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={searchType}
                                label="Type"
                                onChange={(event) => setSearchType(event.target.value)}
                            >
                                <MenuItem value={'movie'}>movie</MenuItem>
                                <MenuItem value={'series'}>series</MenuItem>
                                <MenuItem value={'episode'}>episode</MenuItem>
                            </Select>
                        </FormControl>
                    </Tooltip>
                </Grid>
                <Grid item xs={12} md={2} alignSelf="center">
                    <Button type='submit' variant="contained" endIcon={<SearchIcon />}>
                        Search
                    </Button>
                </Grid>
            </Grid>

        </form>
    )
}