import css from "styled-jsx/css"
import { colors, fonts } from "../../styles/theme"

export default css`
  * {
    font-family: ${fonts.base};
  }

  .button-top-container {
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
  }

  .button-top {
    border-radius: 9999px;
    display: inline-flex;
    align-items: center;
    padding: 0.75rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    color: ${colors.primary};
    background-color: ${colors.yellow};
    transition-property: opacity;
    transition-timing-function: cubic-bezier(1, 0, 1, 1);
    transition-duration: 150ms;
    border: none;
    width: 50px;
    height: 50px;
    justify-content: center;
    cursor: pointer;
  }

  .button-top:hover {
    background-color: ${colors.yellow};
  }

  .button-top:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    --tw-ring-offset-width: 2px;
    box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),
      var(--tw-ring-shadow);
    --tw-ring-color: ${colors.white};
  }

  .button-top-show {
    opacity: 1;
  }

  .button-top-hidden {
    opacity: 0;
  }

  .icon-arrow {
    height: 3rem;
    width: 3rem;
  }
`
