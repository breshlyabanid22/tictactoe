import React from 'react'
import "./Box.css"

export const Box = ({value, OnClick}) => {
    const style = value === "X" ? "box x" : "box o";

    return (
      <button className={style} OnClick = {OnClick}>{value}</button>
    )
}