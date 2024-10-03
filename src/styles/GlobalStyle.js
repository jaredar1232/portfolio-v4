import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize}

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        /* 1rem = 10px; */
        scroll-behavior: smooth;

        /* width: 550px; */
        /* @media (max-width: 37.5em) {
        font-size: 50%;
    } */
        @media (max-width: 112.5em) {
            font-size: 75%;
            /* 1rem = 12, 12/16 */
        }

        @media (max-width: 75em) {
            font-size: 56.25%;
            /* 1rem = 9px, 9/16 */
        }

        @media (max-width: 56.25em) {
            font-size: 50%;
            /* 1rem = 8px, 8/16 */
        }
    }

    body {
        font-family: Helvetica, sans-serif;
        font-display: swap;
        font-weight: 300;
        line-height: 1.7;
        color: rgb(119, 119, 119);
        background-color: rgb(252, 252, 252);
        padding: 0rem;
        box-sizing: border-box;
    }

    /* site and site-content are used to keep the footer outside the bodys flow and at the bottom of the page */
    .site {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .site-content {
        flex: 1;
    }


    ::-webkit-scrollbar {
        width: 0;
    }

    .no-scroll {
        overflow: hidden;
    }

    /* remove button styling */
    button,
    input[type="submit"],
    input[type="reset"] {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        line-height: inherit;
    }
`
