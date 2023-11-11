let movies = [];
let listeners = [];
let totalResults = 0;

export const moviesStore = {
    setTotalResults(val) {
        totalResults = val;
        emitChange();
    },
    addMovie(moviesArr) {
        movies = [...movies, ...moviesArr];
        emitChange();
    },
    resetStore() {
        movies = [];
        emitChange();
    },
    subscribe(listener) {
        listeners = [...listeners, listener];

        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    },
    getSnapshot() {
        return movies;
    },
    getResults() {
        return totalResults;
    }
}

function emitChange() {
    for (let listener of listeners) {
        listener();
    }
}