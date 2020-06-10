import React from 'react';

import './header.scss';
import {Button} from "../";

const INITIAL_STATE = true;

export function Header() {
    const [activeButton, changeSort] = React.useState(INITIAL_STATE);

    const handleSortButtonClick = React.useCallback((booleanType) => {
        changeSort(booleanType);
    }, [changeSort]);

    return (
        <header className="header">
            <div className="header-logo">
                <span><b>netflix</b>roulette</span>
            </div>
            <div className="header-content">
                <span className="header_title">
                    FIND YOUR MOVIE
                </span>
                <div className="header-search-wrapper">
                    <input className="header_input" placeholder='Search' type=""/>
                    <Button value={'SEARCH'}/>
                </div>
                <div className="header-search-type">
                    <span>SEARCH BY</span>
                    <Button value={'TITLE'}
                        className={'header-search-button ' +
                        (activeButton ? 'header-search-button_active' : '')}/>
                    <Button value={'GENRE'}
                        className={'header-search-button ' +
                        (!activeButton ? 'header-search-button_active' : '')}/>
                </div>
            </div>
        </header>
    );
}
