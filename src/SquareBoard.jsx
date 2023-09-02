import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';

export const SquareBoard = ({ brd }) => {
    const [{ isDragging }, drag, preview] = useDrag({
        type: 'chess',
        item: {
            id: `${brd.type}_${brd.color}`
        },
        collect: (monitor) => {
            return { isDragging: ! !monitor.isDragging }
        }
    })
    const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.png`);
    console.log("brdd", brd);
    return (
        <div ref={drag}>
            <DragPreviewImage src={pieceImage} connect={preview} />
            <img className='w-[60px]' src={pieceImage} alt="" />
        </div>
    );
};
