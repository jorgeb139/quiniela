import css from "styled-jsx/css"

export const breakpoints = {
  mobile: "520px",
}

export const fonts = {
  base: 'system-ui, -app-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
}

export const colors = {
  primary: "#56042C",
  primaryLight: "#AA224D",
  primaryDark: "#2B1520",
  deepBlue: "#1077C3",
  lightBlue: "#49BCE3",
  yellow: "FEC310",
  black: "#171717",
  white: "#e6e6e6",
}

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .bars__menu {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    display: none;
  }

  .bars__menu span {
    display: block;
    width: 100%;
    height: 2px;
    background: #e6e6e6;
    margin-top: 6px;
    transform-origin: 0px 100%;
    transition: all 0.5s;
    border-radius: 2px;
  }

  .bars__menu .spanActive:first-child {
    transform: rotate(45deg) translate(-2px, 1px);
  }

  .bars__menu .spanActive:nth-child(2) {
    opacity: 0;
    margin-left: -30px;
  }

  .bars__menu .spanActive:last-child {
    transform: rotate(-45deg) translate(-4px, 2px);
  }

  .logoMobile {
    display: none;
  }

  .menu {
    display: flex;
    align-items: center;
    right: 0;
  }

  .menu ul {
    display: flex;
    flex-direction: row;
  }

  .menu ul li {
    list-style-type: none;
    margin-left: 36px;
  }

  .menu ul li a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    color: #e6e6e6;
    font-weight: 400;
  }

  .menu ul li a:hover {
    color: #fec310dd;
    transition: all 0.5s;
  }

  #selected {
    color: #fec310;
    padding: 6px 10px;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 2px solid #fec31088;
  }

  .container_body {
    width: 100%;
    height: 800px;
  }

  .body {
    max-width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
  }

  .container_body .userWelcome {
    max-width: 400px;
  }

  .container_body .userWelcome h1 {
    font-size: 20px;
    font-weight: 600;
  }

  @media screen and (max-width: 900px) {
    .menu .navMenu {
      position: fixed;
      background: #e6e6e6;
      width: 250px;
      height: 100vh;
      top: 0;
      padding: 40px;
      z-index: 1;
      transition: all 0.5s;
      background-image: url("/img/fondo-imagen-menu-mobile.jpg");
      background-size: 100%;
    }

    .menu .navInactive {
      right: -250px;
    }

    .menu .navActive {
      right: 0px;
    }

    .menu ul {
      flex-direction: column;
    }

    .menu ul li {
      margin-top: 30px;
      margin-left: 0px;
    }

    .menu ul li a {
      font-weight: 500;
    }

    .menu ul li a:hover {
      color: #fec310;
      transition: all 0.5s;
    }

    #selected {
      padding: 0px;
      color: #fec310;
      border-radius: 0px;
      border-bottom: 0px;
    }

    .logoMobile {
      display: block;
      z-index: 3;
    }

    .whiteOpacityInactive {
      display: none;
    }

    .whiteOpacityActive {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #e6e6e688;
      display: block;
      z-index: 1;
    }

    .bars__menu {
      margin-top: 60px;
      top: 0;
      right: 10px;
      display: block;
      z-index: 99;
    }
  }
`
