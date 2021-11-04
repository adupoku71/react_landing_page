import React from "react"
import { Header } from "./components/Header"
import Container from "./components/styles/Container.styled"
import GlobalStyles from "./components/styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import content from "./content"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
const theme = {
  mobile: "768px",
  colors: {
    footer: "#003333",
  },
}
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item) => {
            return <Card key={item.id} item={item} />
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}
