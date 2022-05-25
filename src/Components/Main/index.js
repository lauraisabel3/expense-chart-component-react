
import React, { useEffect, useState } from "react";
import { Container, Title, ColumnsContainer, Price, Discount} from './styles'
import Columns from '../Columns';

const infoDays = [
  {
    id: 1,
    day: 'mon',
    height: '40px',
    amount: '$20.00',
  },
  {
    id: 2,
    day: 'tue',
    height: '80px',
    amount: '$40.12',
  },
  {
    id: 3,
    day: 'wed',
    height: '120px',
    amount: '$60.00',
  },
  {
    id: 4,
    day: 'thu',
    height: '80px',
    amount: '$40.12',
  },
  {
    id: 5,
    day: 'fri',
    height: '60px',
    amount: '$30.40',
  },
  {
    id: 6,
    day: 'sat',
    height: '100px',
    amount: '$70.20',
  },
  {
    id: 7,
    day: 'sun',
    height: '80px',
    amount: '$40.12',
  },
]

const Main = () => {

  const isBrowser = typeof window !== 'undefined'
  
  let width;
  if(isBrowser) {
    width = window.innerWidth
  }

  const [ screenWidth, setScreenWidth] = useState(width)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  
  return (
    <Container>
      <Title>Spending - Last 7 days</Title>
      <ColumnsContainer>
        {infoDays.map(({id, height, day, amount}) => (
           <Columns
            key={id}
            id={id}
            height={height}
            day={day}
            amount={amount}
            screenWidth={screenWidth}
            />
        ))}
      </ColumnsContainer>
      <Price>
        Total this month
        <span>$478.33</span>
      </Price>
      <Discount>
        +2.4%
        <span>from last month</span>
      </Discount>
    </Container>
  )
}

export  default Main 