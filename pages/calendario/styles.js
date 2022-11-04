import css from "styled-jsx/css"
import { colors, fonts } from "../../styles/theme"

export default css`
  * {
    font-family: ${fonts.base};
  }

  .dayText {
    font-size: 18px;
    font-weight: bold;
  }

  .monthText {
    font-size: 12px;
    font-weight: 400;
  }

  .vsText {
    font-size: 14px;
    font-weight: 600;
  }

  .dark {
    color: ${colors.black};
  }

  .light {
    color: ${colors.black};
  }

  .timeText {
    font-size: 14px;
    font-weight: 600;
  }

  .teamsText {
    font-size: 14px;
    font-weight: 400;
  }

  .title {
    text-transform: uppercase;
    color: ${colors.white};
    padding-bottom: 30px;
  }

  .groupTitleAccordion {
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .tableHeaderTexts {
    color: ${colors.black};
    font-size: 16px;
    font-weight: 600;
  }

  .tableBodyTexts {
    color: ${colors.black};
    font-size: 14px;
    font-weight: 400;
  }

  @media only screen and (max-width: 600px) {
    .mobileTableContainer {
      overflow-x: auto;
    }
  }
`
