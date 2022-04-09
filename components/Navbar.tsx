import * as React from "react"
import { Box, Flex, Link } from "@chakra-ui/react"
import BtnColorMode from "./BtnColorMode"

function Navbar() {
  return (
    <Flex as="header" py={4} justifyContent="space-between" alignItems="center">
      <Box>LOGO</Box>
      <Flex as="nav">
        <Link _hover={{ textDecoration: "none" }} mr={4}>
          Home
        </Link>
        <Link _hover={{ textDecoration: "none" }} mr={4}>
          About
        </Link>
        <Link _hover={{ textDecoration: "none" }} mr={4}>
          Blog
        </Link>
        <Link _hover={{ textDecoration: "none" }}>Contact</Link>
      </Flex>
      <BtnColorMode />
    </Flex>
  )
}

export default Navbar
