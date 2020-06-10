import * as React from 'react';

import './sort-button.scss';

const INITIAL_STATE = true;

export const SortButton = () => {
    const [activeButton, changeSort] = React.useState(INITIAL_STATE);

    const handleSortButtonClick = React.useCallback((booleanType) => {
        changeSort(booleanType);
    }, [changeSort]);

    return (
        <div className='sort-button-wrapper'>
            <span className='sort-button__title'>SORT BY</span>
            <button
                onClick={() => handleSortButtonClick(true)}
                className={
                    'sort-button__release-date ' +
                    (activeButton ? 'sort-button__release-date_active' : '')}>
                RELEASE DATE
            </button>
            <button
                onClick={() => handleSortButtonClick(false)}
                className={'sort-button__rating ' +
                    (!activeButton ? 'sort-button__rating_active' : '')}>
                RATING
            </button>
        </div>
    );
}
