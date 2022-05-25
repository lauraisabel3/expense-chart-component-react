import styled from "@emotion/styled";
import { breakPoints as bp } from "../../Styles/breakPoints";

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

  ${bp.desktop} {
    span {
      font-size: 1.4rem;
    }
  }
`
const Column = styled.div `
  width: 90%;
  margin: 8px auto 0 auto;
  background-color: ${props => (props.height === '120px' && props.click ) ? 'var(--cyan)' : 'var(--red)'};
  border-radius: 4px;
  opacity: ${props => props.click && '0.7'};
  cursor: pointer;
`

const Amount = styled.div `
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-brown);
  border-radius: 4px;

  h5 {
    font-size: 1.4rem;
    font-weight: 700;
    font-family: inherit;
    color: var(--cream);
  }

  ${bp.desktop} {
    font-size: 1.8rem;
  }
  
`

export { ColumnContainer, Column, Amount }