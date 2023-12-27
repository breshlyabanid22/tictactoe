import React from 'react'
import {Box} from "./Box"
import "./Board.css"

export const Board = ({board, OnClick}) => {
  return (
    <div className='board'>
        {board.map((value, idx) => {
            return <Box value="X" OnClick={() => OnClick(idx)}/>
        })}
        </div>
  )
}
