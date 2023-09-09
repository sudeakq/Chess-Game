import React from 'react'
import { SquareBoard } from './SquareBoard';
import { Square } from './Square';

const Board = ({ board }) => {

    const colorControl = (i) => {
        const x = i % 8;
        const y = Math.abs(Math.floor(i / 8) - 7)
        return (x + y) % 2 === 0
    }

    const positionControl = (i) => {
        const x = i % 8;
        const letters = ["a", "b", "c", "d", "e", "f", "g", "h"][x]
        const y = Math.abs(Math.floor(i / 8) - 7)
        return `${letters}${y + 1}`
    }

    return (
        <div className='w-[640px] h-[640px] bg-green-700 flex flex-wrap' >
            {
                board.flat().map((brd, i) => (
                    <Square colorValue={colorControl(i)} positionControl={positionControl(i)}>
                        {brd && <SquareBoard brd={brd} />}
                    </Square>
                ))
            }
        </div >
    )
}
export default Board;
