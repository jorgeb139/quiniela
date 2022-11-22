import "../styles/globals.css"
// import { colors } from "../styles/theme"
// import { addOpacityToColor } from "../styles/utils"

function MyApp({ Component, pageProps }) {
  // const primaryOpacityColor = addOpacityToColor(colors.primaryLight, 0.3)
  return <Component {...pageProps} />
}

export default MyApp
