import React from "react"
import Container from "./styles/Container.styled"
import { Nav, StyledHeader, Logo } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  )
}
