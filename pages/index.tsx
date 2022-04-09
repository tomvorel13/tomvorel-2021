import * as React from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Intro from "../components/Home/Intro"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | tomvorel.com</title>
      </Head>
      <Intro />
    </>
  )
}

export default Home
