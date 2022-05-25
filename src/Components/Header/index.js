import React from "react";
import { Container, Title, Logo } from './styles'
import logo from '../../assets/logo.svg'
const Header = () => {
  return (
    <Container>
      <Title>
        My balance <br/>
        <span>$921.48</span>
      </Title>
      <Logo 
        src={logo}
      />
    </Container>
  )
}

export default Header 