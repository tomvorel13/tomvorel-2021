import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  fonts: {
    body: "Nunito, sans-serif",
  },
})

export default theme
