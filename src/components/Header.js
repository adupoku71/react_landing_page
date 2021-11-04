import React from "react"
import Container from "./styles/Container.styled"
import { Nav, StyledHeader, Logo, Image } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-images the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in geniune discussion.
            </p>

            <Button bg="#ff0099" color="white">
              Get Started For Free
            </Button>
          </div>

          <div>
            <Image src="./images/illustration-mockups.svg" />
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  )
}
