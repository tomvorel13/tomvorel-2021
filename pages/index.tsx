import React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Flex, Text, useColorModeValue } from "@chakra-ui/react"

const Home: NextPage = () => {
  const color = useColorModeValue("purple.500", "yellow.400")
  return (
    <>
      <Head>
        <title>Home | tomvorel.com</title>
      </Head>
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
    </>
  )
}

export default Home
