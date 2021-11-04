import React from "react"
import { SocialIcons } from "./SocialIcons"
import { Flex } from "./styles/Flex.styled"
import Container from "./styles/Container.styled"
import { StyledFooter } from "./styles/Footer.styled"

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="footer_image" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
              doloreiu tempor incididunt ut labor et dolore magna aliqua
            </li>
            <li>+233-54-799-6005</li>
            <li>davidpoku71@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 DAPDEV All rights reserved </p>
      </Container>
    </StyledFooter>
  )
}
