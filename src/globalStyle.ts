import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
      
    }

    body{
      margin: 0;
      font-family: "Nunito", sans-serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal; 
      background: rgb(0,83,138);
      background: linear-gradient(90deg, rgba(0,83,138,1) 0%, rgba(57,0,103,1) 100%);
    }
`;

export default GlobalStyle;