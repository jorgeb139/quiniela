import css from "styled-jsx/css"
import { colors, fonts, breakpoints } from "../../styles/theme"

export const globalStyles = css.global`
  html,
  body {
    background: linear-gradient(
      112deg,
      rgba(170, 34, 77, 1) 0%,
      rgba(43, 21, 32, 1) 100%
    );
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  p {
    color: ${colors.white};
  }

  h1 {
    color: ${colors.white};
    font-weight: 800;
    margin-bottom: 16px;
    font-size: 30px;
  }

  h2 {
    color: ${colors.white};
    font-size: 19px;
    margin: 0;
  }

  /* * {
    box-sizing: border-box;
  } */
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  /* main {
    background: rgb(170, 34, 77);
    background: linear-gradient(
      112deg,
      rgba(170, 34, 77, 1) 0%,
      rgba(43, 21, 32, 1) 100%
    );
    border-radius: 10px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
  } */

  /* @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  } */
`
