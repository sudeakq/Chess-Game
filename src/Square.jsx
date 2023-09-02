import React from 'react';

export const Square = ({ children, colorValue }) => {
    console.log(colorValue, "colorValue");
    return (
        <div className={`${colorValue ? 'bg-green-800' : 'bg-green-200'} w-[80px] h-[80px] flex items-center justify-center cursor-grab`}>
            {children}
        </div>
    );
}
