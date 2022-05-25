import styled from "@emotion/styled"
import { breakPoints as bp } from "../../Styles/breakPoints";

const Container = styled.div `
  width: 100%;
  height: auto;
  margin-top: 40px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--red);
  border-radius: 12px;

  ${bp.desktop} {
    max-width: 1600px;
    margin: 0 auto;
  }
`

const Title = styled.h1 `
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--cream);

  span {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--light-orange);
  }

  ${bp.desktop} {
    font-size: 1.8rem;

    span {
      font-size: 2.2rem;
    }
  }
`

const Logo = styled.img `
  width: 60px;
  height: 60px;
`

export { Container, Title, Logo }