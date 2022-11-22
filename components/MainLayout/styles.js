import css from "styled-jsx/css"
import { colors, fonts } from "../../styles/theme"

export const globalStyles = css.global`
  body {
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 100%;
    padding: 0;
    padding-bottom: 10px;
    margin: 0;
    font-family: ${fonts.base};
    background-image: url("/img/bg_main.jpg");
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

  /* .principalSection {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  } */

  /* .principalContainer {
    height: 100vh;
  } */

  .bgContainer {
    margin-top: 20px;
    display: grid;
    min-height: 86vh;
    height: 100%;
    max-width: 1280px;
  }

  .prueba {
    max-width: 1200px;
  }

  .calendarTable tbody tr td {
    padding: 12px 16px !important;
  }
`

export default css``
