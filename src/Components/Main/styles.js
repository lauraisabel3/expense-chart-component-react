import styled from "@emotion/styled";
import { breakPoints as bp } from "../../styles/breakPoints";

const Container = styled.div `
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 40px;
  padding: 20px;
  background-color: var(--light-orange);
  border-radius: 12px;

  ${bp.desktop} {
    max-width: 1600px;
    margin: 40px auto 0 auto;
  }
`

const Title = styled.h1 `
  font-size: 1.8rem;
  color: var(--dark-brown);

  ${bp.desktop} {
    font-size: 2.2rem;
  }
`

const ColumnsContainer = styled.div `
  width: 100%;
  height: auto;
  margin: 40px 0 20px 0;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 8px;
  border-bottom: 3px solid var(--cream);
`

const ColumnContainer = styled.div `
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  span {
    font-size: 1rem;
    margin-top: 8px;
    font-weight: 400;
    color: var(--medium-brown);
  }
`
const Column = styled.div `
  width: 100%;
  background-color: ${props => props.click ? 'var(--cyan)' : 'var(--red)'};
  border-radius: 4px;
`

const Price = styled.h3 `
  display: inline-flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.5rem;
  color: var(--medium-brown);


  span {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--dark-brown);
  }

  ${bp.desktop} {
    font-size: 1.8rem;

    span {
      font-size: 2.2rem;
    }
  }
`

const Discount = styled.h5 ` 
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: inline-flex;
  flex-direction: column;
  align-items: end;
  font-size: 1.4rem;
  color: var(--dark-brown);

  span {
    font-weight: 400;
    color: var(--medium-brown);
  }

  ${bp.desktop} {
    font-size: 1.8rem;
  }

`

export { Container, Title, ColumnsContainer, ColumnContainer, Column, Price, Discount }