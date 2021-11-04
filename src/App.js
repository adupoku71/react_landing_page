import React from "react"
import { Header } from "./components/Header"
import Container from "./components/styles/Container.styled"

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  )
}
