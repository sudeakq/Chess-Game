import React from 'react';
import { useDrop } from 'react-dnd';

export const Square = ({ children, colorValue, positionControl }) => {
    // console.log(colorValue, "colorValue");


    const [, drop] = useDrop({
        accept: 'chess',
        drop: (item) => console.log(item, "itemmm")
    })
    return (
        <div ref={drop} className={`${colorValue ? 'bg-green-800' : 'bg-green-200'} w-[80px] h-[80px] flex items-center justify-center cursor-grab`}>
            {children}
        </div>
    );
}
