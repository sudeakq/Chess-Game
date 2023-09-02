import React from 'react';

export const SquareBoard = ({ brd }) => {
    const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.png`);
    console.log("brdd", brd);
    return (
        <div>
            <img className='w-[40px]' src={pieceImage} alt="" />
        </div>
    );
};
