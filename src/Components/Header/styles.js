import styled from "@emotion/styled"

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
`

const Logo = styled.img `
  width: 60px;
  height: 60px;
`

export { Container, Title, Logo }