import "../styles/globals.css"
// import { RecoilRoot } from "recoil"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
        },
      }),
    },
  })

  return (
    // <RecoilRoot>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    // </RecoilRoot>
  )
}

export default MyApp
