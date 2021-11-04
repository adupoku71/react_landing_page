import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  ${
    "" /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'); */
  }
  * {
    box-sizing:border-box;
  }

  body {
    margin:0;
    padding:0;
    font-size:1.15rem;
    font-family:"Poppins",sans-serif;
    color:hsl(182,100%,9%);
  }

  p {
    line-height:1.5;
  }
`

export default GlobalStyles
