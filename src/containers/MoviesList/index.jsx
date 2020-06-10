import React from 'react';
import {
    MovieCard
} from "../../shared/components";
import './movie-list.scss'

export function MovieList() {
    return (
        <div className="movies-row">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    );
}

