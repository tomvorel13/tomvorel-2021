import * as React from "react"
import NextLink from "next/link"
import { Box, Flex, Link } from "@chakra-ui/react"
import BtnColorMode from "./BtnColorMode"

function Navbar() {
  return (
    <Flex as="header" py={4} justifyContent="space-between" alignItems="center">
      <Box fontFamily={"Grape Nuts"} fontSize={["2xl", "3xl"]}>
        tomvorel.com
      </Box>
      <Flex as="nav">
        <NextLink href="/" passHref>
          <Link _hover={{ textDecoration: "none" }} mr={4}>
            Home
          </Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link _hover={{ textDecoration: "none" }} mr={4}>
            About
          </Link>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Link _hover={{ textDecoration: "none" }} mr={4}>
            Blog
          </Link>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Link _hover={{ textDecoration: "none" }}>Contact</Link>
        </NextLink>
      </Flex>
      <BtnColorMode />
    </Flex>
  )
}

export default Navbar
