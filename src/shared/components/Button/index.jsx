import React from 'react';

export function Button({
    value,
   className
}) {
    return (
        <button className={className}>
            { value }
        </button>
    );
}
