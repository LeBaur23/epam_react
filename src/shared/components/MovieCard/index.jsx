import React from 'react';

import './movie-card.scss'

export function MovieCard() {
    return (
        <div className="movie-card">
            <div className="movie-card__image">
            </div>
            <div className="movie-card__info">
                <div className="movie-card__genre-title">
                    <div className="movie-card__title">
                        Avangers Endgame
                    </div>
                    <div className="movie-card__genre">
                        Action
                    </div>
                </div>
                <div className="movie-card__year">
                    2004
                </div>
            </div>
        </div>
    );
}
