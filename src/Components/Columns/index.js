/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx} from '@emotion/react'
import  React, { useState } from "react";
import { ColumnContainer, Amount, Column } from "./syles";




 const Columns = ({id, day, height, amount, screenWidth}) => {
  const [click, setClick] = useState(false);
  return(
    <>
        <ColumnContainer
          key={id}
          onClick={() => setClick(!click)}
        >
          {(click && screenWidth > '1024') && <Amount>
           <h5>{amount}</h5>
          </Amount>}
          <Column 
            css = {css `
              height: ${height}
            `}
            click={click}
            height={height}
          />
          <span>{day}</span>
        </ColumnContainer>
    </>
  )
}

export default Columns