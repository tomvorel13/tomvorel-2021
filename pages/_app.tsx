import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"

import { ChakraProvider, Container } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Navbar from "../components/Navbar"
import theme from "../theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="900px" fontSize={["md", "lg"]}>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
