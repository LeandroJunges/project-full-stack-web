import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{  
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        text-align: center;
        font-family: 'Ubuntu', sans-serif;
    }

`;

export default GlobalStyle;
