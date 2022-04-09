import * as React from "react"
import { useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

function BtnColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      {colorMode === "light" ? (
        <SunIcon
          onClick={toggleColorMode}
          cursor="pointer"
          h={5}
          w={5}
          color="yellow.400"
        />
      ) : (
        <MoonIcon onClick={toggleColorMode} cursor="pointer" h={5} w={5} />
      )}
    </>
  )
}

export default BtnColorMode
