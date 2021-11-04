import React from "react"
import { Header } from "./components/Header"
import Container from "./components/styles/Container.styled"
import GlobalStyles from "./components/styles/GlobalStyles"

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <p>Hello World</p>
      </Container>
    </>
  )
}
