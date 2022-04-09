import * as React from "react"
import { Flex, Text, useColorModeValue } from "@chakra-ui/react"

function Intro() {
  const color = useColorModeValue("purple.500", "yellow.400")

  return (
    <Flex mt="16" flexDir="column">
      <Text as="h1" fontSize={["4xl", "5xl"]}>
        Hi👋
      </Text>
      <Text as="p" fontSize={["xl", "2xl"]}>
        I'm{" "}
        <Text color={color} as="span">
          Tom
        </Text>{" "}
        and I make websites.
      </Text>
      <Text as="p" fontSize={["xl", "2xl"]}>
        This is my place to geek out and write about all things web.
      </Text>
    </Flex>
  )
}

export default Intro
