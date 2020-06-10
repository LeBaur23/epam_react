import React from 'react';
import {
    SortButton,
} from "../shared/components";
import {MovieList} from '../containers/MoviesList'
import './main-page.scss'

export function MainPage() {
    return (
        <div className="MainPage">
            <div className="row-sort-button">
                <div className="sort-button-wrapper">
                    <SortButton/>
                </div>
            </div>
            <MovieList />
        </div>
    );
}
